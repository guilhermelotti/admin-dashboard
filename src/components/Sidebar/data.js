import { BsPerson } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

export const data = [
  {
    label: "Dashboard",
    to: "/admin/dashboard",
    icon: <AiOutlineHome size={22} />,
  },
  {
    label: "Personas",
    icon: <BsPerson size={22} />,
    subItems: [
      {
        label: "Clients",
        to: "/admin/clients",
      },
      {
        label: "Providers",
        to: "/admin/providers",
      },
      {
        label: "Employees",
        to: "/admin/employees",
      },
    ],
  },
  {
    label: "Cadastro de usuários",
    to: "/admin/users",
    icon: <AiOutlineUsergroupAdd size={22} />,
  },
];
