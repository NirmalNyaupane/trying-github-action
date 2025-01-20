"use client";

import { Button } from "@/components/ui/button";
import NotificationPartialPage from "@/partials/notification/notification.partial";
import { Bell, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center mx-5">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <MessageSquare className="h-6 w-6" />
            <span className="font-bold">Forum</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="outline" className="mr-2" onClick={() => router.push("/create")}>
              Create Post
            </Button>
          </div>
          <nav className="flex items-center space-x-2">
            <Popover>
              <PopoverTrigger>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="min-w-[500px]">
                <NotificationPartialPage />
              </PopoverContent>
            </Popover>
          </nav>
        </div>
      </div>
    </header>
  );
}