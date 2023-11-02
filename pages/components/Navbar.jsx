import { GrNotification } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <div className="w-3/6">
        <input
          className="w-full rounded py-2 px-4 shadow-sm"
          type="text"
          placeholder="Search here...."
        />
      </div>
      <div className="flex items-center">
        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
          <GrNotification className=" bg-blue-100 " />
        </div>
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
