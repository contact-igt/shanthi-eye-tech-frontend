import Link from "next/link";
import Image from "next/image";
import { InViewFade, StaggerGroup, StaggerItem } from "./animations/motion-system";
import { TESTIMONIALS, QUICK_LINKS, SERVICE_LINKS } from "../constants/testimonials";

function getQuickLinkHref(label) {
  switch (label) {
    case "Home":
      return "/";
    case "About Us":
      return "/about";
    case "Know Your Doctor":
      return "/know-your-doctor";
    case "Awards & Achievements":
      return "/awards";
    case "Testimonials":
      return "/testimonials";
    case "Gallery":
      return "/gallery";
    default:
      return "/";
  }
}

function getServiceLinkHref() {
  return "/services";
}

function FooterEyeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M2.8 12s3.2-5 9.2-5 9.2 5 9.2 5-3.2 5-9.2 5-9.2-5-9.2-5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function RatingCard() {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-[#d3dfec] bg-white px-4 py-3 shadow-[0_8px_18px_rgba(38,68,108,0.08)]">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f3f7fc] text-[14px] font-semibold text-[#6f88ab]">
        G
      </span>
      <div>
        <p className="text-[37px] font-bold leading-none tracking-[-0.02em] text-[#0f4698]">
          4.9 <span className="text-[14px] align-[14px] tracking-[0.12em] text-[#f1b31c]">★★★★★</span>
        </p>
        <p className="text-[12px] font-medium text-[#7e91ae]">Based on 776 Google Reviews</p>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, initials, name, meta }) {
  return (
    <article className="glass-card motion-card-soft p-6 h-full flex flex-col justify-between">
      <div>
        <p className="text-[14px] tracking-[0.14em] text-[#f3b31c]">★★★★★</p>
        <p className="mt-2 text-[17px] leading-[1.48] text-[#5f789b]">“{quote}”</p>
      </div>

      <div className="mt-4 border-t border-[#e3eaf3] pt-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#bdecd5] text-[12px] font-semibold text-[#2d9e6a]">
            {initials}
          </span>
          <div>
            <p className="text-[16px] font-semibold glass-title">{name}</p>
            <p className="text-[12px] text-[#8aa0bb]">{meta}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsFooterSection({
  showTestimonials = true,
  showExperienceCta = true,
}) {
  const hasTopPanel = showTestimonials;

  return (
    <>
      {hasTopPanel ? (
        <section
          className={[
            "bg-[#eef3f8] px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16",
            showTestimonials ? "pt-16 sm:pt-20 lg:pt-24" : "pt-0",
          ].join(" ")}
        >
          <div className="mx-auto w-full max-w-[1280px]">
            {showTestimonials ? (
              <>
                <StaggerGroup className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end" stagger={0.12} distance={24}>
                  <StaggerItem>
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#2ca56f]">
                        Patient Voices
                      </p>
                      <h2 className="mt-2 text-[50px] font-semibold tracking-[-0.03em] text-[#0f4698] sm:text-[58px] lg:text-[64px]">
                        What our patients say.
                      </h2>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="lg:justify-self-end">
                      <RatingCard />
                    </div>
                  </StaggerItem>
                </StaggerGroup>

                <StaggerGroup className="mt-6 grid gap-4 lg:grid-cols-3 items-stretch" stagger={0.09} distance={16} amount={0.3}>
                  {TESTIMONIALS.map((item) => (
                    <StaggerItem key={item.name}>
                      <TestimonialCard
                        quote={item.quote}
                        initials={item.initials}
                        name={item.name}
                        meta={item.meta}
                      />
                    </StaggerItem>
                  ))}
                </StaggerGroup>

                <InViewFade className="mt-8 text-center" distance={16}>
                  <Link
                    href="/testimonials#what-our-patients-say"
                    className="motion-link-underline inline-flex items-center gap-2 text-[18px] font-semibold text-[#1f5cae] transition hover:text-[#164890]"
                  >
                    <span>Read more reviews</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </InViewFade>
              </>
            ) : null}

          </div>
        </section>
      ) : null}

      {showExperienceCta ? (
        <section
          className={[
            "bg-[#eef3f8] px-4 sm:px-6 lg:px-8",
            hasTopPanel ? "pb-12 sm:pb-14 lg:pb-16" : "py-12 sm:py-14 lg:py-16",
          ].join(" ")}
        >
          <div className="mx-auto w-full max-w-[1280px] overflow-hidden rounded-[30px] border border-[#8ab4eb]/45 bg-[linear-gradient(120deg,#0d4ba4_0%,#1e64bc_58%,#129f66_100%)] shadow-[0_22px_50px_rgba(19,67,129,0.24)]">
            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#80f2ca]">
                  Share your experience
                </p>
                <h3 className="mt-4 max-w-[620px] text-[52px] font-semibold leading-[1.03] tracking-[-0.03em] text-white sm:text-[58px]">
                  We&apos;d love to hear
                  <br />
                  from you, too.
                </h3>
                <p className="mt-4 max-w-[680px] text-[18px] leading-[1.6] text-[#c5d8f4] sm:text-[19px]">
                  Your review helps other patients find the care they need.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 lg:items-center">
                <a
                  href="tel:+919179191939"
                  className="inline-flex h-14 items-center gap-3 whitespace-nowrap rounded-full bg-[#35c97b] px-8 text-[16px] font-semibold text-white transition hover:bg-[#2bb06a]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path
                      d="M6.3 4.8c.3-.7 1-.9 1.7-.7l2.4.8c.7.2 1.1.9.9 1.6L10.6 9c-.2.6-.8 1-1.5.9l-1.4-.2a15.3 15.3 0 0 0 6.6 6.6l-.2-1.4c-.1-.7.3-1.3.9-1.5l2.5-.7c.7-.2 1.4.2 1.6.9l.8 2.4c.2.7 0 1.4-.7 1.7l-1.8.8a4.4 4.4 0 0 1-4-.2 19.5 19.5 0 0 1-8.6-8.6 4.4 4.4 0 0 1-.2-4l.7-1.8Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Call 9179 19 1939</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-white/45 bg-white/12 px-7 text-[16px] font-semibold text-white transition hover:bg-white/20"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <footer className="bg-[#0d4798] px-4 pb-7 pt-12 sm:px-6 sm:pb-8 sm:pt-14 lg:px-8 lg:pb-10 lg:pt-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <StaggerGroup className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr_0.85fr_1fr] lg:gap-12" stagger={0.08} distance={18} amount={0.18}>
            <StaggerItem>
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center">
                    <Image
                      src="/favicon.png"
                      alt="Shanti EyeTech logo"
                      width={260}
                      height={80}
                      className="h-auto w-auto object-contain"
                      priority
                    />
                  </span>
                </div>

                <p className="mt-4 max-w-[380px] text-[20px] leading-[1.45] text-[#8bb0de]">
                  Where peace meets world-class technology - comprehensive eye care,
                  advanced cataract, glaucoma and refractive surgery led by Dr. Amit N.
                  Solanki in the heart of Indore.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex items-center gap-3">
                <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-white">
                  Quick Links
                </p>
              </div>
              <ul className="mt-4 space-y-2.5">
                {QUICK_LINKS.map((item) => (
                  <li key={item}>
                    <Link href={getQuickLinkHref(item)} className="motion-link-underline text-[16px] text-[#9bbce3] transition hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            <StaggerItem>
              <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-white">
                Services
              </p>
              <ul className="mt-4 space-y-2.5">
                {SERVICE_LINKS.map((item) => (
                  <li key={item}>
                    <Link href={getServiceLinkHref(item)} className="motion-link-underline text-[16px] text-[#9bbce3] transition hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            <StaggerItem>
              <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-white">Visit Us</p>
              <p className="mt-4 max-w-[290px] text-[16px] leading-[1.5] text-[#9bbce3]">
                Shekhar Central, M1 & M2,
                <br />
                Palasia Square, Manorama Ganj,
                <br />
                Indore, MP 452001
              </p>
              <a
                href="tel:+9179191939"
                className="mt-3 block text-[18px] font-semibold text-[#58e9b4] transition hover:text-[#8ef6d1]"
              >
                9179191939 · 0731-4291939
              </a>
              <a
                href="mailto:info@shantieyetech.com"
                className="mt-2 block text-[16px] text-[#9bbce3] transition hover:text-white"
              >
                info@shantieyetech.com
              </a>
            </StaggerItem>
          </StaggerGroup>

          <InViewFade className="mt-10 flex flex-col gap-3 border-t border-[#2c62ac] pt-5 text-[13px] text-[#7399ca] sm:flex-row sm:items-center sm:justify-between" delay={0.08} distance={12}>
            <p>© 2026 Shanti EyeTech Eye Care & Laser Hospital · All rights reserved</p>
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="#" className="motion-link-underline transition hover:text-[#aac7ea]">
                Privacy
              </Link>
              <span aria-hidden="true">·</span>
              <Link href="#" className="motion-link-underline transition hover:text-[#aac7ea]">
                Terms
              </Link>
              <span aria-hidden="true">·</span>
              <Link href="#" className="motion-link-underline transition hover:text-[#aac7ea]">
                Sitemap
              </Link>
            </div>
          </InViewFade>
        </div>
      </footer>
    </>
  );
}
