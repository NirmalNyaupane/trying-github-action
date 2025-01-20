import CategoryList from "@/components/category-list";
import PostList from "@/components/post-list";
export default function Home() {
  return (
    <div className="container py-6 overflow-y-hidden">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 ]">
        <div className="md:col-span-3">
          <PostList />
        </div>
        <div>
          <CategoryList />
        </div>
      </div>
    </div>
  );
}