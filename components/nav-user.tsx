"use client"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import {
    Bell,
    ChevronsUpDown,
    CreditCard,
    LogOut,
    Moon,
    Sun,
    User
} from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation"

function DisplayMode({ theme }: { theme: "light" | "dark" }) {
    if (theme === "light") {
        return <>
            <Moon />
            Dark Mode
        </>
    }
    return <>
        <Sun />
        Light Mode
    </>
}

export function NavUser({
    user,
}: {
    user: {
        name: string
        email: string
        avatar: string
    }
}) {
    const { isMobile } = useSidebar()
    const { theme, setTheme } = useTheme();
    const router = useRouter();
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">{user.name}</span>
                                <span className="truncate text-xs">{user.email}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuGroup className="space-y-3">
                            <DropdownMenuItem
                                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                                className="gap-2 items-center">
                                <DisplayMode theme={theme as "light" | "dark" ?? "light"} />
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2 items-center" onClick={() => router.push('/setting')}>
                                <User />
                                Account Settings
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 items-center">
                            <LogOut />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}