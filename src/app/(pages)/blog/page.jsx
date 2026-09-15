import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blogs",
};

const posts = [
  {
    slug: "why-rise",
    title: "Why RISE: What Makes This the Right IB School for Your Child in Goa",
    excerpt:
      "An honest look at what sets Rising India School of Excellence apart \u2014 the IB curriculum, our 4D learning model, and why it might be the right fit for your child.",
    image: "/images/blog/why-rise-hero.jpg",
  },
  {
    slug: "pyp-programme",
    title: "The years that actually shape how a child thinks",
    excerpt:
      "Why the Primary Years Programme matters more than most parents realise \u2014 and how it shapes independent, curious thinkers from the very start.",
    image: "/images/blog/pyp-hero.jpg",
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14 sm:py-20">
      <h1 className="mb-10 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
        Blogs
      </h1>

      <div className="grid gap-8 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block overflow-hidden rounded-lg border border-neutral-200 transition hover:border-neutral-300"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold leading-snug text-neutral-900">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4">
                Read more
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}