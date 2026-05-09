import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import TestimonialsFooterSection from "../components/testimonials-footer-section";
import { InViewFade, StaggerGroup, StaggerItem } from "../components/animations/motion-system";
import {
  AWARDS_HERO,
  AWARDS_TIMELINE,
  AWARDS_SOCIAL_CONTRIBUTION,
} from "../constants/awards-page";

export const metadata = {
  title: "Awards & Achievements | Shanti EyeTech",
  description:
    "Recognitions and honours earned by Shanti EyeTech through surgical excellence, research, and patient-centered eye care.",
};

function AwardImageCard({ image, imageLabel, alt }) {
  return (
    <article className="rounded-[14px] border-2 border-[#4b82dc] bg-white p-4 shadow-[0_14px_30px_rgba(23,76,148,0.12)]">
      <div className="relative aspect-[16/6.5] overflow-hidden rounded-[10px]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-center"
        />
      </div>
      <p className="mt-3 text-[16px] font-semibold text-[#1a8b5b]">{imageLabel}</p>
    </article>
  );
}

function TimelineRow({ item }) {
  const textClass =
    item.imageSide === "right"
      ? "text-center lg:pr-10 lg:text-right"
      : "text-center lg:pl-10 lg:text-left";

  const textBlock = (
    <div className={textClass}>
      <p className="text-[42px] font-bold leading-none tracking-[-0.03em] text-[#c1cfeb] sm:text-[54px]">
        {item.year}
      </p>
      <h3 className="mt-3 text-[34px] font-semibold leading-tight text-[#1a55b4] sm:text-[38px]">
        {item.title}
      </h3>
      <p className="mx-auto mt-3 max-w-[620px] text-[16px] leading-[1.65] text-[#616f86] lg:mx-0">
        {item.description}
      </p>
    </div>
  );

  const imageBlock = (
    <AwardImageCard
      image={item.image}
      imageLabel={item.imageLabel}
      alt={`${item.year} ${item.title}`}
    />
  );

  if (item.imageSide === "left") {
    return (
      <article className="grid gap-6 lg:grid-cols-2 lg:items-center">
        <div>{imageBlock}</div>
        <div>{textBlock}</div>
      </article>
    );
  }

  return (
    <article className="grid gap-6 lg:grid-cols-2 lg:items-center">
      <div>{textBlock}</div>
      <div>{imageBlock}</div>
    </article>
  );
}

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-[#eef2fb] text-[#223047]">
      <SiteHeader />

      <main>
        <section className="bg-gradient-to-r from-[#0e4aa2] to-[#236dc5] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-[1280px]">
            <StaggerGroup className="max-w-[1080px]" stagger={0.08} distance={20} amount={0.28}>
              <StaggerItem>
                <p className="text-[12px] font-semibold text-[#53e4bb] sm:text-[14px]">
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>{" "}
                  › {AWARDS_HERO.breadcrumbLabel}
                </p>
              </StaggerItem>

              <StaggerItem>
                <h1 className="mt-8 text-[54px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[66px] lg:text-[78px]">
                  {AWARDS_HERO.title}
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-8 max-w-[980px] text-[18px] leading-[1.55] text-[#c2d7f5] sm:text-[20px]">
                  {AWARDS_HERO.description}
                </p>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
          <div className="mx-auto w-full max-w-[1280px]">
            <InViewFade className="text-center" distance={18}>
              <h2 className="text-[44px] font-semibold leading-tight tracking-[-0.03em] text-[#1655b6] sm:text-[54px]">
                A Legacy of Excellence
              </h2>
              <p className="mt-2 text-[15px] font-semibold uppercase tracking-[0.08em] text-[#8d95a7]">
                Timeline of Recognition
              </p>
            </InViewFade>

            <StaggerGroup className="relative mt-10 space-y-12 sm:space-y-14 lg:space-y-16" stagger={0.09} distance={18} amount={0.2}>
              <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#d5def0] lg:block" aria-hidden="true" />

              {AWARDS_TIMELINE.map((item) => (
                <StaggerItem key={`${item.year}-${item.title}`}>
                  <TimelineRow item={item} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section className="px-4 pb-14 sm:px-6 sm:pb-18 lg:px-8 lg:pb-20">
          <div className="mx-auto w-full max-w-[1280px]">
            <StaggerGroup className="grid gap-8 lg:grid-cols-[1fr_1.02fr] lg:items-center lg:gap-12" stagger={0.08} distance={18} amount={0.28}>
              <StaggerItem>
                <div className="max-w-[700px]">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#24935e]">
                    {AWARDS_SOCIAL_CONTRIBUTION.eyebrow}
                  </p>
                  <h2 className="mt-5 text-[44px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#144aa9] sm:text-[52px] lg:text-[58px]">
                    {AWARDS_SOCIAL_CONTRIBUTION.title}
                  </h2>
                  <p className="mt-6 text-[18px] leading-[1.7] text-[#5e6f88] sm:text-[19px]">
                    {AWARDS_SOCIAL_CONTRIBUTION.description}
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="relative overflow-hidden rounded-[30px] border border-[#d8e3f4] bg-white shadow-[0_16px_36px_rgba(21,76,150,0.12)]">
                  <div className="relative aspect-[16/10.4]">
                    <Image
                      src={AWARDS_SOCIAL_CONTRIBUTION.image}
                      alt="Dr. Amit Solanki community awareness contribution"
                      fill
                      sizes="(max-width: 1024px) 100vw, 52vw"
                      className="object-cover object-[center_20%]"
                    />
                  </div>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>
      </main>

      <TestimonialsFooterSection showTestimonials={false} />
    </div>
  );
}
