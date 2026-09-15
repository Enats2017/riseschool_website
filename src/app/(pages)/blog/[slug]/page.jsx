import { notFound } from "next/navigation";
import WhyRise from "@/app/components/blog/WhyRise";
import Blog from "@/app/components/blog/blog";

const posts = {
  "why-rise": {
    title: "Why RISE: What Makes This the Right IB School for Your Child in Goa",
    Component: WhyRise,
  },
  "pyp-programme": {
    title: "The years that actually shape how a child thinks",
    Component: Blog,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = posts[params.slug];
  return { title: post ? post.title : "Blog" };
}

export default function BlogPostPage({ params }) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  const { Component } = post;
  return <Component />;
}