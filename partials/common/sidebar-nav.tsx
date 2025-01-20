"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button";

export interface SidebarItems {
    href: string
    title: string
}

export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: SidebarItems[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
    const pathname = usePathname()
    return (
        <>
            {
                items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            pathname === item.href
                                ? "bg-muted hover:bg-muted"
                                : "hover:bg-transparent hover:underline",
                            "justify-start"
                        )}
                    >
                        {item.title}
                    </Link>
                ))
            }
        </>

    )
}
