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
        label: "Cliente",
        to: "/admin/clientes",
        isDropdown: false,
      },
      {
        label: "Fornecedores",
        to: "/admin/fornecedores",
        isDropdown: false,
      },
      {
        label: "Funcionário",
        to: "/admin/funcionarios",
        isDropdown: false,
      },
    ],
  },
  {
    label: "Usuário",
    to: "/admin/usuarios",
    isDropdown: false,
    icon: <AiOutlineUsergroupAdd size={22} />,
  },
  {
    label: "Perfil de acesso",
    to: "/admin/perfil",
    isDropdown: false,
    icon: <AiOutlineUsergroupAdd size={22} />,
  },
];
