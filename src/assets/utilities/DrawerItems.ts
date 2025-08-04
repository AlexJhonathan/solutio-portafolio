// src/data/DrawerItems.ts

export interface DrawerItem {
  title: string
  route: string
}

export const drawerItems: DrawerItem[] = [
  { title: 'Inicio', route: '/home' },
  { title: 'Productos', route: '/product-page' },
  { title: 'Servicios', route: '/service-page' },
  { title: 'Sobre nosotros',  route: '/about-us-page' },
]