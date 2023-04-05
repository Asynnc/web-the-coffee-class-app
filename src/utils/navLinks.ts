interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'General',
    children: [
      {
        label: 'Dashboard',
        subLabel: 'An information management tool that receives data from a linked database to provide data visualizations',
        href: '/dashboard',
      },
    ],
  }, {
    label: 'Kitchen',
    children: [
      {
        label: 'Orders',
        subLabel: 'An information management tool of all orders.',
        href: '/dashboard/kitchen',
      },
    ],
  },
]