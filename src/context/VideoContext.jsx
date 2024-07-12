
import { createContext, useContext, useEffect, useState } from 'react';

const VideoContext = createContext();

export const useVideoContext = () => useContext(VideoContext);

export const VideoProvider = ({children}) => {
    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        try {
            const response = await fetch('http://localhost:3000/videos');
            const data = await response.json();
            setVideos(data)
            
        } catch (error) {
            console.error('Error videos:', error);
        }
    };

    useEffect(() =>{
        fetchVideos();
    }, []);

    const addVideo = (video) => {
        setVideos((prevVideos) => [...prevVideos, { ...video, id: prevVideos.length +1}]);
    };

    const updateVideo = (updatedVideo) => {
        setVideos((prevVideos) => 
            prevVideos.map((video) => (video.id === updatedVideo.id ? updatedVideo : video))
        );
    };
    const deleteVideo = (videoId) => {
        setVideos((prevVideos) => prevVideos.filter((video) => video.id !== videoId));
    };

    return (
        <VideoContext.Provider value={{ videos, addVideo, updateVideo, deleteVideo}}>
            {children}
        </VideoContext.Provider>
    );
};
