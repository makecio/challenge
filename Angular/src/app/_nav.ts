interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    title: true,
    name: 'Dashboard'
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-screen-desktop',
    badge: {
      variant: 'info',
      text: 'Dashboard'
    }
  },
  {
    title: true,
    name: 'Administration'
  },
  {
    name: 'Products',
    url: '/components/products',
    icon: 'icon-handbag'
  },
  {
    name: 'Customers',
    url: '/components/customers',
    icon: 'icon-people'
  },
  {
    title: true,
    name: 'Orders'
  },
  {
    name: 'Orders',
    url: '/components/orders',
    icon: 'icon-basket'
  }

];

