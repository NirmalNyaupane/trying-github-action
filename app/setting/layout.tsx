import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/partials/common/sidebar-nav"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/setting",
  },
  {
    title: "Appearance",
    href: "/setting/appearance",
  },
  {
    title: "Notifications",
    href: "/setting/notifications",
  },
  {
    title: "Email",
    href: "/setting/email",
  }
]

interface SettingsLayoutProps {
  children: React.ReactNode
}



export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />

        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <div
              className={"flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1"}
            >
              <SidebarNav items={sidebarNavItems} key={"setting-nav-bar"} />
            </div>

          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}
