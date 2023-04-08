import { SidebarItem, SidebarTitle } from "../../models";
import Rectangle4 from "../../assets/images/Rectangle4.svg";

export const SidebarData: SidebarItem[] = [
  {
    title: SidebarTitle.DASHBOARD,
    path: "/dashboard",
    icon: <img src={Rectangle4} alt="" height="12" width="12" />,
    // iconClosed: <AiFillCaretDown />,
    // iconOpened: <AiFillCaretUp />,
  },
  {
    title: SidebarTitle.FUNNEL,
    path: "/funnel",
    icon: <img src={Rectangle4} alt="" height="12" width="12" />,
  },
  {
    title: SidebarTitle.CONTACTS,
    path: "/contactos",
    icon: <img src={Rectangle4} alt="" height="12" width="12" />,
  },
  {
    title: SidebarTitle.TRACKING,
    path: "/tracking",
    icon: <img src={Rectangle4} alt="" height="12" width="12" />,
  },
  // {
  //     title: 'History',
  //     path: '/history',
  //     icon: <AiOutlineHistory />
  // },
  // {
  //     title: 'Configurations',
  //     path: '/configurations',
  //     icon: <FaCog />
  // }
];
