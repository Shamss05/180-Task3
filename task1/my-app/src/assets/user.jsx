import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faEnvelope, faPhone, faGlobe, faShuffle, faVenus, faMars } from "@fortawesome/free-solid-svg-icons";

function User() {
    const [user, setUser] = useState(null);

    const fetchData = async (gender = "") => {
        const url = `https://randomuser.me/api/${gender?`?gender=${gender}`:""}`; 
        const response = await axios.get(url);
        setUser(response.data.results[0]);
    };
    useEffect(() => {
        fetchData();
    }, []);
    if (!user) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-neutral-800">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-[#700608] rounded-full animate-spin"></div>
            </div>
        );
    }
    const formattedDate = new Date(user.dob.date).toLocaleDateString("en-US");
    return (
        <div className="bg-neutral-800 w-full h-screen flex items-center justify-center gap-4">
            <div className="flex bg-white shadow-lg rounded-lg p-8 w-[550px] flex-row items-start gap-4">
                <div>
                    <img src={user.picture.thumbnail} alt="" className="border-2 rounded-full w-24" />
                </div>
                <div className="flex flex-col items-start text-left w-full">
                    <p className="font-bold text-xl">{user.name.title} {user.name.first} {user.name.last}</p>
                    
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCalendarDays} className="text-gray-600" />
                        <p className="text-neutral-800">{formattedDate} ({user.dob.age} years old)</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray-600" />
                        <p className="text-neutral-800">{user.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faPhone} className="text-gray-600" />
                        <p className="text-neutral-800">{user.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faGlobe} className="text-gray-600" />
                        <p className="text-neutral-800">{user.location.country}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <button 
                    onClick={() => fetchData()}
                    className="bg-[#700608] text-white font-bold py-2 px-4 rounded-full w-10 h-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faShuffle} />
                </button>
                <button 
                    onClick={() => fetchData("female")}
                    className="bg-[#700608] text-white font-bold py-2 px-4 rounded-full mt-4 w-10 h-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faVenus} />
                </button>
                <button 
                    onClick={() => fetchData("male")}
                    className="bg-[#700608] text-white font-bold py-2 px-4 mt-4 rounded-full w-10 h-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faMars} />
                </button>
            </div>
        </div>
    );
}

export default User;
