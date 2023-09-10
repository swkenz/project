import avatar from "../assets/icons/user.png";
import { useNavigate } from "react-router-dom";

function LandingPage () {
    const Navigate = useNavigate();
    const handleTodetail = () =>{
    Navigate("/details");
};
return(
    <div className="text-center font-mono">
        <p className="text-2xl font-bold uppercase">About Me</p>
        <div className="flex justify-center">
        <img 
            src={avatar} 
            alt="proflie"
            className="w-[15%] my-3 bg-white rounded-full p-6" />
        </div>
        <p className="text-md mt-2 font-bold text-white mx-8 md:mx-36">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>{""}
        <br />
        <button 
        className="text-xl text-[#12CDE7] underline" 
        onClick={() => handleTodetail()}
        >NEXT
        </button>
    </div>
)
}

export default LandingPage;