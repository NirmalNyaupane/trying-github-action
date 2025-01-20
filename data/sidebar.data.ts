import { SideBarItem } from "@/types/sidebar.type";
import { Home, Compass, Bell, Mail, User } from "lucide-react";

export const SideBarData: SideBarItem[] = [
  { icon: Home, label: "Home", Link: "/home" },
  { icon: Compass, label: "Explore", Link: "/explore" },
  { icon: Bell, label: "Notifications", Link: "/notiications" },
  { icon: Mail, label: "Messages", Link: "/mail" },
  { icon: User, label: "Profile", Link: "/user" },
];
