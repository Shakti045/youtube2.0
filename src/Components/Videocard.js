import { Link } from "react-router-dom";

function Videocard({id,snippet}){
   
    return (
        <Link to={`/Watchvideo/${id.videoId}`}>
          <div  className=" w-320 min-h-[300px]  flex flex-col text-white">
         <div className="bg-richblack-700">
         <img src={snippet.thumbnails.medium.url} className=" rounded-md"></img>
         </div>
          <div>
          <p className=" w-[320px] ">{snippet.title}</p>
          </div>
        
           <p>{snippet.publishedAt.substring(0,10)+" "+snippet.publishedAt.substring(11,16)}</p> 
        </div>
        </Link>
    )
}

export default Videocard;