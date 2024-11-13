import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
} from "@material-tailwind/react";
import { FaUserCircle, FaEdit, FaInbox, FaSignOutAlt } from "react-icons/fa";
import profile from "../../assets/images/profile-rada.jpg";
import { Link } from "react-router-dom";

const menuItems = [
    { label1: "My Profile", icon: <FaUserCircle className="w-4 h-4 text-gray-600" /> },
    { label2: "Edit Profile", icon: <FaEdit className="w-4 h-4 text-gray-600" /> },
    { label3: "Inbox", icon: <FaInbox className="w-4 h-4 text-gray-600" /> },
    { label4: "Sign Out", icon: <FaSignOutAlt className="w-4 h-4 text-gray-600" /> },
];

export default function ProfileMenu() {
    return (
        <Menu>
            <MenuHandler>
                <Avatar
                    variant="circular"
                    alt="admin"
                    className="cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all duration-150 w-10 h-10 rounded-full"
                    src={profile}
                />
            </MenuHandler>
            <MenuList className="p-4 bg-white rounded-lg shadow-lg min-w-[180px] mt-2">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-100 transition-all">
                        {item.icon}
                        <Typography variant="small" className=" text-gray-600 hover:text-blue-900 px-3">
                            <Link to="/admin/user-profile">
                                <p>{item.label1}</p>
                            </Link>
                            <Link to="">
                                <p>{item.label2}</p>
                            </Link>
                            <Link>
                                <p>{item.label3}</p>
                            </Link>
                            <Link to="/auth/logout">
                                <p>{item.label4}</p>
                            </Link>
                        </Typography>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
