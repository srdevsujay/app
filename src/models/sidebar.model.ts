export interface SidebarItem {
  title: string;
  path: string;
  icon: any;
  iconOpened?: boolean;
  iconClosed?: boolean;
}

export enum SidebarTitle {
  DASHBOARD = 'Dashboard',
  FUNNEL = 'Funnel',
  CONTACTS = 'Contactos',
  TRACKING = "Tracking",
  CONFIGURATION = "Configuración",
  HELP = "Ayuda"
}