import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import Link from "next/link";
import React from "react";

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return null;
  }

  const { title, date, contentHtml } = await getPostData(postId);
  const publishedDate = getFormattedDate(date);
  return (
    <main className="px-6 max-w-[800px] prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{publishedDate}</p>
      <article className="mt-10">
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href={"/"}>Back to home</Link>
        </p>
      </article>
    </main>
  );
}
