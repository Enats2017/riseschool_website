import Image from "next/image";
import { dinNext } from "@/app/fonts";

export default function Blog() {
  return (
    <div className="overflow-x-hidden">
      <main data-bg-color="#fff">
        {/* Brand hero band, matches the site's Hero pattern */}
        <section
          style={{
            background:
              "radial-gradient(circle, rgb(189 180 180) 0%, #831719 70%)",
            position: "relative",
            overflow: "hidden",
            paddingTop: "120px",
            paddingBottom: "64px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              maxWidth: "370px",
              width: "100%",
              zIndex: -1,
              mixBlendMode: "difference",
              pointerEvents: "none",
            }}
          >
            <img src="/images/pattern-2.svg" alt="" style={{ width: "100%" }} />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              maxWidth: "370px",
              width: "100%",
              zIndex: -1,
              mixBlendMode: "difference",
              pointerEvents: "none",
            }}
          >
            <img src="/images/pattern-3.svg" alt="" style={{ width: "100%" }} />
          </div>

          <div className="mx-auto max-w-2xl px-4 text-center text-white">
            <p
              className={`${dinNext.className} text-sm sm:text-base font-[700] uppercase tracking-[1px]`}
            >
              Primary Years Programme
            </p>
            <h1
              className={`${dinNext.className} mt-2 text-[32px] sm:text-[44px] font-[700]`}
              style={{ lineHeight: 1.15 }}
            >
              The years that actually shape how a child thinks
            </h1>
          </div>
        </section>

        <article className="mx-auto max-w-2xl px-4 py-14 sm:py-20">
          <div className="relative mb-10 aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src="/images/blog/pyp-hero.jpg"
              alt="PYP students exploring during a gallery walk"
              fill
              priority
              sizes="(min-width: 768px) 672px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-[17px] leading-relaxed text-neutral-800">
            <p>
              Most parents start analysing their child&rsquo;s academic
              progress around grade 9 or 10. That&rsquo;s when it feels
              urgent. But mostly, how a child thinks has already taken
              shape by then. How comfortably they are asking questions, how
              they sit with not knowing something right away, whether
              curiosity comes naturally or has to be forced out of them, is
              worth asking in the earlier years. Because that shaping
              usually happens in primary school, where a child&rsquo;s
              young mind is trained to look through a different lens.
            </p>
            <p>
              So today, this blog sheds light on the Primary Years
              Programme, which is important to discuss now before
              it&rsquo;s too late.
            </p>

            <h2 className="pt-4 text-xl font-semibold text-[#831719]">
              Why is it important to choose the right school since early
              years?
            </h2>
            <p>
              In the first decade of school, the content almost doesn&rsquo;t
              matter as much as people think. Any bright child can be
              taught fractions or state capitals. What actually matters is
              subtler than that. And that is: can this child sit with a
              question they can&rsquo;t answer immediately? Do they see
              being wrong as a failure or a new direction to figuring
              something out? Are they thinking on their own about the
              different concepts they are learning rather than accepting
              the facts that are stated in front of them?
            </p>
            <p>
              This is exactly what PYP is designed around. Rather than
              teaching subjects one at a time, in isolation, it organizes
              learning around six big, transdisciplinary questions like who
              we are, how the world works and how do we become a better
              contributor in the world. This is the design that gives
              children the room to explore across subjects together. A
              single unit on how &ldquo;sharing the planet&rdquo; might
              have a child counting how many plastic items their family
              throws away in a week, sorting them into a chart, finding
              better alternatives for it, and writing how to reduce the use
              of plastic.
            </p>

            <div className="relative my-8 aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-lg bg-neutral-100">
              <Image
                src="/images/blog/pyp-inquiry-unit.jpg"
                alt="A child working through a hands-on PYP inquiry unit"
                fill
                sizes="(min-width: 640px) 384px, 100vw"
                className="object-cover"
              />
            </div>

            <p>
              The fact to highlight here is that these efforts are not to
              make a five-year-old super-advanced. It&rsquo;s rather about
              preserving the child&rsquo;s own unique thinking, their
              instinct to ask why, and the confidence to go and find out
              their own answers. It&rsquo;s the idea of giving them the
              space to be a leader and a creator of their own future by
              going out and finding their own answers.
            </p>

            <h2 className="pt-4 text-xl font-semibold text-[#831719]">
              Why is it important now than it was before?
            </h2>
            <p>
              A strong primary education used to mean reading and
              calculating ahead of grade level. That still matters, but
              isn&rsquo;t just enough anymore. The children who&rsquo;ll
              lead tomorrow&rsquo;s world won&rsquo;t be the ones who
              retained the most information they crammed. They&rsquo;ll be
              the ones who learned early to think independently,
              creatively, and differently than most of them.
            </p>

            <div className="relative my-8 aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
              <Image
                src="/images/blog/pyp-gallery-walk.jpg"
                alt="Students presenting their work during a PYP gallery walk"
                fill
                sizes="(min-width: 768px) 672px, 100vw"
                className="object-cover"
              />
            </div>

            <p>
              Here&rsquo;s the part parents often miss: the real world
              isn&rsquo;t demanding children who retain most of the
              information. We have information systems and artificial
              intelligence for that. What the world is looking for is
              children who can think out of the box in the ocean of
              information available, asking good questions and working on
              the ones they don&rsquo;t have answers for yet. That&rsquo;s
              what a decade of the Primary Years Programme builds: a child
              who&rsquo;s spent years inquiring, questioning, and
              reflecting walks in the real world, applying the same
              concept. On the other hand, a child experiencing a concept
              like that for the first time at the age of sixteen finds it
              challenging to develop that pattern of thinking, right when
              it&rsquo;s most required.
            </p>

            <h2 className="pt-4 text-xl font-semibold text-[#831719]">
              Is this programme the right one for your child?
            </h2>
            <p>
              This isn&rsquo;t the path for every child, and we will not
              push a narrative just to get some admissions.
            </p>
            <p>
              A programme like PYP asks a child to sit with open-ended
              questions instead of always reaching for one correct answer.
              It asks a family to be comfortable with a report card that
              reads differently; more about how a child is thinking and
              growing, less about a rank scored out of a hundred. If
              you&rsquo;re someone who is used to measuring the progress of
              a child with numbers, then this might be something new for
              you.
            </p>

            <div className="relative my-8 aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
              <Image
                src="/images/blog/pyp-classroom.jpg"
                alt="A PYP classroom set up for open-ended, hands-on learning"
                fill
                sizes="(min-width: 768px) 672px, 100vw"
                className="object-cover"
              />
            </div>

            <p>
              It also asks more of us as a school, and that&rsquo;s the
              responsibility we take seriously. Inquiry-based learning only
              delivers real depth when it&rsquo;s genuinely well
              facilitated, which is exactly why we invest in the training,
              structure, and oversight that make it work.
            </p>

            <h2 className="pt-4 text-xl font-semibold text-[#831719]">
              What we&rsquo;d actually want you to ask us
            </h2>
            <p>
              If you&rsquo;re weighing this for your child, here&rsquo;s
              what we think matters more than the question &ldquo;is it
              IB&rdquo;. Ask how teachers guide students when students ask
              questions without pushing them too hard or letting them
              drift with no direction. Ask how a child&rsquo;s progress is
              actually communicated to the parents if conventional grades
              aren&rsquo;t used. Ask how the PYP prepares a child for the
              more structured expectations that come later, and what the
              move into the Middle Years Programme actually looks like in
              practice.
            </p>

            <div className="relative my-8 aspect-[8/5] w-full overflow-hidden rounded-lg bg-neutral-100">
              <Image
                src="/images/blog/pyp-community.jpg"
                alt="Parents and students engaging with the PYP community at RISE"
                fill
                sizes="(min-width: 768px) 672px, 100vw"
                className="object-cover"
              />
            </div>

            <p>
              At Rising India School of Excellence, the Primary Year
              Programme isn&rsquo;t something layered onto an existing
              structure; it&rsquo;s been our foundation from the Early
              Years onward. Choosing this path early doesn&rsquo;t lock
              your child into a single road later. It simply gives them
              more time to build the habits of mind the years ahead will
              demand from them.
            </p>

            <h2 className="pt-4 text-xl font-semibold text-[#831719]">
              What should be your next steps?
            </h2>
            <p>
              Your next step shouldn&rsquo;t be deciding which board your
              child will sit for in grade 10; that&rsquo;s a long way from
              now, and it isn&rsquo;t what matters today.
            </p>
            <p>
              The real next step is easier than that. Come and see how we,
              at RISE, actually run a school where your child becomes a
              curious creator; ask us your questions and decide yourself
              whether it&rsquo;s the right programme for your child.
            </p>
            <p>
              We&rsquo;d be happy to discuss your child&rsquo;s growth
              opportunities rather than handing you a brochure.
            </p>
            <p>Looking forward to meeting you at RISE.</p>
          </div>
        </article>
      </main>
    </div>
  );
}