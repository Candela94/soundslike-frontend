import { createContext, useState, useRef, useEffect } from "react";

//1.Creamos el contexto
export const ReproductorContext = createContext();

//2.Componente que envuelve el contexto 

export const ReproductorContextProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const [progress, setProgress] = useState(0);  //Progreso de la barra

    const [duration, setDuration] = useState(0);

    const [currentSong, setCurrentSong] = useState({});

    const [audioReady, setAudioReady] = useState(false);

    const [songList, setSongList] = useState([])

    const [songId, setSongId] = useState(0)

    // Uso de useRef 
    const audioRef = useRef(null);



    //Cargar lista de canciones

    const loadList = (songs) => {
        setSongList(songs);


        if (currentSong._id) {

            const i = songs.findIndex(song => song._id === currentSong._id)
            if (i !== -1) {
                setSongId(i)
            }
        }
    }




    //Función siguiente 
    const next = () => {

        if (songList.length === 0) return;

        const newId = (songId + 1) % songList.length;
        setSongId(newId);
        console.log('siguiente canción', newId)
        
    }




    //Función siguiente 
    const prev = () => {

        if (songList.length === 0) return;

        const newId = (songId - 1) % songList.length;
        setSongId(newId);
       
    }





    //Cargar canción guardada al iniciar   
    useEffect(() => {
        const savedSong = localStorage.getItem('currentSong');
        if (!savedSong || savedSong === "undefined") return;


        try {
            const parsedSong = JSON.parse(savedSong);
            if (savedSong) {

                if (parsedSong && typeof parsedSong === 'object') {
                    setCurrentSong(parsedSong)
                }

            }
        } catch (e) {
            console.error('error al parsear', e);
            localStorage.removeItem('currentSong');
        }
    }, []);



    useEffect(() => {

        if (!currentSong || !currentSong.audio) {
            return; 
        }



        if (audioRef.current) {
            audioRef.current.src = currentSong.audio;
            audioRef.current.load();
            setAudioReady(true);
        }


        if (isPlaying && audioRef.current) {
            audioRef.current.play().catch((e) => {
                console.error('Error al reproducir:', e);
                setIsPlaying(false);
            });
        }

   

    }, [currentSong]);




    useEffect(() => {
        // Verificar si songList tiene canciones
        if (!songList || songList.length === 0) {
            console.log("No hay canciones en la lista");
            return;
        }
        console.log("Song list loaded: ", songList);
    }, [songList]);
    
    useEffect(() => {
        // Verifica el estado de audioRef y currentSong
        if (audioRef.current) {
            console.log("Audio ref:", audioRef.current); // Verifica el audioRef
            console.log("Current song:", currentSong); // Verifica que currentSong cambie
        }
    }, [currentSong]);









    useEffect(() => {
        if(songList.length > 0 && songId >= 0 && songId < songList.length) {

            console.log("Cambiando canción a: ", songList[songId]);
            setCurrentSong(songList[songId])
        }
    },[songId, songList])




    //Manejo de cambio de cancion 

    useEffect(() => {


        if(!currentSong || !currentSong.audio) return;

        if(audioRef.current) {

            audioRef.current.src = currentSong.audio;
            audioRef.current.load()
            setAudioReady(true)
        }


        if(isPlaying && audioRef.current) {
            audioRef.current.play().catch((e) => {
                console.error('Error al reproducir', e)
                setIsPlaying(false)
            })
        }



        localStorage.setItem('currentSong', JSON.stringify(currentSong))

    },[currentSong])


//Manejo de reproduccion/pausa
useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return


    if (isPlaying) {
        audio.play().catch(e => {
            console.error('Error al reproducir')
            setIsPlaying(false)
        })
    } else {
        audio.pause()
    }


}, [isPlaying])



const handlePlay = () => {
    if (!audioRef.current) {
        console.error("audioRef.current es null");
        return;
    }




    if (!currentSong.audio) {
        console.warn("No hay canción seleccionada");
        return;
    }



    // Verificar si tenemos una canción y si el audio tiene fuente
    if (!audioRef.current.src && currentSong.audio) {
        audioRef.current.src = currentSong.audio;
        audioRef.current.load();
    }


    setIsPlaying(!isPlaying)



};





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




const handleEnd = () => {

    setIsPlaying(false)
    setProgress(0)
    next()
}




return (
    <>

        <audio ref={audioRef} style={{ display: 'none' }} onTimeUpdate={handleProgress} onLoadedMetadata={handleProgress} onEnded={handleEnd}></audio>
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
                handleDuration,
                handleEnd,
                loadList,
                next,
                prev,
                setSongId,
                songList
            }}
        >
            {children}
        </ReproductorContext.Provider>
    </>
);
};