import { useContext } from "react";
import { Appcontext } from "../Appcontext/Appcontextprovider";
import Videocard from "./Videocard";
import Loader from "./Loader";

function Feed(){
    let {video,loader}=useContext(Appcontext);
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1  gap-0 pl-[17vw] lg:pt-28 pt-44 overflow-y-auto h-[100vh] w-[100vw] absolute -z-20 top-0 left-0 right-0 bottom-0 bg-richblack-700">
           {
             loader===true?(<Loader></Loader>):( video.map((data)=>{
                return <Videocard key={data.id.videoId} {...data}></Videocard>
            }))
           }
        </div>
    )
}
export default Feed;