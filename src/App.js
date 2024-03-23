import React, { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import Playlist from "./components/Playlist";
import { videosData } from "./data/videosData";
import VideoDetails from "./components/VideoDetails";
import "./App.css";

function App() {
  const [videos] = useState(videosData);
  const [currentVideo, setCurrentVideo] = useState(videosData[0]);

  const handleVideoChange = (id) => {
    const video = videos.find((video) => video.id === id);
    setCurrentVideo(video);
  };
  const handleNextVideo = () => {
    const currentIndex = videos.findIndex((video) => video.sources[0] === currentVideo.sources[0]);
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentVideo(videos[nextIndex]);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="w-full bg-red-900 p-2">
        <h1 className="text-4xl font-semibold p-2 text-white text-center">
           WebApp Video PLayer
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 gap-6 p-7">
        <div className="md:col-span-2 rounded-lg">
          {videos.length > 0 ? (
            <>
              <VideoPlayer 
               src={currentVideo?.sources[0]} 
               onNextVideo={handleNextVideo}
               watchedTime={localStorage.getItem(`video_${currentVideo.id}_time`)}
               id={currentVideo.id}
                />
              <VideoDetails video={currentVideo} /> 
            </>
          ) : (
            <p>No videos available</p>
          )}
        </div>
        <div className="rounded-lg">
          {videos.length > 0 && (
            <Playlist
              playlistVideos={videos}
              onVideoChange={handleVideoChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
