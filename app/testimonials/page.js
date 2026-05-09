import Link from "next/link";
import SiteHeader from "../components/site-header";
import TestimonialsFooterSection from "../components/testimonials-footer-section";
import { StaggerGroup, StaggerItem } from "../components/animations/motion-system";
import {
  TESTIMONIALS_HERO,
  GOOGLE_REVIEW_SUMMARY,
  TESTIMONIALS_PAGE_CARDS,
} from "../constants/testimonials-page";

export const metadata = {
  title: "Patient Testimonials | Shanti EyeTech",
  description:
    "Read real patient experiences and reviews from LASIK, cataract, glaucoma and pediatric eye-care treatments at Shanti EyeTech.",
};

function RatingStars({ rating }) {
  const normalized = Math.max(0, Math.min(5, rating));

  return (
    <span className="inline-flex gap-0.5 align-middle" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, idx) => {
        const fill = Math.max(0, Math.min(1, normalized - idx));

        return (
          <span key={idx} className="relative inline-block h-4 w-4 text-[16px] leading-none">
            <span className="absolute inset-0 text-[#d7dfec]">★</span>
            <span
              className="absolute inset-0 overflow-hidden text-[#f2af14]"
              style={{ width: `${fill * 100}%` }}
            >
              ★
            </span>
          </span>
        );
      })}
    </span>
  );
}

function ReviewCard() {
  const overallRating = Number(GOOGLE_REVIEW_SUMMARY.score);

  return (
    <article className="w-full max-w-[740px] rounded-[20px] border border-[#d9e3f1] bg-white px-7 py-6 shadow-[0_10px_24px_rgba(38,68,108,0.06)]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#f4f8fd] text-[35px] font-semibold text-[#2a6ccb]">
            G
          </span>
          <div>
            <p className="text-[52px] font-bold leading-none tracking-[-0.02em] text-[#0f4698] sm:text-[56px]">
              {GOOGLE_REVIEW_SUMMARY.score}
              <span className="ml-2 align-[6px]">
                <RatingStars rating={overallRating} />
              </span>
            </p>
            <p className="mt-1 text-[17px] text-[#7e90ad]">{GOOGLE_REVIEW_SUMMARY.totalText}</p>
          </div>
        </div>

        <Link
          href="#"
          className="text-[20px] font-semibold text-[#1c57b3] transition hover:text-[#14458f]"
        >
          {GOOGLE_REVIEW_SUMMARY.cta}
        </Link>
      </div>
    </article>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className="flex h-full min-h-[350px] flex-col rounded-[22px] border border-[#dde5f2] bg-white p-7 shadow-[0_10px_26px_rgba(38,68,108,0.05)]">
      <p className="text-[22px] font-semibold text-[#f3b31c]">
        {item.rating.toFixed(1)} <span className="ml-2"><RatingStars rating={item.rating} /></span>
      </p>
      <p className="mt-4 text-[18px] leading-[1.65] text-[#435677]">“{item.quote}”</p>

      <div className="mt-auto pt-8">
        <div className="h-px bg-[#dce5f3]" />
        <div className="mt-5 flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#bdecd5] text-[20px] font-semibold text-[#2f9e6b]">
            {item.initials}
          </span>
          <div>
            <p className="text-[31px] font-semibold leading-tight text-[#1e4f9e]">{item.name}</p>
            <p className="mt-1 text-[15px] text-[#99a9c3]">{item.meta}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#eef2f8] text-[#223047]">
      <SiteHeader />

      <main>
        <section className="bg-gradient-to-r from-[#0e4aa2] to-[#236dc5] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-[1280px]">
            <StaggerGroup className="max-w-[980px]" stagger={0.08} distance={20} amount={0.3}>
              <StaggerItem>
                <p className="text-[12px] font-semibold text-[#53e4bb] sm:text-[14px]">
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>{" "}
                  › {TESTIMONIALS_HERO.breadcrumbLabel}
                </p>
              </StaggerItem>

              <StaggerItem>
                <h1 className="mt-7 text-[56px] font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-[66px] lg:text-[76px]">
                  {TESTIMONIALS_HERO.title}
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-8 max-w-[820px] text-[19px] leading-[1.6] text-[#c2d7f5] sm:text-[20px]">
                  {TESTIMONIALS_HERO.description}
                </p>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>

        <section id="what-our-patients-say" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-18">
          <div className="mx-auto w-full max-w-[1280px]">
            <StaggerGroup className="max-w-[740px]" stagger={0.08} distance={16} amount={0.3}>
              <StaggerItem>
                <ReviewCard />
              </StaggerItem>
            </StaggerGroup>

            <StaggerGroup className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3" stagger={0.08} distance={16} amount={0.22}>
              {TESTIMONIALS_PAGE_CARDS.map((item) => (
                <StaggerItem key={`${item.name}-${item.meta}`}>
                  <TestimonialCard item={item} />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      </main>

      <TestimonialsFooterSection showTestimonials={false} />
    </div>
  );
}
