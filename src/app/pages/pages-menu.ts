import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'List',
    icon: 'list',
    children: [
      {
        title: 'Buyers',
        link: '/pages/buyers',
      },
      {
        title: 'Suppliers',
        link: '/pages/suppliers',
      },
    ],
  },
];
