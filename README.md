This repository contains Rigi's Assignment Solution, built using ReactJS.

## [Live here]()

![Alt text](</Screenshot 2024-03-23 at 11.12.28 AM.png>)

Objective: Create a Video Player application using React.js or Next.js to allow users to play videos from a playlist. The app should support features like seeking, timer, autoplay, and speed selector. Additionally, users should be able to reorder the playlist.

Implemented:

1. Video Player Component:

   - Implemented a video player with essential functionalities:
     - Play/Pause toggle.
     - Seek functionality.
     - Timer displaying current playback time and duration.
     - Autoplay - as per the chrome policy video has to be muted to use autoplay
     - Speed selector for playback speed adjustment.
     - implemented functionality to continue video playback from where it was last stopped.
     - implemented fullscreen functionality.

2. Playlist Component:

   - Developed a playlist component to display and manage videos.
   - Allow users to reorder videos in the playlist.
   - Clicking on a video in the playlist will load and play that video in the video player.
   - Used 'react-beautiful-dnd' library for re-ordering.

3. Tech Stack:

   - React.js
   - Tailwind CSS

4. Bonus Features
   - Implemented volume control for video player, thumbnail previews, or search/filter functionality for the playlist

## Cloning the repository

```shell
git clone 
```

## Install packages

```shell
npm i
```

## Start the dev server

```shell
npm start
```
