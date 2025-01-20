"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CATEGORIES = [
  { name: "General Discussion", count: 156 },
  { name: "Programming", count: 89 },
  { name: "Web Development", count: 234 },
  { name: "Mobile Development", count: 67 },
  { name: "DevOps", count: 45 },
  { name: "UI/UX Design", count: 78 },
  { name: "Career Advice", count: 123 },
];

const TRENDING_TAGS = [
  "react",
  "javascript",
  "typescript",
  "nextjs",
  "tailwindcss",
  "nodejs",
  "python",
  "aws",
];

export default function CategoryList() {
  return (
    <div className="space-y-6 container">
      <Card className="p-4">
        <Tabs defaultValue="latest" className="w-full">
          <div className="flex justify-center mb-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="latest">Latest</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="following">Following</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="latest">
            <ScrollArea className="h-[300px]">
              <div className="space-y-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category.name}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-muted"
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="trending">
            <ScrollArea className="h-[300px]">
              <div className="space-y-2">
                {CATEGORIES.slice().sort((a, b) => b.count - a.count).map((category) => (
                  <button
                    key={category.name}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-muted"
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="following">
            <div className="flex flex-col items-center justify-center h-[300px] text-center text-muted-foreground">
              <p>No followed categories yet</p>
              <p className="text-sm">Follow categories to see them here</p>
            </div>
          </TabsContent>
        </Tabs>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold mb-4">Trending Tags</h3>
        <div className="flex flex-wrap gap-2">
          {TRENDING_TAGS.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
}