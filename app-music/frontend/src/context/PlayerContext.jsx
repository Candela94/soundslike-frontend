


import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useFetchPlayLists } from "../../hooks/useFetch";


//Creamos el contexto 

const PlayerContext = createContext();



//Hook para usarlo en distintas partes 
export const usePlayer = () => {
    const context = useContext(PlayerContext)
    if (!context) {
        throw new Error('useplayer debe ser usado dentro de PlayerContextProvider')
    }
    return context;
}



//Definimos el contexto 
export const PlayerContextProvider = ({ children }) => {

    const [playlist, setPlaylist] = useState([]);
    const [currentSong, setCurrentSong] = useState(null)
    const [currentId, setCurrentId] = useState(0)

    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)


    //Referencia de audio 
    const audioRef = useRef(null)



    


    //Función para cargar la playlist 
    const loadList = (songs, id = 0) => {
        console.log("Cargando playlist:", songs);
        if (!songs || !songs.length ) {
            console.warn("Canción inválida o sin audio:", songs[id]);
            return;
        }
     

        setPlaylist(songs)
        setCurrentId(id)
        setCurrentSong(songs[id])
        console.log("Playlist cargada:", songs.length, "canciones, índice:", id);
    }



    //Función para reproducir y pausar 
    const togglePlay = () => {
        console.log("Toggle play llamado");

        if (!currentSong || !audioRef.current?.src) {
            console.warn("No hay audio");
            return;
        }
    

       
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        
    }







    //Anterior/siguiente

    const Next = () => {
        console.log("Next llamado, playlist:", playlist.length, "currentId:", currentId);


        if (playlist.length === 0) {
            console.log("No hay suficientes canciones para avanzar");
            return;
        }

        const nextId = (currentId + 1) % playlist.length;
        console.log("Avanzando a canción:", nextId);
        setCurrentId(nextId)
        setCurrentSong(playlist[nextId])


        if (isPlaying) {
            setTimeout(() => {
                audioRef.current.play().catch((e) => console.error(e))
            }, 100)
        }
    }



    const Prev = () => {

        console.log("Prev llamado, playlist:", playlist.length, "currentId:", currentId);

        if (playlist.length === 0) return

        const prevId = (currentId - 1 + playlist.length) % playlist.length;
        console.log("Retrocediendo a canción:", prevId);
        setCurrentId(prevId);
        setCurrentSong(playlist[prevId])


        if (isPlaying) {
            setTimeout(() => {
                audioRef.current.play().catch((e) => console.error(e))
            }, 100)
        }

    }



    //Efecto para los eventos de audio 
    useEffect(() => {

        const timeUpdate = () => {
            setCurrentTime(audioRef.current.currentTime); //actualiza tiempo acual 
        }



        const loadedMetaData = () => {
            setDuration(audioRef.current.duration)
        }

        const ended = () => {
            Next()
        }



        

        const audio = audioRef.current;
        if(!audio) return;

        audio.addEventListener('timeupdate', timeUpdate);
        audio.addEventListener('loadedmetadata', loadedMetaData);
        audio.addEventListener('ended', ended);

        // Limpiar los event listeners cuando se desmonte
        return () => {
            audio.removeEventListener('timeupdate', timeUpdate);
            audio.removeEventListener('loadedmetadata', loadedMetaData);
            audio.removeEventListener('ended', ended);
        };


    }, [currentId, playlist])

    useEffect(() => {
        console.log("Current ID updated:", currentId);
    }, [currentId]);

    //Efecto para actualizar url de la cancion cuando cambia

    useEffect(() => {
        if (audioRef.current && currentSong?.audio) {
            console.log(" Cargando canción:", currentSong.audio);
    
            audioRef.current.src = currentSong.audio;
            audioRef.current.load();
    
            if (isPlaying) {
                const handleCanPlay = () => {

                  audioRef.current.play().then(() => {
                    setIsPlaying(true)


                  }).catch((e) => {
                    console.error('Error al reproducir', e)
                    setIsPlaying(false)
                  })



                audioRef.current.removeEventListener("canplay", handleCanPlay);
                };
    
                audioRef.current.addEventListener("canplay", handleCanPlay);
            }
        } else {
            console.warn("currentSong o audio no válido", currentSong);
        }
    }, [currentSong]);




    return (


       <PlayerContext.Provider value={{
        currentSong, 
        isPlaying, 
        duration, 
        currentTime, 
        playlist, 
        currentId, 
        loadList, 
        Next, 
        Prev, 
        togglePlay
    }}>
        
        {children}
        <audio ref={audioRef} type={'audio/mp3'}/></PlayerContext.Provider>
    )


}