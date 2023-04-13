import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import Watchvideo from "./Components/Watchvideo";
import Sidebar from "./Components/Sidebar";
import Channelpage from "./Components/Channelpage";


function App() {
  return <div  className="overflow-hidden">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Routes>
         <Route path="/" element={<Feed></Feed>}></Route>
         <Route path="/Channelpage" element={<Channelpage></Channelpage>}></Route>
         <Route path="/Watchvideo/:videoid"  element={<Watchvideo></Watchvideo>}></Route>
      </Routes>
  </div>;
}

export default App;
