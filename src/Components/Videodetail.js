import { useState } from "react";
function Videodetail(props){
let [showdesc,setshowdesc]=useState(false);
    return (
        <div>
         <h1 className=" text-2xl font-bold">{props?.snippet?.title}</h1>
         <button onClick={()=>setshowdesc(!showdesc)}>Description...</button>
         <p>
            {
                showdesc===true?(`${props?.snippet?.description}`):""
            }
         </p>
        </div>
    )
}

export default Videodetail;