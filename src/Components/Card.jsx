import { FaHeart } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
const Card = ({imgUrl, Title, Year, runtime, plot, actors, genres, display}) => {
    return (
        <>
            <div className="flex w-full p-4  shadow-xl  rounded-lg bg-slate-400">
                <div className="flex flex-col w-[50%] gap-10 justify-between">
                    <div className="flex gap-7">
                        <div className="h-[150px]">
                            <img src={imgUrl} alt="img" className="w-[100px] h-[150px]"/>
                        </div>
                        <div className="flex flex-col items-start gap-4 ">
                            <h1 className="text-3xl">{Title}</h1>
                            <div className="flex gap-1 items-center">
                                <p className="text-sky-800">{Year}</p>
                                <p className="text-sm font-light">{actors}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="border border-solid border-black p-1">{runtime}</p>
                                <div className="font-serif text-sm gap-1 flex">
                                    {genres}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[400px] text-justify">
                        {plot}
                    </div>
                    <div className="text-gray-500 flex gap-4 ">
                        <FaHeart className="hover:text-rose-600 cursor-pointer"/>
                        <FaShareAlt className="hover:text-blue-600 cursor-pointer"/>
                        <FaMessage className="hover:text-blue-900 cursor-pointer"/>
                    </div>
                </div>
                <div className="w-[50%] ">
                    <img src={display[0]} alt="imgPoster" className="w-full"></img>
                </div>
                
                
            </div>
        </>
    )
}
export default Card;