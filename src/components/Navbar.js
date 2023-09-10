import logo from"../assets/icons/github.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import tiktok from "../assets/icons/tik-tok.png";

const Navbar = () => {
    return(
        <div className="flex justify-between items-center">
            <img src={logo} alt="logo" width={40} className="cursor-pointer" />
            <ul className="hidden md:flex">
                <li className="px-2">
                    <a href="https://www.facebook.com/" target="_blank">
                    <img src={facebook} alt="face" width={30} />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.instagram.com/" target="_blank">
                    <img src={instagram} alt="ig" width={30} />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.tiktok.com/en/" target="_blank">
                    <img src={tiktok} alt="tiktok" width={30} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;