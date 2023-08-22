import { SidebarItem, SidebarTitle } from "../../models";
import Rectangle4 from "../../assets/images/Rectangle4.svg";
import tracking from "../../assets/images/tracking.svg";
import leads from "../../assets/images/leads.svg";
import configuration from "../../assets/images/configuracion.svg";
import Funnel from "../../assets/images/funnel.svg";

export const SidebarData: SidebarItem[] = [
  {
    title: SidebarTitle.DASHBOARD,
    path: "/dashboard",
    icon: <img src={Rectangle4} alt="" height="12" width="12" />,
    // iconClosed: <AiFillCaretDown />,
    // iconOpened: <AiFillCaretUp />,
  },
  // {
  //   title: SidebarTitle.DASHBOARD,
  //   path: "/pnl",
  //   exact: true,
  //   icon: <img src={Rectangle4} alt="" height="12" width="12" />,
  //   subRoutes: [
  //     {
  //       title: "PNL",
  //       path: "/pnl",
  //       icon: <img src={Rectangle4} alt="" height="12" width="12" />,
  //     },
  //   ],
  // },
  {
    title: SidebarTitle.FUNNEL,
    path: "/funnel",
    icon: <img src={Funnel} alt="" height="15" width="15" />,
  },
  {
    title: SidebarTitle.CONTACTS,
    path: "/contactos",
    icon: <img src={leads} alt="" height="12" width="12" />,
  },
  {
    title: SidebarTitle.TRACKING,
    path: "/tracking",
    icon: <img src={tracking} alt="" height="12" width="12" />,
  },
  {
    title: SidebarTitle.CONFIGURATION,
    path: "/configuracion",
    icon: <img src={configuration} alt="" height="12" width="12" />,
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

export const SidebarDataStatusCancel: SidebarItem[] = [
  {
    title: SidebarTitle.CONFIGURATION,
    path: "/configuracion",
    icon: <img src={configuration} alt="" height="12" width="12" />,
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
