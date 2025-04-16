import { createContext, useState, useRef, useEffect } from "react";

//1.Creamos el contexto
export const ReproductorContext = createContext();

//2.Componente que envuelve el contexto 
export const ReproductorContextProvider = ({ children }) => {  // Agregado el parámetro children
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);  //Progreso de la barra
    const [duration, setDuration] = useState(0);
    const [currentSong, setCurrentSong] = useState({});
    const [audioReady, setAudioReady] = useState(false);

    // Uso de useRef 
    const audioRef = useRef(null);

    //Cargar canción guardada al iniciar 
    useEffect(() => {
        const savedSong = localStorage.getItem('currentSong');
        if (savedSong) {
            setCurrentSong(JSON.parse(savedSong));
        }
    }, []);

    useEffect(() => {
        if (currentSong && currentSong.audio && audioRef.current) {
            //Nueva fuente de audio 
            audioRef.current.src = currentSong.audio;
            audioRef.current.load();
            setAudioReady(true);

            //reproductir si estaba reproduciendo
            if (isPlaying) {
                audioRef.current.play()
                    .catch(e => {
                        console.error('Error al reproducir', e);
                        setIsPlaying(false);
                    });
            }

            localStorage.setItem('currentSong', JSON.stringify(currentSong));
        }
    }, [currentSong, isPlaying]);

    // Agregada la función handlePlay que faltaba
    const handlePlay = () => {
        if (!audioRef.current) {
            console.error("audioRef.current es null");
            return;
        }

        // Verificar si tenemos una canción y si el audio tiene fuente
        if (!audioRef.current.src && currentSong.audio) {
            audioRef.current.src = currentSong.audio;
            audioRef.current.load();
        }

        // Si no hay canción, no hacer nada
        if (!currentSong.audio) {
            console.warn("No hay canción seleccionada");
            return;
        }

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current
                .play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((error) => {
                    console.error("Error al reproducir", error);
                    setIsPlaying(false);
                });
        }
    };

    //Progreso barra 
    const handleProgress = () => {
        if (audioRef.current && audioRef.current.duration) {
            setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        }
    };

    const handleDuration = () => {
        if (audioRef.current && audioRef.current.duration) {
            console.log('Audio duration:', audioRef.current.duration);
            setDuration(audioRef.current.duration);
        }
    };

    // Configurar listeners de audio
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            // Actualizar el progreso cada vez que se actualiza el tiempo del audio
            audio.addEventListener('timeupdate', handleProgress);

            // Ejecutar una vez cuando el audio carga su metadata para obtener la duración
            audio.addEventListener('loadedmetadata', handleDuration);

            // Listener para cuando termina la canción
            audio.addEventListener('ended', () => {
                setIsPlaying(false);
                setProgress(0);
            });

            return () => {
                // Limpiar los eventos cuando el componente se desmonte
                audio.removeEventListener('timeupdate', handleProgress);
                audio.removeEventListener('loadedmetadata', handleDuration);
                audio.removeEventListener('ended', () => {});
            };
        }
    }, []);

    return (
        <>
            <ReproductorContext.Provider
                value={{
                    isPlaying,
                    setIsPlaying,
                    currentSong,
                    setCurrentSong,
                    progress,
                    audioRef,
                    duration,
                    audioReady,
                    handlePlay,
                    handleProgress,
                    handleDuration
                }}
            >
                <audio ref={audioRef} style={{ display: 'none' }} />
                {children}
            </ReproductorContext.Provider>
        </>
    );
};