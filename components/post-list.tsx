"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowUpCircle, MessageCircle, BookmarkPlus } from "lucide-react";

const MOCK_POSTS = [
  {
    id: 1,
    title: "How to implement authentication in Next.js?",
    content: "I'm building a Next.js application and need help implementing user authentication...",
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    category: "Next.js",
    tags: ["authentication", "web-development"],
    votes: 42,
    comments: 15,
    timeAgo: "2 hours ago",
  },
];

export default function PostList() {
  return (
    <div className="space-y-4">
      {MOCK_POSTS.map((post) => (
        <Card key={post.id} className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex flex-col items-center space-y-2">
              <button className="text-muted-foreground hover:text-primary">
                <ArrowUpCircle className="h-6 w-6" />
              </button>
              <span className="text-sm font-medium">{post.votes}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="space-x-2 text-sm text-muted-foreground">
                  <span>{post.author.name}</span>
                  <span>•</span>
                  <span>{post.timeAgo}</span>
                </div>
              </div>
              <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>
              <p className="mt-2 text-muted-foreground">{post.content}</p>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex space-x-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <button className="flex items-center space-x-1 hover:text-primary">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                  <button className="hover:text-primary">
                    <BookmarkPlus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}