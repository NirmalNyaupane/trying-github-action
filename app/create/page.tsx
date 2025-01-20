import PostPagePartial from "@/partials/posts/post-page.partial";
import { Suspense } from "react";

export default function CreatePostPage() {
  return (
    <Suspense>
      <PostPagePartial />
    </Suspense>
  );
}
