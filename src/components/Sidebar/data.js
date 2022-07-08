import { BsPerson } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

export const data = [
  {
    label: "Dashboard",
    to: "/admin/dashboard",
    isDropdown: false,
    icon: <AiOutlineHome size={22} />,
  },
  {
    label: "Personas",
    icon: <BsPerson size={22} />,
    isDropdown: true,
    subItems: [
      {
        label: "Clients",
        to: "/admin/clients",
        isDropdown: false,
      },
      {
        label: "Providers",
        to: "/admin/providers",
        isDropdown: false,
      },
      {
        label: "Employees",
        to: "/admin/employees",
        isDropdown: false,
      },
    ],
  },
  {
    label: "User registration",
    to: "/admin/users",
    isDropdown: false,
    icon: <AiOutlineUsergroupAdd size={22} />,
  },
];
