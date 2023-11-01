import { GrNotification } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <div className="w-1/3">
        <input
          className="w-full border rounded py-2 px-4"
          type="text"
          placeholder="Search here...."
        />
      </div>
      <div className="flex items-center">
        <GrNotification className="w-8 h-8 mr-2 bg-blue-100 p-1 rounded-lg" />
        <img
          src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full mx-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
