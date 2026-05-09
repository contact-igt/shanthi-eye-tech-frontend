import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import TestimonialsFooterSection from "../components/testimonials-footer-section";
import { InViewFade, StaggerGroup, StaggerItem, StaggerSlideItem } from "../components/animations/motion-system";
import { ABOUT_HERO, ABOUT_BODY, ABOUT_TAGS, DIFFERENTIATORS, DIFFERENCE_IMAGES, VISION, MISSION } from "../constants/about";

function renderIcon(name) {
  if (name === "peace") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "technology") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "team") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 20c1.6-4 6.4-6 8-6s6.4 2 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "affordable") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "location") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path d="M12 21s7-6.4 7-11.4A7 7 0 1 0 5 9.6C5 14.6 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DifferenceImageCard({ title, description, image, objectPosition, className = "" }) {
  return (
    <article
      className={[
        "group relative min-h-[320px] overflow-hidden rounded-[28px] border border-[#cbdbea] bg-[#dfeaf6] shadow-[0_20px_48px_rgba(53,86,123,0.12)] sm:min-h-[380px]",
        className,
      ].join(" ")}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={[
          "object-cover transition-transform duration-700 group-hover:scale-[1.035]",
          objectPosition,
        ].join(" ")}
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,51,108,0.02)_15%,rgba(7,51,108,0.72)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
        <p className="max-w-[420px] text-[24px] font-semibold leading-tight sm:text-[28px]">
          {title}
        </p>
        <p className="mt-2 max-w-[520px] text-[15px] leading-[1.55] text-white/86">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f4f8ff] text-[#0c3f86]">
      <SiteHeader />

      <main>
        <section
          className="relative isolate overflow-hidden bg-gradient-to-r from-[#0b4ca0] to-[#175db8] text-white"
          aria-label="About hero"
        >
          <div className="mx-auto w-full max-w-[1280px] px-4 py-20">
            <StaggerGroup className="max-w-[980px]" stagger={0.08} distance={28} amount={0.32}>
              <StaggerItem>
                <p className="mb-4 text-sm text-[#bfeef0]">
                  <Link href="/" className="text-[#dff4ff] hover:underline">
                    Home
                  </Link>{' '}› About Us
                </p>
              </StaggerItem>

              <StaggerItem>
                <h1 className="text-[48px] font-bold leading-tight sm:text-[56px] lg:text-[64px]">
                  {ABOUT_HERO.title}
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-4 text-[18px] max-w-[900px] text-[#d6eaff]">
                  {ABOUT_HERO.subtitle}
                </p>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
            <InViewFade className="space-y-6" distance={20}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2ca56f]">Our Story</p>
              <h2 className="text-[36px] font-semibold text-[#0f4698] sm:text-[40px] lg:text-[46px]">
                {ABOUT_BODY.heading}
              </h2>

              {ABOUT_BODY.paragraphs.map((p, i) => (
                <p key={i} className="text-[16px] leading-[1.6] text-[#6f84a3]">
                  {p}
                </p>
              ))}

              <div className="mt-4 flex flex-wrap gap-3">
                {ABOUT_TAGS.map((t) => (
                  <span key={t} className="inline-flex items-center gap-2 rounded-full border border-[#d4deea] bg-white/60 px-4 py-2 text-sm font-semibold text-[#0f4698]">
                    {t}
                  </span>
                ))}
              </div>
            </InViewFade>

            <InViewFade className="self-start overflow-hidden rounded-[28px] border border-[#dde5ef] bg-white shadow-[0_18px_40px_rgba(53,86,123,0.12)]" distance={22}>
              <div className="relative aspect-[16/11] w-full min-h-[320px] sm:min-h-[400px] lg:min-h-[520px]">
                <Image
                  src="/bed.webp"
                  alt="Hospital beds"
                  fill
                  className="object-cover object-[center_42%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </InViewFade>
          </div>
        </section>

        {/* --- What makes us different --- */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1280px]">
            <StaggerGroup className="mx-auto max-w-[1040px] text-center" stagger={0.08} distance={20} amount={0.28}>
              <StaggerItem>
                <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#2ca56f]">
                  What makes us different
                </p>
              </StaggerItem>
              <StaggerItem>
                <h2 className="mx-auto mt-4 max-w-[920px] text-[42px] font-bold leading-[1.08] tracking-[-0.02em] text-[#0f4698] sm:text-[54px] lg:text-[64px]">
                  Designed around patient comfort.
                  <br />
                  Driven by clinical excellence.
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-[1.7] text-[#6f84a3] sm:text-[18px]">
                  Every space is planned to feel calm, reassuring and precise, from the first conversation at reception to technology-led clinical care.
                </p>
              </StaggerItem>
            </StaggerGroup>

            <StaggerGroup className="mt-10 grid gap-6 lg:grid-cols-2" stagger={0.08} distance={22} amount={0.25}>
              {DIFFERENCE_IMAGES.map((item, idx) => (
                <StaggerSlideItem key={item.title} direction={idx === 0 ? "left" : "right"}>
                  <DifferenceImageCard {...item} />
                </StaggerSlideItem>
              ))}
            </StaggerGroup>

            <StaggerGroup className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 items-stretch" stagger={0.06} distance={18} amount={0.28}>
              {DIFFERENTIATORS.map((item, idx) => (
                <StaggerSlideItem key={item.id} direction={idx % 2 === 0 ? "left" : "right"}>
                  <article className="motion-card-soft glass-card p-6 h-full min-h-[220px] flex flex-col justify-between rounded-2xl">
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf9f1] text-[#2ca56f]">
                        {renderIcon(item.icon)}
                      </span>

                      <div className="mt-4">
                        <h3 className="text-[16px] font-semibold text-[#0f4698] glass-title">{item.title}</h3>
                        <p className="mt-2 text-[14px] text-[#6f849f]">{item.description}</p>
                      </div>
                    </div>
                  </article>
                </StaggerSlideItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        {/* --- Vision & Mission cards --- */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-[1280px]">
            <StaggerGroup className="grid gap-8 lg:grid-cols-2 items-stretch" stagger={0.08} distance={22} amount={0.28}>
              <StaggerSlideItem direction="left">
                <article className="glass-card motion-card-soft p-8 h-full flex flex-col justify-between rounded-2xl">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#2ca56f]">Vision & Mission</p>
                  <h3 className="mt-4 text-[26px] font-semibold text-[#0f4698]">{VISION.title}</h3>
                  <p className="mt-3 text-[16px] text-[#6f84a3]">{VISION.description}</p>
                </article>
              </StaggerSlideItem>

              <StaggerSlideItem direction="right">
                <article className="rounded-2xl motion-card-soft p-8 h-full flex flex-col justify-between bg-[#0b4ca0] text-white">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#63f0bd]">Featured</p>
                  <h3 className="mt-4 text-[26px] font-semibold text-white">{MISSION.title}</h3>
                  <p className="mt-3 text-[16px] text-[#c8daf2]">{MISSION.description}</p>
                </article>
              </StaggerSlideItem>
            </StaggerGroup>
          </div>
        </section>

        <TestimonialsFooterSection showTestimonials={false} />
      </main>
    </div>
  );
}
