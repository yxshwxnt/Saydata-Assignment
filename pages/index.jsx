import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="p-4 flex-1 overflow-y-auto"></div>
          <Table />
        </div>
      </div>
    </>
  );
}
