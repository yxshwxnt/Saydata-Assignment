import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Table from './Table';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-4 flex-1 overflow-y-auto">{children}</div>
        <Table />
      </div>
    </div>
  );
};

export default Layout;
