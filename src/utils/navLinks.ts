

import { LayoutDashboard, LayoutList, LucideIcon, LucideProps, PackageSearch, Utensils } from 'lucide-react';

interface NavItem {
  icon?: JSX.Element | LucideProps | LucideIcon | string | any
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
        icon: LayoutDashboard,
        label: 'Dashboard',
        subLabel: 'An information management tool that receives data from a linked database to provide data visualizations',
        href: '/dashboard',
      },
    ],
  }, {
    label: 'Kitchen',
    children: [
      {
        icon: PackageSearch,
        label: 'Products',
        subLabel: 'An information management tool of all products.',
        href: '/dashboard/products',
      },
      {
        icon: Utensils,
        label: 'Recipes',
        subLabel: 'An information management tool of all recipes.',
        href: '/dashboard/recipes',
      },
      {
        icon: LayoutList,
        label: 'Orders',
        subLabel: 'An information management tool of all orders.',
        href: '/dashboard/orders',
      },
    ],
  },
]