import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/site-header";
import { InViewFade, StaggerGroup, StaggerItem } from "../components/animations/motion-system";
import TestimonialsFooterSection from "../components/testimonials-footer-section";
import { DOCTOR_SPECIALTIES, DOCTOR_STATS } from "../constants/home";

export const metadata = {
  title: "Know Your Doctor | Shanti EyeTech",
  description: "Meet Dr. Amit N. Solanki and explore his medical experience, specialties, and patient-first approach.",
};

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M6.3 4.8c.3-.7 1-.9 1.7-.7l2.4.8c.7.2 1.1.9.9 1.6L10.6 9c-.2.6-.8 1-1.5.9l-1.4-.2a15.3 15.3 0 0 0 6.6 6.6l-.2-1.4c-.1-.7.3-1.3.9-1.5l2.5-.7c.7-.2 1.4.2 1.6.9l.8 2.4c.2.7 0 1.4-.7 1.7l-1.8.8a4.4 4.4 0 0 1-4-.2 19.5 19.5 0 0 1-8.6-8.6 4.4 4.4 0 0 1-.2-4l.7-1.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M5 12h13m0 0-4.5-4.5M18 12l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const DOCTOR_PROFILE = {
  eyebrow: "Medical Director",
  name: "Dr. Amit N. Solanki",
  subtitle: "MBBS · DOMS · DNB · FAECS · Cataract, Glaucoma & Refractive-LASIK Surgeon",
  bio:
    "Director of Shanti EyeTech, with more than 20 years of ophthalmology experience. Trained at B.J. Medical College, Ahmedabad and Aravind Eye Hospital, Tamil Nadu - with advanced training in phacoemulsification, glaucoma diagnosis & management, and LASIK refractive surgery.",
  highlights: [
    {
      label: "Credentials",
      value: "MBBS · DOMS · DNB · FAECS",
    },
    {
      label: "Specialization",
      value: DOCTOR_SPECIALTIES.join(", "),
    },
    {
      label: "Recognition",
      value: `${DOCTOR_STATS[1].value} ${DOCTOR_STATS[1].label}`,
    },
    {
      label: "Affiliations",
      value: `${DOCTOR_STATS[2].value} ${DOCTOR_STATS[2].label}`,
    },
  ],
};

export default function KnowYourDoctor() {
  return (
    <div className="min-h-screen bg-[#f5f9ff] text-[#11233d]">
      <SiteHeader />

      <main className="overflow-hidden">
        <section className="bg-[#f5f9ff] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto w-full max-w-[1280px]">
            <InViewFade className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-14" distance={26}>
              <article className="flex flex-col justify-start rounded-[32px] bg-white p-8 shadow-[0_18px_48px_rgba(13,67,128,0.08)] sm:p-10 lg:p-12">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f4ff] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f6ad1]">
                    <span className="h-2 w-2 rounded-full bg-[#0f6ad1]" />
                    Know Your Doctor
                  </div>

                  <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#2ca56f]">
                    {DOCTOR_PROFILE.eyebrow}
                  </p>

                  <h1 className="mt-3 max-w-[600px] text-[44px] font-bold leading-[0.96] tracking-[-0.04em] text-[#0f4698] sm:text-[52px] lg:text-[56px]">
                    {DOCTOR_PROFILE.name}
                  </h1>

                  <p className="mt-4 max-w-[620px] text-[16px] italic leading-[1.6] text-[#1760b8] sm:text-[17px]">
                    {DOCTOR_PROFILE.subtitle}
                  </p>

                  <div className="mt-6 h-px bg-[#e5ecf5]" />

                  <p className="mt-6 max-w-[700px] text-[15px] leading-[1.75] text-[#6a7a92] sm:text-[16px]">
                    {DOCTOR_PROFILE.bio}
                  </p>

                  <StaggerGroup className="mt-8 grid gap-3 sm:grid-cols-2" stagger={0.06} distance={12} amount={0.28}>
                    {DOCTOR_PROFILE.highlights.map((item) => (
                      <StaggerItem key={item.label}>
                        <article className="rounded-[20px] border border-[#e0e9f4] bg-[#f8faff] p-5">
                          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0f6ad1]">
                            {item.label}
                          </p>
                          <p className="mt-3 text-[14px] leading-[1.6] text-[#5f7a93]">
                            {item.value}
                          </p>
                        </article>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>

                  <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                    <a
                      href="tel:+919179191939"
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-[#1d5eb6] px-6 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(29,94,182,0.18)] transition hover:bg-[#164c94]"
                    >
                      <PhoneIcon />
                      <span>Call us</span>
                    </a>

                    <Link
                      href="/contact"
                      className="motion-link-underline inline-flex items-center gap-2 text-[15px] font-semibold text-[#1d5eb6] transition hover:text-[#164c94]"
                    >
                      <span>Book a consultation</span>
                      <ArrowRightIcon />
                    </Link>
                  </div>
                </div>
              </article>

              <div className="relative flex flex-col">
                <div className="relative overflow-hidden rounded-[28px] border-8 border-[#bce0ff] bg-gradient-to-b from-[#0d7bbd] to-[#1760b8] p-2 shadow-[0_20px_60px_rgba(13,67,128,0.16)]">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-[#d5e8f5]">
                    <Image
                      src="/1_doctor.png"
                      alt="Dr. Amit N. Solanki"
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover object-[center_15%]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(7,51,108,0.08)_100%)]" aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <article className="rounded-[20px] border border-[#d9e5f3] bg-white p-5 shadow-[0_10px_28px_rgba(13,67,128,0.08)]">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0f6ad1]">
                      Experience
                    </p>
                    <p className="mt-3 text-[24px] font-bold text-[#0f4698]">
                      20+ years
                    </p>
                    <p className="mt-2 text-[13px] leading-[1.65] text-[#6a7a92]">
                      Long-standing practice focused on precision eye surgery and measured follow-up.
                    </p>
                  </article>

                  <article className="rounded-[20px] border border-[#d9e5f3] bg-white p-5 shadow-[0_10px_28px_rgba(13,67,128,0.08)]">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0f6ad1]">
                      Specialties
                    </p>
                    <p className="mt-3 inline-block rounded-full bg-[#0f4698] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                      {DOCTOR_SPECIALTIES[0]}
                    </p>
                    <p className="mt-2 text-[13px] leading-[1.65] text-[#6a7a92]">
                      {DOCTOR_SPECIALTIES.slice(1).join(" · ")}
                    </p>
                  </article>
                </div>
              </div>
            </InViewFade>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto w-full max-w-[1280px]">
            <InViewFade className="mb-16 max-w-[800px]" distance={20}>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#2ca56f]">
                Areas of Expertise
              </p>
              <h2 className="mt-4 text-[44px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0f4698] sm:text-[52px]">
                Six core specialisations.
              </h2>
            </InViewFade>

            <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07} distance={16} amount={0.3}>
              <StaggerItem>
                <article className="rounded-[24px] border border-[#e0e9f4] bg-[#f8fbff] p-8 transition hover:shadow-[0_14px_40px_rgba(13,67,128,0.12)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f4ff]">
                    <svg className="h-7 w-7 text-[#0f6ad1]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 8v4m0 4v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-[18px] font-bold text-[#0f4698]">Cataract Surgery</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[#6a7a92]">
                    Advanced phacoemulsification &amp; micro-incision techniques.
                  </p>
                </article>
              </StaggerItem>

              <StaggerItem>
                <article className="rounded-[24px] border border-[#e0e9f4] bg-[#f8fbff] p-8 transition hover:shadow-[0_14px_40px_rgba(13,67,128,0.12)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f4ff]">
                    <svg className="h-7 w-7 text-[#0f6ad1]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-[18px] font-bold text-[#0f4698]">Glaucoma Management</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[#6a7a92]">
                    Diagnosis, medical and surgical management of glaucoma.
                  </p>
                </article>
              </StaggerItem>

              <StaggerItem>
                <article className="rounded-[24px] border border-[#e0e9f4] bg-[#f8fbff] p-8 transition hover:shadow-[0_14px_40px_rgba(13,67,128,0.12)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f4ff]">
                    <svg className="h-7 w-7 text-[#0f6ad1]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 7v5l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-[18px] font-bold text-[#0f4698]">LASIK &amp; Refractive</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[#6a7a92]">
                    Refractive-LASIK-LASER surgery for vision correction.
                  </p>
                </article>
              </StaggerItem>

              <StaggerItem>
                <article className="rounded-[24px] border border-[#e0e9f4] bg-[#f8fbff] p-8 transition hover:shadow-[0_14px_40px_rgba(13,67,128,0.12)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f4ff]">
                    <svg className="h-7 w-7 text-[#0f6ad1]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2s-2-.9-2-2V4c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 10c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-[18px] font-bold text-[#0f4698]">Advanced Phaco</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[#6a7a92]">
                    Premium IOLs and advanced cataract techniques.
                  </p>
                </article>
              </StaggerItem>

              <StaggerItem>
                <article className="rounded-[24px] border border-[#e0e9f4] bg-[#f8fbff] p-8 transition hover:shadow-[0_14px_40px_rgba(13,67,128,0.12)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f4ff]">
                    <svg className="h-7 w-7 text-[#0f6ad1]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 7.5v5l3.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-[18px] font-bold text-[#0f4698]">Micro Cataract Surgery</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[#6a7a92]">
                    Small-incision cataract surgery for faster recovery.
                  </p>
                </article>
              </StaggerItem>

              <StaggerItem>
                <article className="rounded-[24px] border border-[#e0e9f4] bg-[#f8fbff] p-8 transition hover:shadow-[0_14px_40px_rgba(13,67,128,0.12)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f4ff]">
                    <svg className="h-7 w-7 text-[#0f6ad1]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="4" y="4" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="13" y="4" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="4" y="13" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="13" y="13" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-[18px] font-bold text-[#0f4698]">Ophthalmic Research</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-[#6a7a92]">
                    Active in scientific presentations &amp; academic research.
                  </p>
                </article>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>

        {/* Education & Training Section */}
        <section className="bg-[#f5f9ff] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto w-full max-w-[1280px]">
            <InViewFade className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center" distance={20}>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#2ca56f]">
                  Education &amp; Training
                </p>
                <h2 className="mt-4 text-[44px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0f4698] sm:text-[52px]">
                  Trained at India&apos;s finest eye institutions.
                </h2>
                <p className="mt-6 text-[16px] leading-[1.8] text-[#6a7a92]">
                  Dr. Solanki&apos;s training journey spans some of the most respected ophthalmology institutes in India and abroad — combining academic rigour with hands-on surgical mentorship.
                </p>
              </div>

              <div className="space-y-4">
                <article className="rounded-[16px] border border-[#d9e5f3] bg-white p-5 shadow-[0_4px_12px_rgba(13,67,128,0.06)]">
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#0f6ad1]">MBBS</p>
                  <p className="mt-2 text-[14px] text-[#6a7a92]">B.J. Medical College, New Civil Hospital, Ahmedabad</p>
                </article>

                <article className="rounded-[16px] border border-[#d9e5f3] bg-white p-5 shadow-[0_4px_12px_rgba(13,67,128,0.06)]">
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#0f6ad1]">DOMS — Third Rank, Gujarat University</p>
                  <p className="mt-2 text-[14px] text-[#6a7a92]">M. &amp; J. Western Regional Institute of Ophthalmology, Ahmedabad</p>
                </article>

                <article className="rounded-[16px] border border-[#d9e5f3] bg-white p-5 shadow-[0_4px_12px_rgba(13,67,128,0.06)]">
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#0f6ad1]">DNB Ophthalmology</p>
                  <p className="mt-2 text-[14px] text-[#6a7a92]">Aravind Eye Hospital &amp; PGI Institute of Ophthalmology, Tamil Nadu</p>
                </article>

                <article className="rounded-[16px] border border-[#d9e5f3] bg-white p-5 shadow-[0_4px_12px_rgba(13,67,128,0.06)]">
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#0f6ad1]">Phaco &amp; Glaucoma Special Training</p>
                  <p className="mt-2 text-[14px] text-[#6a7a92]">Aravind Eye Care Hospital, Coimbatore</p>
                </article>

                <article className="rounded-[16px] border border-[#d9e5f3] bg-white p-5 shadow-[0_4px_12px_rgba(13,67,128,0.06)]">
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#0f6ad1]">LASIK Surgical Training</p>
                  <p className="mt-2 text-[14px] text-[#6a7a92]">Vadodara, Gujarat</p>
                </article>
              </div>
            </InViewFade>
          </div>
        </section>

        {/* International Faculty Section */}
        <section className="bg-[#0d3a7a] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto w-full max-w-[1280px]">
            <InViewFade className="mb-16 max-w-[600px]" distance={20}>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#7ba8d9]">
                International Faculty
              </p>
              <h2 className="mt-4 text-[44px] font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-[52px]">
                Recognised on a global stage.
              </h2>
              <p className="mt-6 text-[16px] leading-[1.8] text-[#b3cde8]">
                Dr. Solanki has been invited as International Guest Faculty at leading ophthalmology events and has trained foreign doctors through Alina Vision International Foundation.
              </p>
            </InViewFade>

            <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08} distance={16} amount={0.3}>
              <StaggerItem>
                <article className="rounded-[20px] border border-[#1a5fa0] bg-[#0f4a8a] p-8 backdrop-blur transition hover:border-[#2a7bc0] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
                  <svg className="h-6 w-6 text-[#7ba8d9]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <h3 className="mt-5 text-[20px] font-bold text-white">Kuala Lumpur</h3>
                  <p className="mt-2 text-[14px] text-[#b3cde8]">World Glaucoma Congress</p>
                </article>
              </StaggerItem>

              <StaggerItem>
                <article className="rounded-[20px] border border-[#1a5fa0] bg-[#0f4a8a] p-8 backdrop-blur transition hover:border-[#2a7bc0] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
                  <svg className="h-6 w-6 text-[#7ba8d9]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <h3 className="mt-5 text-[20px] font-bold text-white">Bangkok</h3>
                  <p className="mt-2 text-[14px] text-[#b3cde8]">Asia Australia Congress</p>
                </article>
              </StaggerItem>

              <StaggerItem>
                <article className="rounded-[20px] border border-[#1a5fa0] bg-[#0f4a8a] p-8 backdrop-blur transition hover:border-[#2a7bc0] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
                  <svg className="h-6 w-6 text-[#7ba8d9]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <h3 className="mt-5 text-[20px] font-bold text-white">Hanoi</h3>
                  <p className="mt-2 text-[14px] text-[#b3cde8]">Alina Vision Foundation</p>
                </article>
              </StaggerItem>

              <StaggerItem>
                <article className="rounded-[20px] border border-[#1a5fa0] bg-[#0f4a8a] p-8 backdrop-blur transition hover:border-[#2a7bc0] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
                  <svg className="h-6 w-6 text-[#7ba8d9]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <h3 className="mt-5 text-[20px] font-bold text-white">Coimbatore</h3>
                  <p className="mt-2 text-[14px] text-[#b3cde8]">Aravind Eye Care Hospital</p>
                </article>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>

        {/* Professional Memberships Section */}
        <section className="bg-[#f5f9ff] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto w-full max-w-[1280px]">
            <InViewFade className="mb-16 max-w-[800px]" distance={20}>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#2ca56f]">
                Professional Memberships
              </p>
              <h2 className="mt-4 text-[44px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0f4698] sm:text-[52px]">
                Active across India&apos;s ophthalmic community.
              </h2>
            </InViewFade>

            <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06} distance={12} amount={0.2}>
              <StaggerItem>
                <div className="rounded-[16px] border border-[#d9e5f3] bg-white p-6 transition hover:shadow-[0_8px_24px_rgba(13,67,128,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#2ca56f]"></div>
                    <p className="text-[15px] font-medium text-[#6a7a92]">All India Ophthalmic Society</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="rounded-[16px] border border-[#d9e5f3] bg-white p-6 transition hover:shadow-[0_8px_24px_rgba(13,67,128,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#2ca56f]"></div>
                    <p className="text-[15px] font-medium text-[#6a7a92]">Glaucoma Society of India</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="rounded-[16px] border border-[#d9e5f3] bg-white p-6 transition hover:shadow-[0_8px_24px_rgba(13,67,128,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#2ca56f]"></div>
                    <p className="text-[15px] font-medium text-[#6a7a92]">Indian Medical Association</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="rounded-[16px] border border-[#d9e5f3] bg-white p-6 transition hover:shadow-[0_8px_24px_rgba(13,67,128,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#2ca56f]"></div>
                    <p className="text-[15px] font-medium text-[#6a7a92]">Ocular Trauma Society of India</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="rounded-[16px] border border-[#d9e5f3] bg-white p-6 transition hover:shadow-[0_8px_24px_rgba(13,67,128,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#2ca56f]"></div>
                    <p className="text-[15px] font-medium text-[#6a7a92]">Delhi Ophthalmic Society</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="rounded-[16px] border border-[#d9e5f3] bg-white p-6 transition hover:shadow-[0_8px_24px_rgba(13,67,128,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#2ca56f]"></div>
                    <p className="text-[15px] font-medium text-[#6a7a92]">Gujarat Ophthalmic Society</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="rounded-[16px] border border-[#d9e5f3] bg-white p-6 transition hover:shadow-[0_8px_24px_rgba(13,67,128,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#2ca56f]"></div>
                    <p className="text-[15px] font-medium text-[#6a7a92]">Rajasthan Ophthalmic Society</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="rounded-[16px] border border-[#d9e5f3] bg-white p-6 transition hover:shadow-[0_8px_24px_rgba(13,67,128,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#2ca56f]"></div>
                    <p className="text-[15px] font-medium text-[#6a7a92]">Indore Divisional Ophthalmic Society</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="rounded-[16px] border border-[#d9e5f3] bg-white p-6 transition hover:shadow-[0_8px_24px_rgba(13,67,128,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#2ca56f]"></div>
                    <p className="text-[15px] font-medium text-[#6a7a92]">M.P. State Ophthalmic Society</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="rounded-[16px] border border-[#d9e5f3] bg-white p-6 transition hover:shadow-[0_8px_24px_rgba(13,67,128,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#2ca56f]"></div>
                    <p className="text-[15px] font-medium text-[#6a7a92]">Lions Club of Indore</p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="rounded-[16px] border border-[#d9e5f3] bg-white p-6 transition hover:shadow-[0_8px_24px_rgba(13,67,128,0.1)]">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#2ca56f]"></div>
                    <p className="text-[15px] font-medium text-[#6a7a92]">Thalassemia Children Welfare Society</p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>

        <section id="testimonials">
          <TestimonialsFooterSection />
        </section>
      </main>
    </div>
  );
}
