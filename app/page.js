import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/site-header";
import {
  CountUpNumber,
  InViewFade,
  StaggerGroup,
  StaggerItem,
} from "./components/animations/motion-system";
import ServicesSection from "./components/services-section";
import TestimonialsFooterSection from "./components/testimonials-footer-section";
import WhyChooseAwardsSection from "./components/why-choose-awards-section";
import { HERO_STATS, TRUST_BLOCKS, ABOUT_HIGHLIGHTS, FACILITY_TILES, DOCTOR_SPECIALTIES, DOCTOR_STATS } from "./constants/home";

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-6.4 7-11.4A7 7 0 1 0 5 9.6C5 14.6 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.5v5l3.8 1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M4.2 7.8A2.8 2.8 0 0 1 7 5h10a2.8 2.8 0 0 1 2.8 2.8v8.4A2.8 2.8 0 0 1 17 19H7a2.8 2.8 0 0 1-2.8-2.8V7.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="m5.5 8.8 6.5 4.8 6.5-4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

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

function TimeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.7v4.6l3.5 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function TechIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="m12 4 1.6 3.8 4.2.3-3.2 2.7 1 4.1-3.6-2.2-3.6 2.2 1-4.1L6.2 8l4.2-.3L12 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 20s-6.6-4.2-8.4-7.7A4.9 4.9 0 0 1 12 6a4.9 4.9 0 0 1 8.4 6.3C18.6 15.8 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrustBlockIcon({ icon }) {
  if (icon === "time") {
    return <TimeIcon />;
  }

  if (icon === "tech") {
    return <TechIcon />;
  }

  if (icon === "location") {
    return <LocationIcon />;
  }

  return <CareIcon />;
}

function EyeMark() {
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

function FacilityTile({ title, image, className, objectPosition }) {
  return (
    <article
      className={[
        "relative overflow-hidden rounded-2xl border border-[#cfd9e6] bg-[#e2e9f2]",
        className,
      ].join(" ")}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className={["object-cover", objectPosition].join(" ")}
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,53,114,0)_38%,rgba(14,69,141,0.62)_100%)]"
        aria-hidden="true"
      />
      <p className="absolute bottom-3 left-4 pr-4 text-[23px] font-semibold leading-tight text-white sm:text-[24px]">
        {title}
      </p>
    </article>
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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f8ff] text-[#0c3f86]">
      <SiteHeader />

      <main>
        <section id="home" className="relative isolate overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-[center_52%]"
            style={{ backgroundImage: "url('/Home.jpeg')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#0f4c9a]/38" aria-hidden="true" />
          <div
            className="motion-gradient-shift absolute inset-0 bg-[linear-gradient(94deg,rgba(8,61,129,0.42)_10%,rgba(18,80,155,0.22)_56%,rgba(52,127,190,0.08)_100%)]"
            aria-hidden="true"
          />

          <div className="relative mx-auto w-full max-w-[1280px] px-4">
            <StaggerGroup
              className="flex min-h-[570px] flex-col justify-center pb-16 pt-14 sm:min-h-[620px] sm:pb-20 sm:pt-16 lg:min-h-[640px]"
              stagger={0.12}
              distance={34}
              duration={0.86}
              amount={0.35}
            >
              <StaggerItem>
                <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6af5be] sm:text-[12px]">
                  Indore · Since 2003
                </p>
              </StaggerItem>

              <StaggerItem>
                <h1 className="max-w-[800px] text-[44px] font-bold leading-[0.98] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[64px]">
                  Advanced eye care
                  <br />
                  with <span className="font-serif text-[#63eeb9]">peace,</span> precision
                  <br />
                  &amp; personal attention.
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-5 max-w-[710px] text-[24px] leading-[1.45] text-white/90 sm:text-[29px]">
                  At Shanti EyeTech Eye Care &amp; Laser Hospital, we combine world-class
                  ophthalmic technology with a calm, patient-first environment -
                  comprehensive treatment under one roof.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <a
                    href="tel:+919179191939"
                    className="inline-flex h-14 items-center gap-2.5 rounded-full bg-[#2acb7c] px-8 text-[27px] font-semibold text-white transition hover:bg-[#1fba6f]"
                  >
                    <PhoneIcon />
                    <span>Call 9179 19 1939</span>
                  </a>

                  <Link
                    href="#"
                    className="inline-flex h-14 items-center gap-2.5 rounded-full bg-[#2acb7c] px-6 text-[26px] font-semibold text-white transition-shadow hover:bg-[#1db66d] shadow-md"
                  >
                    <span>Book Appointment</span>
                    <ArrowRightIcon />
                  </Link>
                </div>
              </StaggerItem>
            </StaggerGroup>

            <InViewFade className="border-t border-white/20 pb-12 pt-7 sm:pb-14" delay={0.16} distance={20}>
              <StaggerGroup className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-5" stagger={0.1} amount={0.35} distance={16}>
                {HERO_STATS.map((item) => (
                  <StaggerItem key={item.label}>
                    <div>
                      <CountUpNumber
                        value={item.end}
                        suffix={item.suffix}
                        decimals={item.decimals}
                        className="text-[48px] font-bold leading-none tracking-[-0.03em] text-[#69f5bf] sm:text-[58px]"
                      />
                      <p className="mt-2 text-[23px] font-medium leading-tight text-white/86">
                        {item.label}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </InViewFade>
          </div>
        </section>

        <section className="bg-[#f8fafc] px-4 sm:px-6 lg:px-8">
          <StaggerGroup className="grid w-full overflow-hidden border border-[#dde5ef] md:grid-cols-2 xl:grid-cols-4 items-stretch" stagger={0.09} amount={0.3} distance={18}>
            {TRUST_BLOCKS.map((item, index) => (
              <StaggerItem key={item.title}>
                <div
                  className={[
                    "motion-card-soft h-full flex items-center gap-4 bg-[#f6f8fb] px-7 py-6 rounded-2xl",
                    index > 0 ? "border-l border-[#dde5ef]" : "",
                    index > 1 ? "border-t border-[#dde5ef] md:border-t-0" : "",
                  ].join(" ")}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ebf2fa] text-[#5695d9]">
                    <TrustBlockIcon icon={item.icon} />
                  </div>
                  <div>
                    <h2 className="text-[24px] font-semibold leading-tight text-[#1f5aa8]">{item.title}</h2>
                    <p className="mt-1 text-[21px] leading-tight text-[#6c809d]">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        <section className="bg-[#eef3f8] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-[1.02fr_1fr] lg:gap-14">
            <InViewFade className="relative min-h-[380px] overflow-hidden rounded-[26px] border border-[#d3e0ec] bg-white shadow-[0_18px_40px_rgba(53,86,123,0.14)] sm:min-h-[500px] lg:min-h-[680px]" distance={28}>
              <Image
                src="/bed.webp"
                alt="Hospital bed facility"
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-[center_48%]"
              />
            </InViewFade>

            <StaggerGroup className="" stagger={0.1} distance={22} amount={0.28}>
              <StaggerItem>
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2ca56f]">
                  About Shanti EyeTech
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="mt-5 max-w-[640px] text-[46px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#0f4698] sm:text-[56px] lg:text-[63px]">
                  Where peace meets
                  <br />
                  world-class eye
                  <br />
                  technology.
                </h2>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-5 max-w-[660px] text-[17px] font-medium leading-[1.55] text-[#6f84a3] sm:text-[18px]">
                  <strong className="font-semibold text-[#123f80]">“Shanti”</strong> signifies
                  peace. <strong className="font-semibold text-[#123f80]">“EyeTech”</strong>
                  represents world-class technology in eye care. Our hospital brings the two
                  together - a calm, reassuring environment supported by qualified doctors,
                  trained paramedical staff, and modern ophthalmic equipment.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-5 max-w-[660px] text-[17px] leading-[1.55] text-[#6f84a3] sm:text-[18px]">
                  Conveniently located in the heart of Indore, we are committed to personalised
                  attention, compassionate care, and quality treatment at affordable rates.
                </p>
              </StaggerItem>

              <StaggerItem>
                <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2 items-stretch" stagger={0.09} distance={14} amount={0.35}>
                  {ABOUT_HIGHLIGHTS.map((item) => (
                    <StaggerItem key={item.title}>
                      <article className="motion-card-soft rounded-2xl border border-[#d4deea] bg-white/72 p-6 h-full flex flex-col justify-between">
                        <h3 className="text-[17px] font-semibold text-[#2f70ba]">{item.title}</h3>
                        <p className="mt-1.5 text-[16px] leading-[1.4] text-[#6d83a2]">
                          {item.description}
                        </p>
                      </article>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </StaggerItem>

              <StaggerItem>
                <Link
                  href="#"
                  className="motion-link-underline mt-8 inline-flex items-center gap-2 text-[18px] font-semibold text-[#1f5cae] transition hover:text-[#164c94]"
                >
                  <span>Know more about us</span>
                  <ArrowRightIcon />
                </Link>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>

        <section className="bg-[#eef3f8] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="mx-auto w-full max-w-[1280px]">
            <StaggerGroup className="mb-8 grid gap-6 lg:mb-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end" stagger={0.12} distance={22}>
              <StaggerItem>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2ca56f]">
                    Inside Our Hospital
                  </p>
                  <h2 className="mt-4 max-w-[760px] text-[48px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#0f4698] sm:text-[58px] lg:text-[64px]">
                    A calm, modern atmosphere
                    <br />
                    built for your comfort.
                  </h2>
                </div>
              </StaggerItem>

              <StaggerItem>
                <p className="max-w-[420px] text-[18px] leading-[1.5] text-[#7e91ae] sm:text-[19px] lg:justify-self-end">
                  Step inside Shanti EyeTech - every space is designed to put patients at
                  ease, from arrival to recovery.
                </p>
              </StaggerItem>
            </StaggerGroup>

            <StaggerGroup className="grid gap-3 sm:gap-4 lg:grid-cols-12" stagger={0.08} amount={0.2} distance={20}>
              {FACILITY_TILES.map((tile) => (
                <StaggerItem key={tile.title} className={tile.className}>
                  <FacilityTile
                    title={tile.title}
                    image={tile.image}
                    className="h-full"
                    objectPosition={tile.objectPosition}
                  />
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>

        <section id="doctor" className="bg-[#eef3f8] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
          <div className="mx-auto w-full max-w-[1280px]">
            <InViewFade className="rounded-[34px] border border-[#d7e2f0] bg-[#edf3ff] p-5 shadow-[0_18px_40px_rgba(43,71,116,0.10)] sm:p-7 lg:p-10" distance={28}>
              <div className="grid gap-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:items-center xl:grid-cols-[400px_minmax(0,1fr)] xl:gap-14">
                <div className="relative self-start lg:self-center">
                  <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-[28px] border-4 border-white bg-[#dce7f4] shadow-[0_22px_50px_rgba(43,71,116,0.18)]">
                    <Image
                      src="/doctor.jpg"
                      alt="Dr. Amit N. Solanki"
                      fill
                      sizes="(max-width: 1024px) 100vw, 380px"
                      className="object-cover object-[center_35%]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(8,58,124,0.08)_100%)]" />
                  </div>

                  <div className="absolute -bottom-5 right-4 flex h-28 w-28 items-center justify-center rounded-full bg-[#0f8a57] px-4 text-center text-[11px] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_16px_30px_rgba(15,138,87,0.3)] sm:-bottom-6 sm:right-8 sm:h-32 sm:w-32 sm:text-[12px]">
                    <span className="leading-[1.3]">Since 2003</span>
                  </div>
                </div>

                <StaggerGroup className="w-full" stagger={0.08} distance={18} amount={0.25}>
                  <StaggerItem>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#1d5eb6]">
                      {DOCTOR_PROFILE.eyebrow}
                    </p>
                  </StaggerItem>

                  <StaggerItem>
                    <h2 className="mt-3 text-[42px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#16233a] sm:text-[52px] lg:text-[58px] xl:text-[62px]">
                      {DOCTOR_PROFILE.name}
                    </h2>
                  </StaggerItem>

                  <StaggerItem>
                    <p className="mt-3 max-w-[900px] text-[18px] italic leading-[1.5] text-[#1d5eb6] sm:text-[20px]">
                      {DOCTOR_PROFILE.subtitle}
                    </p>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="my-6 h-px bg-[#d9e3ef]" />
                  </StaggerItem>

                  <StaggerItem>
                    <p className="max-w-[860px] text-[17px] leading-[1.72] text-[#5f6b7f] sm:text-[18px]">
                      {DOCTOR_PROFILE.bio}
                    </p>
                  </StaggerItem>

                  <StaggerItem>
                    <StaggerGroup className="mt-8 grid gap-5 sm:grid-cols-2" stagger={0.08} distance={12} amount={0.35}>
                      {DOCTOR_PROFILE.highlights.map((item) => (
                        <StaggerItem key={item.label}>
                          <article className="rounded-[22px] border border-[#d8e4f1] bg-white/70 p-5 shadow-[0_10px_24px_rgba(43,71,116,0.08)]">
                            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#1d5eb6]">
                              {item.label}
                            </p>
                            <p className="mt-2 text-[16px] leading-[1.55] text-[#5f6b7f]">
                              {item.value}
                            </p>
                          </article>
                        </StaggerItem>
                      ))}
                    </StaggerGroup>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                      <a
                        href="tel:+919179191939"
                        className="inline-flex h-12 items-center gap-2 rounded-full bg-[#1d5eb6] px-6 text-[16px] font-semibold text-white shadow-[0_14px_28px_rgba(29,94,182,0.22)] transition hover:bg-[#164c94]"
                      >
                        <PhoneIcon />
                        <span>Call us</span>
                      </a>

                      <Link
                        href="#"
                        className="motion-link-underline inline-flex items-center gap-2 text-[18px] font-semibold text-[#1d5eb6] transition hover:text-[#164c94]"
                      >
                        <span>Book a consultation</span>
                        <ArrowRightIcon />
                      </Link>
                    </div>
                  </StaggerItem>
                </StaggerGroup>
              </div>
            </InViewFade>
          </div>
        </section>

        <ServicesSection />

        <WhyChooseAwardsSection />

        <section id="testimonials">
          <TestimonialsFooterSection />
        </section>
      </main>
    </div>
  );
}
