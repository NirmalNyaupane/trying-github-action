import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Info, Trophy } from 'lucide-react'

export default function NotificationsPage() {
    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Notifications</h1>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="text-sm">
                        Mark all as read
                    </Button>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-[160px]">
                            <SelectValue placeholder="Filter notifications" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All notifications</SelectItem>
                            <SelectItem value="unread">Unread</SelectItem>
                            <SelectItem value="mentions">Mentions</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-lg shadow-sm">
                    <Avatar className="h-10 w-10">
                        <img src="/placeholder.svg" alt="John Doe" className="rounded-full" />
                    </Avatar>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm">
                                    <span className="font-semibold">John Doe</span> replied to your question about React Hooks
                                </p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    "This is a great question! Here's how I would approach..."
                                </p>
                            </div>
                            <span className="text-xs text-muted-foreground">5m ago</span>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <Button variant="link" className="h-auto p-0 text-blue-500">
                                View Reply
                            </Button>
                            <Button variant="link" className="h-auto p-0">
                                Mark as read
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg shadow-sm">
                    <Avatar className="h-10 w-10">
                        <img src="/placeholder.svg" alt="Sarah Chen" className="rounded-full" />
                    </Avatar>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <p className="text-sm">
                                <span className="font-semibold">Sarah Chen</span> upvoted your answer about Next.js routing
                            </p>
                            <span className="text-xs text-muted-foreground">2h ago</span>
                        </div>
                        <Button variant="link" className="h-auto p-0 text-blue-500 mt-2">
                            View Answer
                        </Button>
                    </div>
                </div>

                <div className="flex gap-4 p-4  rounded-lg shadow-sm">
                    <Avatar className="h-10 w-10">
                        <img src="/placeholder.svg" alt="Alex Johnson" className="rounded-full" />
                    </Avatar>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm">
                                    <span className="font-semibold">Alex Johnson</span> mentioned you in a comment
                                </p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    "@username would be able to help with this database query issue"
                                </p>
                            </div>
                            <span className="text-xs text-muted-foreground">1d ago</span>
                        </div>
                        <Button variant="link" className="h-auto p-0 text-blue-500 mt-2">
                            View Comment
                        </Button>
                    </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg shadow-sm">
                    <div className="h-10 w-10 flex items-center justify-center bg-yellow-100 rounded-full">
                        <Trophy className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-semibold">Achievement Unlocked: Helpful Hand</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    You've helped 50 students with their questions!
                                </p>
                            </div>
                            <span className="text-xs text-muted-foreground">3d ago</span>
                        </div>
                        <Button variant="link" className="h-auto p-0 text-blue-500 mt-2">
                            View Achievements
                        </Button>
                    </div>
                </div>

                <div className="flex gap-4 p-4  rounded-lg shadow-sm">
                    <div className="h-10 w-10 flex items-center justify-center bg-blue-100 rounded-full">
                        <Info className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-semibold">System Update</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    We've updated our community guidelines. Please take a moment to review them.
                                </p>
                            </div>
                            <span className="text-xs text-muted-foreground">1w ago</span>
                        </div>
                        <Button variant="link" className="h-auto p-0 text-blue-500 mt-2">
                            View Guidelines
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

