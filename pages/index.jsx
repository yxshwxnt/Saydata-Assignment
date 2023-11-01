import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import { FiFolder } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";
import { RxText } from "react-icons/rx";

export default function Home() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex justify-between m-7">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Welcome Shakirat</h2>
              <p className="text-gray-600">
                Upload your audio and Video to convert to text
              </p>
            </div>
            <div className="flex">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 rounded w-full">
                Transcribe File
              </button>
            </div>
          </div>
          <div className="flex m-8">
            <div className="flex flex-col pr-24 border-black rounded-md">
              <FiFolder className="w-6 h-6 mr-2 mb-8" />
              <span className="text-slate-800 font-semibold">100</span>
              <p>Uploaded Files</p>
            </div>
            <div className="flex flex-col pr-24 border-solid rounded-md">
              <RxText className="w-6 h-6 mr-2 mb-8" />
              <span className="text-slate-800 font-semibold">50</span>
              <p>Transcribed</p>
            </div>
            <div className="flex flex-col pr-24 border-solid rounded-md">
              <CiBookmark className="w-6 h-6 mr-2 mb-8" />
              <span className="text-slate-800 font-semibold">20</span>
              <p>Saved</p>
            </div>
          </div>
          <Table />
        </div>
      </div>
    </>
  );
}
