export interface NavItem {
  label: string;
  subLabel?: string | null;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'General',
    children: [
      {
        label: 'Dashboard',
        subLabel: 'An information management to data visualizations',
        href: '/dashboard',
      },
    ],
  }, {
    label: 'Kitchen',
    children: [
      {
        label: 'Products',
        subLabel: 'An information management tool of all products.',
        href: '/dashboard/products',
      },
      {
        label: 'Recipes',
        subLabel: 'An information management tool of all recipes.',
        href: '/dashboard/recipes',
      },
      {
        label: 'Orders',
        subLabel: 'An information management tool of all orders.',
        href: '/dashboard/orders',
      },
    ],
  },
]


export const COMMON_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    children: [
      {
        label: 'Presentation',
        subLabel: 'Introducing yourself...',
        href: '/',
      },
      {
        label: 'The Project',
        subLabel: 'An information about this project',
        href: '/the-project',
      },
      {
        label: 'Resources',
        subLabel: 'An information about all resources developed',
        href: '/resources',
      },
    ],
  }, {
    label: 'Development',
    children: [
      {
        label: 'The Playbook',
        subLabel: 'An information of all management process development.',
        href: '/playbook',
      },
      {
        label: 'Roadmap',
        subLabel: 'An information management tool of roadmap.',
        href: '/roadmap',
      },
      {
        label: 'Meet The Team',
        subLabel: 'An information of all team.',
        href: '/the-team',
      },
      {
        label: 'Carrers',
        subLabel: 'An information of all carrers.',
        href: '/carrers',
      },
    ],
  },
]