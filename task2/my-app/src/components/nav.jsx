import logo from "../assets/logo-2e33b7a0.png";

function Navbar  (){

    return (
        <nav className="bg-[#1f1f1f] shadow-md">
            <div className="mx-auto flex items-center justify-between px-52 py-1">
                <div className="p-0 m-0">
                    <a href="#">
                        <img src={logo} alt="Logo" className="w-[90px]" />
                    </a>
                </div>
                <ul className="flex gap-6 text-[#ccc] text-[1.1rem] py-4">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Team Hierarchy</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
