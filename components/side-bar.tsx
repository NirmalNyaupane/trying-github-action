'use client'
import { Sidebar, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from '@/components/ui/sidebar'
import { SideBarData } from '@/data/sidebar.data'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { NavUser } from './nav-user'

export const SideBarMenuItem = () => {
    return <SidebarContent>
        <SidebarMenu className='pt-20 overflow-hidden'>
            {SideBarData.map((item) => (
                <SidebarMenuItem key={item.label} >
                    <SidebarMenuButton className="w-full justify-start gap-4 py-5 mx-2">
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    </SidebarContent>
}

export default function SidebarComponent() {
    const [open, setOpen] = useState(false)
    return (
        <div className='mt-20'>
            <Sidebar className="hidden md:block overflow-hidden">
                <SideBarMenuItem />
                <SidebarFooter>
                    <NavUser user={{
                        name: 'Nirmal Neupane',
                        email: 'neupanenirmal@gmail.com',
                        avatar: ''
                    }} />
                </SidebarFooter>
            </Sidebar>

            <div className="md:hidden">
                <SidebarTrigger onClick={() => setOpen(!open)} className="fixed top-4 left-4 z-50">
                    <Menu className="h-6 w-6" />
                </SidebarTrigger>
                {open && (
                    <div className="fixed inset-0" onClick={() => setOpen(false)}>
                        <div className="w-64 h-full" onClick={(e) => e.stopPropagation()}>
                            <Sidebar>
                                <SideBarMenuItem />
                            </Sidebar>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
