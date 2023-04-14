import { Link } from "react-router-dom";

function Videocard({id,snippet}){
    console.log(snippet);

    return (
        <Link to={`/Watchvideo/${id.videoId}`}>
          <div  className=" w-320 min-h-[300px]  flex flex-col text-white">
         <div className="bg-richblack-700 rounded-md">
         <img src={snippet.thumbnails.medium.url} className=" rounded-md"></img>
         </div>
          <div>
          <p className=" w-[320px] ">{snippet.title}</p>
          </div>
          <div className="flex gap-2 items-center">
          <p className=" font-bold text-xl text-red-500">{snippet?.channelTitle}</p>
           <p>{snippet.publishedAt.substring(0,10)+" "+snippet.publishedAt.substring(11,16)}</p> 
          </div>
        </div>
        </Link>
    )
}

export default Videocard;