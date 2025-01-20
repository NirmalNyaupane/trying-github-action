"use client"
import Header from "@/components/header";
import SidebarComponent from "@/components/side-bar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { AUTH_URL_REGEX } from "@/constants";
import { usePathname } from "next/navigation";
import React from "react";

export const CommonLayout = ({ children }: { children?: React.ReactNode }) => {
    const pathName = usePathname();
    if (pathName.match(AUTH_URL_REGEX)) {
        return <>{children}</>
    }
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                <SidebarProvider className='gap-3'>
                    <SidebarComponent />
                    {children}
                </SidebarProvider>
            </main>
            <Toaster />
        </>
    )
}