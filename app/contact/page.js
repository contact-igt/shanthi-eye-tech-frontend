import SiteHeader from "../components/site-header";
import TestimonialsFooterSection from "../components/testimonials-footer-section";
import ContactForm from "../components/contact-form";
import ContactMap from "../components/contact-map";

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-6.4 7-11.4A7 7 0 1 0 5 9.6C5 14.6 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M6.3 4.8c.3-.7 1-.9 1.7-.7l2.4.8c.7.2 1.1.9.9 1.6L10.6 9c-.2.6-.8 1-1.5.9l-1.4-.2a15.3 15.3 0 0 0 6.6 6.6l-.2-1.4c-.1-.7.3-1.3.9-1.5l2.5-.7c.7-.2 1.4.2 1.6.9l.8 2.4c.2.7 0 1.4-.7 1.7l-1.8.8a4.4 4.4 0 0 1-4-.2 19.5 19.5 0 0 1-8.6-8.6 4.4 4.4 0 0 1-.2-4l.7-1.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M4.2 7.8A2.8 2.8 0 0 1 7 5h10a2.8 2.8 0 0 1 2.8 2.8v8.4A2.8 2.8 0 0 1 17 19H7a2.8 2.8 0 0 1-2.8-2.8V7.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="m5.5 8.8 6.5 4.8 6.5-4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#eef2f8] text-[#0c3f86]">
      <SiteHeader />

      <main>
        <section className="bg-gradient-to-r from-[#0e4aa2] to-[#236dc5] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-[1280px]">
            <p className="text-[12px] font-semibold text-[#53e4bb] sm:text-[14px]">Home › Contact Us</p>
            <h1 className="mt-7 text-[56px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[66px] lg:text-[76px]">
              Contact Shanti EyeTech
            </h1>
            <p className="mt-8 max-w-[920px] text-[19px] leading-[1.6] text-[#c2d7f5] sm:text-[20px]">
              Book your appointment or reach out to us for eye-care assistance - our team responds within the hour during clinic times.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-10">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#24935e]">Get In Touch</p>
                <h2 className="mt-4 text-[44px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#0f4698] sm:text-[52px]">
                  Three ways to reach us.
                </h2>
              </div>
              <div className="hidden lg:block" aria-hidden="true" />
            </div>

            <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
              <div>
                <div className="space-y-4">
                  <article className="flex gap-4 rounded-[22px] border border-[#d9e3f2] bg-white px-6 py-6 shadow-[0_10px_24px_rgba(33,72,128,0.06)]">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8f1ff] text-[#1d5eb6]">
                      <LocationIcon />
                    </span>
                    <div>
                      <h3 className="text-[34px] font-semibold text-[#0f4698]">Visit Us</h3>
                      <p className="mt-2 text-[16px] leading-[1.65] text-[#5f7291]">
                        Shekhar Central, M1 &amp; M2,
                        <br />
                        Palasia Square, Manorama Ganj,
                        <br />
                        Indore, Madhya Pradesh 452001
                      </p>
                    </div>
                  </article>

                  <article className="flex gap-4 rounded-[22px] border border-[#d9e3f2] bg-white px-6 py-6 shadow-[0_10px_24px_rgba(33,72,128,0.06)]">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8f1ff] text-[#1d5eb6]">
                      <PhoneIcon />
                    </span>
                    <div>
                      <h3 className="text-[34px] font-semibold text-[#0f4698]">Call Us</h3>
                      <p className="mt-2 text-[16px] leading-[1.65] text-[#5f7291]">
                        9179 19 1939
                        <br />
                        0731-4291939
                        <br />
                        Mon-Sat - 10 AM - 7 PM
                      </p>
                    </div>
                  </article>

                  <article className="flex gap-4 rounded-[22px] border border-[#d9e3f2] bg-white px-6 py-6 shadow-[0_10px_24px_rgba(33,72,128,0.06)]">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8f1ff] text-[#1d5eb6]">
                      <MailIcon />
                    </span>
                    <div>
                      <h3 className="text-[34px] font-semibold text-[#0f4698]">Email Us</h3>
                      <p className="mt-2 text-[16px] leading-[1.65] text-[#5f7291]">
                        info@shantieyetech.com
                        <br />
                        For appointments, queries and feedback
                      </p>
                    </div>
                  </article>

                  <ContactMap />
                </div>
              </div>

              <div className="rounded-[30px] border border-[#d8e3f3] bg-white p-7 shadow-[0_16px_38px_rgba(33,72,128,0.08)] sm:p-8 lg:p-10">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#24935e]">Book Appointment</p>
                <h3 className="mt-4 text-[46px] font-semibold leading-tight text-[#0f4698] sm:text-[52px]">
                  Request an appointment.
                </h3>
                <p className="mt-3 text-[17px] text-[#6c809d]">We&apos;ll confirm via call or WhatsApp within the hour.</p>

                <div className="mt-7">
                  <ContactForm />
                </div>
                <p className="mt-5 text-center text-[12px] text-[#9aa9be]">
                  By submitting, you agree to be contacted by our team.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <TestimonialsFooterSection showTestimonials={false} />
    </div>
  );
}
