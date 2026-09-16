import Image from "next/image";
import { dinNext } from "@/app/fonts";

export default function WhyRise() {
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
              Why RISE
            </p>
            <h1
              className={`${dinNext.className} mt-2 text-[32px] sm:text-[44px] font-[700]`}
              style={{ lineHeight: 1.15 }}
            >
              What Makes This the Right IB School for Your Child in Goa
            </h1>
          </div>
        </section>

        <article className="mx-auto max-w-2xl px-4 py-14 sm:py-20">
          <div className="space-y-6 text-[17px] leading-relaxed text-neutral-800">
            <p>
              Every parent searching for the best school in Goa will realise
              that it&rsquo;s not an easy task to decide on the best school
              for their child. Some people advise you to choose a school
              based on the curriculum, and some recommend that
              infrastructure is the best. But are infrastructure and
              curriculum the only things that matter? A school can have
              world-class infrastructure and the best curriculum, but your
              child can still lack the direction that they need to excel in
              life.
            </p>
            <p>
              Choosing a school is never really a decision based only on the
              curriculum or brochures. It&rsquo;s a decision about who your
              child is going to become as a person. Is he going to be
              creative? Will he be able to find his own solutions when faced
              with a challenge? Will he have the environment and the friends
              he can be ambitious and grow with? And for parents evaluating
              IB education for the first time, or considering a switch from
              a board that no longer feels enough for your child, that
              decision deserves more than just a comparison of facilities
              and fee structures.
            </p>
            <p>
              That&rsquo;s why we are writing this blog: to give you an
              honest look at what sets Rising India School of Excellence
              apart, and why it might be the right fit for your child.
            </p>

            <h2 className="pt-4 text-xl font-semibold text-[#831719]">
              An education built for the real world your child will actually
              grow up in
            </h2>

            <div className="relative my-8 aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
              <Image
                src="/images/blog/why-rise-hero.jpg"
                alt="Rising India School of Excellence campus building"
                fill
                priority
                sizes="(min-width: 768px) 672px, 100vw"
                className="object-cover"
              />
            </div>

            <p>
              Rising India School of Excellence, also known as RISE, offers
              the International Baccalaureate programme with only one
              intention in mind: to make your child &lsquo;future-ready&rsquo;.
              International Baccalaureate is one of the most rigorous
              curricula in the world, recognized by universities and
              employers in India and abroad. It&rsquo;s the framework chosen
              by families who want their child to compete and thrive
              anywhere, in any circumstance, and not just within one system.
            </p>
            <p>
              The IB, or the International Baccalaureate programme,
              isn&rsquo;t built around memorizing concepts or rote learning.
              It&rsquo;s built to make your child curious, train them to
              think beyond the textbook, inquire about the concepts they
              don&rsquo;t understand, and connect ideas across subjects.
              This helps them develop critical thinking so they don&rsquo;t
              just accept the facts presented in front of them but try to
              find out the reasons behind them, allowing your child to
              express themselves with confidence.
            </p>

            <h2 className="pt-4 text-xl font-semibold text-[#831719]">
              How will IB help your child grow?
            </h2>
            <p>
              Adopting a curriculum and an environment that forces your
              child to think out of the box, apply their unique ideas, and
              arrive at a conclusion helps in the overall development of
              your child. It trains them to graduate not just with strong
              grades, but with research skills, independent thinking, and a
              genuine curiosity that carries far beyond the classroom.
            </p>

            <div className="relative my-8 aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
              <Image
                src="/images/blog/why-rise-campus-walk.jpg"
                alt="RISE students on a nature walk around campus"
                fill
                sizes="(min-width: 768px) 672px, 100vw"
                className="object-cover"
              />
            </div>

            <p>
              At Rising India School of Excellence, this isn&rsquo;t just
              another curriculum introduced into an existing system;
              it&rsquo;s the foundation of the curriculum. The teaching
              methods, the technology, the way classrooms are designed, the
              way your child&rsquo;s progress is determined &mdash;
              everything is designed around this methodology.
            </p>
            <p>
              With IB, you can give your child the exposure they need to
              flourish in this life, not just academics. In fifteen years,
              the world will look very different and change very fast. The
              real question for parents is: &lsquo;Will my child be ready
              for that kind of world?&rsquo;
            </p>

            <h2 className="pt-4 text-xl font-semibold text-[#831719]">
              Goa&rsquo;s first Apple-enabled school
            </h2>
            <p>
              Technology at Rising India School of Excellence isn&rsquo;t a
              secondary concept. It&rsquo;s the foundation for a smart
              learning experience. Rising India School of Excellence is
              Goa&rsquo;s first Apple-enabled school that goes beyond just
              promoting a smart class. It reflects a deeper choice about how
              personalized learning should be built around tools that are
              already shaping how the next generation will work and create.
            </p>

            <h2 className="pt-4 text-xl font-semibold text-[#831719]">
              What&rsquo;s Rising India School of Excellence&rsquo;s learning
              model
            </h2>
            <p>
              Rising India School of Excellence looks at your child as a
              whole, not fragmenting them into different subjects.
              That&rsquo;s why we built a 4-dimensional learning model that
              focuses on the different parts of development your child
              needs.
            </p>

            <figure className="my-8">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
                <Image
                  src="/images/blog/why-rise-nursery-harvest.jpg"
                  alt="Nursery students at RISE learning about vegetables through hands-on harvesting"
                  fill
                  sizes="(min-width: 768px) 672px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-sm text-neutral-500">
                Nursery students at Rising India School of Excellence
                learning about vegetables through hands-on harvesting.
              </figcaption>
            </figure>

            <ol className="list-decimal space-y-8 pl-5">
              <li>
                <p>
                  <strong className="text-neutral-900">
                    Applied Knowledge
                  </strong>{" "}
                  &mdash; Concepts don&rsquo;t stop at the textbooks. Our
                  students learn to connect what&rsquo;s taught to
                  real-world problems, not just textbooks.
                </p>

                <figure className="my-6">
                  <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-lg bg-neutral-100">
                    <Image
                      src="/images/blog/why-rise-gallery-walk.jpg"
                      alt="A RISE student presenting their art chart during a gallery walk activity"
                      fill
                      sizes="(min-width: 640px) 384px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-center text-sm text-neutral-500">
                    Our student at Rising India School of Excellence
                    presenting their art chart on the board during a gallery
                    walk activity.
                  </figcaption>
                </figure>
              </li>

              <li>
                <p>
                  <strong className="text-neutral-900">Meta Skills</strong>{" "}
                  &mdash; Creativity, collaboration, critical thinking, and
                  communication are the backbone of a child&rsquo;s growth.
                  These skills are instilled in our students from the
                  moment they begin to learn.
                </p>

                <figure className="my-6">
                  <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-lg bg-neutral-100">
                    <Image
                      src="/images/blog/why-rise-classroom-share.jpg"
                      alt="A RISE student sharing his thoughts during a classroom activity"
                      fill
                      sizes="(min-width: 640px) 384px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-center text-sm text-neutral-500">
                    Our student at Rising India School of Excellence sharing
                    his thoughts during a classroom activity.
                  </figcaption>
                </figure>
              </li>

              <li>
                <p>
                  <strong className="text-neutral-900">
                    Character Excellence
                  </strong>{" "}
                  &mdash; We help students develop good judgment, not just
                  good grades, so they know how to apply what they learn
                  with integrity.
                </p>

                <div className="relative my-6 aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
                  <Image
                    src="/images/blog/why-rise-science-activity.jpg"
                    alt="RISE students working through a hands-on science activity"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </li>

              <li>
                <p>
                  <strong className="text-neutral-900">Meta-Learning</strong>{" "}
                  &mdash; Our students develop the ability to keep learning
                  even when nobody&rsquo;s grading them. This skill prepares
                  your child to be a continuous learner.
                </p>
              </li>
            </ol>

            <h2 className="pt-4 text-xl font-semibold text-[#831719]">
              How does this learning model help your child?
            </h2>
            <p>
              Knowledge alone isn&rsquo;t what helps a child truly excel in
              life. It has to come with character, the ability to adapt,
              and knowing how to use the knowledge they&rsquo;ve actually
              learnt.
            </p>
            <p>
              Because exams change, and syllabuses get updated every few
              years. But thinking clearly, adapting to new situations, and
              acting with integrity is something that never goes out of
              date. That&rsquo;s what this model is actually built around:
              to make your child a better individual, able to stand firm in
              all circumstances.
            </p>

            <h2 className="pt-4 text-xl font-semibold text-[#831719]">
              Creator Hours and Impact Hour
            </h2>
            <p>
              We have two dedicated programs to bring out your child&rsquo;s
              hidden talent and nurture it better.
            </p>
            <p>
              Creator Hours give kids real time to explore, build, and
              solve actual problems, so what they learn in class doesn&rsquo;t
              just stay on paper but turns into something they can actually
              make.
            </p>
            <p>
              Impact Hours make room for sports, music, community service,
              innovation, design thinking, and global awareness &mdash; not
              as extracurriculars, but genuinely as skills your child would
              love to pursue and grow in.
            </p>

            <div className="relative my-8 aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
              <Image
                src="/images/blog/why-rise-creator-hour.jpg"
                alt="RISE students playing guitar and keyboard during Creator Hour"
                fill
                sizes="(min-width: 768px) 672px, 100vw"
                className="object-cover"
              />
            </div>

            <h2 className="pt-4 text-xl font-semibold text-[#831719]">
              Character built into structure
            </h2>
            <p>
              Every Rising India School of Excellence student contributes
              40 hours to community service, not as an optional
              extracurricular, but as a built-in part of the school
              experience. It&rsquo;s a small structural choice with the
              intention to instill empathy and social responsibility
              within the children.
            </p>

            <h2 className="pt-4 text-xl font-semibold text-[#831719]">
              Become a RISER
            </h2>
            <p>
              Rising India School of Excellence doesn&rsquo;t describe its
              students only by grade or curriculum stream. It describes
              them by five traits it deliberately set out to build:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-neutral-900">Resilient</strong> in
                facing challenges.
              </li>
              <li>
                <strong className="text-neutral-900">Innovative</strong> in
                thought and action.
              </li>
              <li>
                <strong className="text-neutral-900">
                  Socially Responsible
                </strong>{" "}
                as global citizens.
              </li>
              <li>
                <strong className="text-neutral-900">
                  Excellence-driven
                </strong>{" "}
                in everything they pursue.
              </li>
              <li>
                <strong className="text-neutral-900">Reflective</strong> to
                learn and grow every single day.
              </li>
            </ul>
            <p>
              Every part of the school works towards building these traits.
              The curriculum, the technology, the 4D model, and Creator
              Hours are built to focus on your child as a whole. It&rsquo;s
              all built around the same five traits, developed consistently
              throughout your child&rsquo;s education.
            </p>

            <div className="relative my-8 aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100">
              <Image
                src="/images/blog/why-rise-signage.jpg"
                alt="Rising India School of Excellence entrance signage"
                fill
                sizes="(min-width: 768px) 672px, 100vw"
                className="object-cover"
              />
            </div>

            <h2 className="pt-4 text-xl font-semibold text-[#831719]">
              So is Rising India School of Excellence the right fit?
            </h2>
            <p>
              If you&rsquo;re evaluating schools in Goa purely on the basis
              of infrastructure or rankings, that&rsquo;s a limited way to
              make one of the most important decisions of your child&rsquo;s
              early life. The better question to ask would be: what kind of
              person do you want your child to become in life? And do the
              school options in front of you have an actual answer for
              that?
            </p>
            <p>
              At Rising India School of Excellence, the answer isn&rsquo;t
              a phrase. It&rsquo;s a curriculum choice, a technology
              decision, a named learning model, and 40 hours of community
              service, with the aim of making your child the best in all
              areas of life, shaping them into future leaders.
            </p>
            <p>
              To experience Rising India School of Excellence yourself,
              book a campus visit or speak to our admissions team today.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}