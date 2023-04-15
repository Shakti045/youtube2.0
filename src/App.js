import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import Watchvideo from "./Components/Watchvideo";
import Sidebar from "./Components/Sidebar";
import Channelpage from "./Components/Channelpage";
import Playlist from "./Components/Playlist";


function App() {
  return <div  className="overflow-hidden">
      <Navbar></Navbar>
      
      <Routes>
         <Route path="/" element={<><Feed></Feed> <Sidebar></Sidebar></>}></Route>
         <Route path="/Channelpage/:channelId" element={<Channelpage></Channelpage>}></Route>
         <Route path="/Watchvideo/:videoid"  element={<Watchvideo></Watchvideo>}></Route>
         <Route path="/Playlist/:playlistId" element={<Playlist></Playlist>} ></Route>
      </Routes>
  </div>;
}

export default App;
