import { GoHome } from "react-icons/go";
import { FiFolder } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";
import { BiShareAlt } from "react-icons/bi";
import { PiTrashSimpleBold } from "react-icons/pi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbSettings } from "react-icons/tb";
import { BsRocketTakeoff } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="h-screen w-56 p-4 flex flex-col justify-between mx-3">
      <div>
        <h2 className="text-2xl font-bold text-blue-700 mb-6 px-2">abc firm</h2>
        <ul className="flex flex-col text-center">
          <li className="flex items-center mb-4 bg-blue-100 rounded-md py-2 px-2">
            <GoHome className="w-6 h-6 mr-2" />
            Home
          </li>
          <li className="flex items-center mb-4 px-2">
            <FiFolder className="w-6 h-6 mr-2" />
            All Files
          </li>
          <li className="flex items-center mb-4 px-2">
            <CiBookmark className="w-6 h-6 mr-2" />
            Saved
          </li>
          <li className="flex items-center mb-4 px-2">
            <BiShareAlt className="w-6 h-6 mr-2" />
            Integration
          </li>
          <li className="flex items-center mb-4 px-2">
            <PiTrashSimpleBold className="w-6 h-6 mr-2" />
            Trash
          </li>
          <li className="flex items-center mb-4 px-2">
            <TbSettings className="w-6 h-6 mr-2" />
            Settings
          </li>
          <li className="flex items-center mb-4 px-2">
            <AiOutlineQuestionCircle className="w-6 h-6 mr-2" />
            Help and Support
          </li>
        </ul>
      </div>
      <div className="mt-4 bg-blue-100 text-center flex flex-col items-center p-4 rounded-md space-y-2">
        <BsRocketTakeoff className="w-6 h-6 text-blue-800" />
        <h1 className="font-semibold">Upgrade Account</h1>
        <p className="text-xs font-light whitespace-nowrap mb-2">
          Access to Unlimited Transcription
        </p>
        <button className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded w-full">
          Upgrade
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
