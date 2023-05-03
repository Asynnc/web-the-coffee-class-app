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