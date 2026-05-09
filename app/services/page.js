import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import TestimonialsFooterSection from "../components/testimonials-footer-section";
import { StaggerGroup, StaggerItem } from "../components/animations/motion-system";
import {
  SERVICES_HERO,
  SERVICES_PAGE_CARDS,
  SERVICES_SUPPORT_BLOCK,
} from "../constants/services-page";

function ServiceIcon({ icon }) {
  if (icon === "cataract") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="6.8" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="2.1" stroke="currentColor" strokeWidth="1.9" />
      </svg>
    );
  }

  if (icon === "glaucoma") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M12 4.2 6 6.4v5.4c0 3.7 2.5 6 6 7.4 3.5-1.4 6-3.7 6-7.4V6.4L12 4.2Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "retina") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="6.7" stroke="currentColor" strokeWidth="1.9" />
        <path d="M8.2 12h7.6M12 8.2v7.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "pediatric") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <circle cx="12" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.9" />
        <path d="M12 11.7v7m-3.1-4 3.1 1.6 3.1-1.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "keratoconus") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="6.6" stroke="currentColor" strokeWidth="1.9" />
        <path d="M8.7 12h6.6M12 8.7v6.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "pharmacy") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M5.4 8.4h13.2l-1.2 9.8H6.6L5.4 8.4Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
        <path d="M8.2 8.4 10 5.9h4l1.8 2.5M9.6 13.3h4.8M12 10.9v4.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M2.8 12s3.2-5 9.2-5 9.2 5 9.2 5-3.2 5-9.2 5-9.2-5-9.2-5Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.9" />
    </svg>
  );
}

function getIconTone(tone) {
  if (tone === "green") {
    return "bg-[#e7f5ef] text-[#1f8f5d]";
  }
  if (tone === "slate") {
    return "bg-[#edf1f5] text-[#7a899b]";
  }
  if (tone === "rose") {
    return "bg-[#fbecee] text-[#dd453b]";
  }
  if (tone === "indigo") {
    return "bg-[#edf1ff] text-[#96abf9]";
  }
  if (tone === "emerald") {
    return "bg-[#d8f7e6] text-[#138a4f]";
  }

  return "bg-[#e8efff] text-[#2671d5]";
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#eceff8] text-[#223044]">
      <SiteHeader />

      <main>
        <section className="relative isolate overflow-hidden border-b border-[#dce5f2]">
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src="/clinic.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_28%]"
            />
          </div>
          <div className="absolute inset-0 bg-[#eff2f9]/90" aria-hidden="true" />

          <div className="relative mx-auto w-full max-w-[1280px] px-4 py-24 sm:py-28 lg:py-32">
            <StaggerGroup className="mx-auto max-w-[980px] text-center" stagger={0.1} distance={22} amount={0.3}>
              <StaggerItem>
                <span className="inline-flex items-center rounded-full bg-[#dff4ea] px-5 py-2 text-[14px] font-semibold text-[#1e8b62]">
                  {SERVICES_HERO.badge}
                </span>
              </StaggerItem>

              <StaggerItem>
                <h1 className="mt-6 text-[50px] font-bold leading-[1.06] tracking-[-0.03em] text-[#0f4cb1] sm:text-[58px] lg:text-[68px]">
                  {SERVICES_HERO.title}
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="mx-auto mt-7 max-w-[900px] text-[18px] leading-[1.55] text-[#525d73] sm:text-[20px]">
                  {SERVICES_HERO.description}
                </p>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>

        <section className="bg-[#eceff8] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="mx-auto w-full max-w-[1440px]">
            <StaggerGroup className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3" stagger={0.08} distance={18} amount={0.25}>
              {SERVICES_PAGE_CARDS.map((item) => (
                <StaggerItem key={item.title}>
                  <article className="flex h-full min-h-[390px] flex-col rounded-[20px] border border-[#e3e8f2] bg-white px-7 py-8 shadow-[0_10px_26px_rgba(38,66,111,0.04)] sm:px-8">
                    <span className={["inline-flex h-16 w-16 items-center justify-center rounded-full", getIconTone(item.iconTone)].join(" ")}>
                      <ServiceIcon icon={item.icon} />
                    </span>

                    <h2 className="mt-8 text-[30px] font-semibold leading-[1.24] text-[#243249] sm:text-[32px]">
                      {item.title}
                    </h2>

                    <p className="mt-4 text-[17px] leading-[1.55] text-[#59647a]">
                      {item.description}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-auto inline-flex h-12 items-center justify-center rounded-[12px] border-2 border-[#1f63cc] text-[18px] font-semibold text-[#1f63cc] transition hover:bg-[#edf4ff]"
                    >
                      Book Consultation
                    </Link>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <StaggerGroup className="mt-6" stagger={0.08} distance={16} amount={0.3}>
              <StaggerItem>
                <article className="rounded-[18px] border border-[#e3e8f2] bg-white px-7 py-8 shadow-[0_10px_26px_rgba(38,66,111,0.04)] sm:px-8">
                  <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                    <div className="flex items-start gap-5">
                      <span className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#e8efff] text-[#1f63cc]">
                        <ServiceIcon icon={SERVICES_SUPPORT_BLOCK.icon} />
                      </span>

                      <div>
                        <h3 className="text-[32px] font-semibold leading-tight text-[#243249] sm:text-[34px]">
                          {SERVICES_SUPPORT_BLOCK.title}
                        </h3>
                        <p className="mt-2 max-w-[1020px] text-[17px] leading-[1.55] text-[#59647a]">
                          {SERVICES_SUPPORT_BLOCK.description}
                        </p>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex h-16 items-center justify-center rounded-[12px] bg-[#1350b7] px-9 text-center text-[22px] font-semibold leading-tight text-white transition hover:bg-[#0f4399]"
                    >
                      {SERVICES_SUPPORT_BLOCK.buttonLabel}
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>
      </main>

      <TestimonialsFooterSection showTestimonials={false} />
    </div>
  );
}
