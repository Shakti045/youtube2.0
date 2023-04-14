import { useLocation } from "react-router";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import Videocard from "./Videocard";
import Videpdetail from "./Videodetail.js"

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e7aa06906emshfc4ba8dd14b85b0p1321f8jsnc54df8553edf',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

function Watchvideo(){
 let location=useLocation();
 let vid=location.pathname.split("/").at(-1);
let [sugestvideo,setsuggestvideo]=useState([]);
let[videodetail,setvideodetail]=useState("");


async function getdata(){
    let data=await fetch(`https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${vid}&part=id%2Csnippet&type=video&maxResults=50`, options);
    let {items} = await data.json();
    setsuggestvideo(items);
}

async function getvideodetail(){
 let data=await fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${vid}`, options);
 let {items}=await data.json();
 console.log(items);
 setvideodetail(items[0]);
}



useEffect(()=>{
    getvideodetail();
    getdata();
},[location.pathname]);



    return (
        <div className=" bg-black absolute  -z-30 w-[100vw] h-[100vh] text-white flex  pl-8 ">
            <div className="flex flex-col gap-2">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${vid}`} controls={true}  playing={true}></ReactPlayer>.
            <Videpdetail {...videodetail}></Videpdetail>
            </div>
           
            <div className="w-full flex flex-col gap-4 text-white bg-black items-center">
            <h1 className=" font-bold text-4xl text-center text-red-700">Suggested Videos</h1>
            <div className="overflow-y-auto w-full flex flex-col gap-4 text-white bg-black items-center">
                {
                    sugestvideo.map((data)=>{
                        return (<Videocard key={data.id.videoId} {...data}></Videocard>)
                    })
                }
                </div>
            </div>
        </div>
    )
}
export default Watchvideo;