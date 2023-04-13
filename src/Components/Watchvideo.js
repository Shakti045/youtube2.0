import { useLocation } from "react-router";
import ReactPlayer from "react-player";
function Watchvideo(){
 let location=useLocation();
 let vid=location.pathname.split("/").at(-1);
 console.log(`https://www.youtube.com/watch?v=${vid}`);
    return (
        <div className=" bg-richblack-700 absolute  -z-30 w-[100vw] h-[100vh]  flex flex-col items-center ">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${vid}`} controls={true}  playing={true}></ReactPlayer>
        </div>
    )
}
export default Watchvideo;