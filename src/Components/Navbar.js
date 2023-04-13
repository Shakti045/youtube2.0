import logo from  "../assets/Yotubelogo.jpg"
import { AiOutlineSearch} from 'react-icons/ai';
import {MdModeNight} from 'react-icons/md';
import {CiLight} from 'react-icons/ci';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Appcontext } from "../Appcontext/Appcontextprovider";
function Navbar(){
  let {getdata}=useContext(Appcontext)
    let [searchvalue,setsearchvalue]=useState("");
    let [mode,setmode] = useState(true);
    function handler(event){
     setsearchvalue(event.target.value);

    }
    function submithandler(event){
        event.preventDefault();
        setsearchvalue("");
        getdata(searchvalue);
        
    }
    return (
        <div className="lg:pl-5 lg:pr-5 flex justify-between items-center bg-black  text-white text-2xl">
          <div>
            <NavLink to="/"><img src={logo} className="h-[90px]"></img></NavLink>
          </div>
          <div className=" flex gap-1 bg-richblack-700 px-3  rounded-md">
            <form onSubmit={submithandler}>
            <input className=" border-none w-[30vw] px-5 py-3 bg-transparent rounded-lg text-white text-sm outline-none" type="text" value={searchvalue} placeholder="Search for anything" onChange={handler}></input>
            <button className="relative top-1"><AiOutlineSearch className="text-red-600"></AiOutlineSearch></button>
            </form>
          </div>
          <div>
            <button className="flex gap-1 items-center" onClick={()=>setmode(!mode)}>{
               mode===true?(<><MdModeNight></MdModeNight><p>Dark</p></>):
                      (<><CiLight></CiLight><p>Light</p></>)
                      }
            </button>
          </div>
        </div>
    )
}

export default Navbar;