import Link from "next/link";
import Image from "next/image";
import { InViewFade, StaggerGroup, StaggerItem } from "./animations/motion-system";

const testimonials = [
  {
    quote:
      "The whole LASIK experience was extremely smooth. Dr. Solanki explained every step and the team made me feel completely at ease.",
    initials: "PS",
    name: "Priya S.",
    meta: "LASIK patient · Indore",
  },
  {
    quote:
      "My father had his cataract operation here. The transparency in pricing and care, and the calm environment made all the difference.",
    initials: "RM",
    name: "Rakesh M.",
    meta: "Cataract surgery · Indore",
  },
  {
    quote:
      "Long-term glaucoma care here has been outstanding. The doctor explains everything clearly and the staff is genuinely caring.",
    initials: "AV",
    name: "Anita V.",
    meta: "Glaucoma patient · Indore",
  },
];

const quickLinks = [
  "Home",
  "About Us",
  "Know Your Doctor",
  "Awards & Achievements",
  "Testimonials",
  "Gallery",
];

const serviceLinks = [
  "Cataract Services",
  "Glaucoma Care",
  "Freedom From Glasses",
  "Keratoconus Care",
  "Retina Services",
  "Pediatric Eye Care",
];

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
    <article className="rounded-2xl border border-[#d5dfec] bg-white px-5 py-5 shadow-[0_6px_14px_rgba(34,68,112,0.06)]">
      <p className="text-[14px] tracking-[0.14em] text-[#f3b31c]">★★★★★</p>
      <p className="mt-2 text-[17px] leading-[1.48] text-[#5f789b]">“{quote}”</p>

      <div className="mt-4 border-t border-[#e3eaf3] pt-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#bdecd5] text-[12px] font-semibold text-[#2d9e6a]">
            {initials}
          </span>
          <div>
            <p className="text-[16px] font-semibold text-[#1f5cae]">{name}</p>
            <p className="text-[12px] text-[#8aa0bb]">{meta}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsFooterSection() {
  return (
    <>
      <section className="bg-[#eef3f8] px-4 pb-12 pt-16 sm:px-6 sm:pb-14 sm:pt-20 lg:px-8 lg:pb-16 lg:pt-24">
        <div className="mx-auto w-full max-w-[1280px]">
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

          <StaggerGroup className="mt-6 grid gap-4 lg:grid-cols-3" stagger={0.09} distance={16} amount={0.3}>
            {testimonials.map((item) => (
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
              href="#"
              className="motion-link-underline inline-flex items-center gap-2 text-[18px] font-semibold text-[#1f5cae] transition hover:text-[#164890]"
            >
              <span>Read more reviews on Google</span>
              <span aria-hidden="true">→</span>
            </Link>
          </InViewFade>

          <InViewFade className="motion-gradient-shift mt-14 rounded-[22px] border border-[#1c5fb0] bg-[linear-gradient(104deg,#0f4698_14%,#1a66b6_56%,#0f9d72_100%)] px-6 py-7 shadow-[0_14px_30px_rgba(19,67,129,0.26)] sm:px-8 sm:py-8 lg:mt-16 lg:px-10 lg:py-10" distance={26}>
            <StaggerGroup className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center" stagger={0.1} distance={18}>
              <StaggerItem>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#65f0bd]">
                    Need Eye Care Today?
                  </p>
                  <h3 className="mt-2 text-[45px] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-[54px] lg:text-[58px]">
                    Book your consultation
                    <br />
                    at Shanti EyeTech.
                  </h3>
                  <p className="mt-3 max-w-[620px] text-[17px] leading-[1.5] text-[#c8daf2] sm:text-[18px]">
                    Call directly, message on WhatsApp, or fill our short form - our team
                    will get back to you within the hour during clinic times.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex w-full flex-col gap-3 sm:w-[210px]">
                  <a
                    href="tel:+919179191939"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#2acb7c] px-5 text-[16px] font-semibold text-white transition hover:bg-[#1db66d]"
                  >
                    Call 9179 19 1939
                  </a>
                  <a
                    href="https://wa.me/919179191939"
                    className="inline-flex h-11 items-center justify-center rounded-full text-[15px] font-semibold text-[#9fd3ff] transition hover:text-white"
                  >
                    WhatsApp Us
                  </a>
                  <Link
                    href="#"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#2acb7c] px-5 text-[16px] font-semibold text-white transition hover:bg-[#1db66d]"
                  >
                    Book Appointment
                  </Link>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </InViewFade>
        </div>
      </section>

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
                {quickLinks.map((item) => (
                  <li key={item}>
                    <Link href="#" className="motion-link-underline text-[16px] text-[#9bbce3] transition hover:text-white">
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
                {serviceLinks.map((item) => (
                  <li key={item}>
                    <Link href="#" className="motion-link-underline text-[16px] text-[#9bbce3] transition hover:text-white">
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
