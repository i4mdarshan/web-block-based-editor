import {
    IconNotebook,
    IconLogout,
  } from '@tabler/icons-react'
  
  export interface NavLink {
    title: string
    label?: string
    href: string
    icon: JSX.Element
  }
  
  export interface SideLink extends NavLink {
    sub?: NavLink[]
  }
  
  export const sidelinks: SideLink[] = [
    {
      title:'Page Title',
      label: '',
      href: '/',
      icon: <IconNotebook size={18} />,
    },
    {
      title:'Page Title',
      label: '',
      href: '/tasks',
      icon: <IconNotebook size={18} />,
    },
    {
      title:'Page Title',
      label: '',
      href: '/chats',
      icon: <IconNotebook size={18} />,
    },
    {
      title:'Page Title',
      label: '',
      href: '/apps',
      icon: <IconNotebook size={18} />,
    },
    {
      title:'Page Title',
      label: '',
      href: '',
      icon: <IconNotebook size={18} />,
    },
    {
      title:'Page Title',
      label: '',
      href: '/users',
      icon: <IconNotebook size={18} />,
    },
    {
      title:'Page Title',
      label: '',
      href: '/requests',
      icon: <IconNotebook size={18} />,
    },
    {
      title:'Page Title',
      label: '',
      href: '/analysis',
      icon: <IconNotebook size={18} />,
    },
    {
      title:'Page Title',
      label: '',
      href: '/extra-components',
      icon: <IconNotebook size={18} />,
    },
    {
      title:'Page Title',
      label: '',
      href: '',
      icon: <IconNotebook size={18} />,
    },
    {
      title:'Sign Out',
      label: '',
      href: 'sign-out',
      icon: <IconLogout size={18} />,
    },
  ]