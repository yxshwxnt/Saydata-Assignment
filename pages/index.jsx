import React, { useState, useCallback } from "react";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import { FiFolder } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";
import { RxText } from "react-icons/rx";
import { FiUploadCloud } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
// import { AssemblyAI } from "assemblyai";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Select,
  Input,
  Checkbox,
} from "@nextui-org/react";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("Default");
  const [speakerIdentification, setSpeakerIdentification] = useState(false);

  // const client = new AssemblyAI({
  //   token: process.env.ASSEMBLY_API,
  // });

  // const FILE_URL = "./file.mp3";

  const onDrop = useCallback(async (acceptedFiles) => {}, []);

  const handleTranscribeFile = async () => {
    // try {
    //   const transcript = await client.transcripts.create({
    //     audio_url: FILE_URL,
    //   });
    //   console.log("Transcription Text:", transcript.text);
    // } catch (error) {
    //   console.error("Transcription Error:", error);
    // }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "audio/*,video/*",
    maxSize: 1 * 1024 * 1024 * 1024, // 1GB
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-56">
          <Navbar />
          <div className="flex justify-between m-7">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Welcome Shakirat</h2>
              <p className="text-gray-600 text-md">
                Upload your audio and Video to convert to text
              </p>
            </div>
            <div className="flex">
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-md px-6 rounded w-full"
                onClick={onOpen}
              >
                Transcribe File
              </button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
                <ModalContent className="p-4">
                  {(onClose) => (
                    <>
                      <ModalHeader className="text-2xl font-bold">
                        Transcribe File
                      </ModalHeader>
                      <ModalBody className="">
                        <div className="mb-4">
                          <label className="block text-sm mb-1 font-bold">
                            Transcription Language
                          </label>
                          <select
                            value={selectedLanguage}
                            placeholder="Default"
                            onChange={(e) =>
                              setSelectedLanguage(e.target.value)
                            }
                            className="w-full p-2 border border-gray-300 rounded-md"
                          >
                            {/* Add language options here */}
                          </select>
                        </div>
                        <div className="mb-4">
                          <div
                            {...getRootProps()}
                            className="cursor-pointer border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center rounded-md"
                          >
                            <input {...getInputProps()} />
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <FiUploadCloud className="text-blue-700" />
                            </div>
                            <p className="mt-1">
                              <span className="text-blue-700">
                                Click to Upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              The maximum file size is 1GB for audio and 1GB for
                              videos.
                            </p>
                            <p className="text-xs text-gray-500">
                              Supported Format: mp3, mp4, wav, caf, aiff, avi,
                              rmvb, flv, m4a, mov, wmv, wma
                            </p>
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium mb-1 rounded-md">
                            Import from Link
                          </label>
                          <input
                            type="text"
                            onChange={(e) => setImportLink(e.target.value)}
                            placeholder="Paste a Dropbox, Google Drive or Youtube URL here"
                            className="w-full p-2 border border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="mb-4 flex items-center">
                          <Checkbox checked={speakerIdentification} />
                          <label className="block text-sm  font-bold">
                            Speaker Identification
                          </label>
                        </div>
                        <button
                          className="bg-gray-300 hover:bg-indigo-500 text-white p-3 rounded-md w-full"
                          onClick={handleTranscribeFile}
                        >
                          Transcribe File
                        </button>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 m-8">
            <div className="flex flex-col border border-slate-200 rounded-xl p-4 ">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-2 border border-slate-200">
                <FiFolder className="text-xl" />
              </div>
              <span className="text-slate-800 font-semibold mb-2">100</span>
              <p>Uploaded Files</p>
            </div>
            <div className="flex flex-col border border-slate-200 rounded-xl p-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-2 border border-slate-200">
                <RxText className="text-xl" />
              </div>
              <span className="text-slate-800 font-semibold mb-2">50</span>
              <p>Transcribed</p>
            </div>
            <div className="flex flex-col border border-slate-200 rounded-xl p-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-2 border border-slate-200">
                <CiBookmark className="text-xl" />
              </div>
              <span className="text-slate-800 font-semibold mb-2">20</span>
              <p>Saved</p>
            </div>
          </div>

          <div className="m-8">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}
