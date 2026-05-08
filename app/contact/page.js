import SiteHeader from "../components/site-header";
import TestimonialsFooterSection from "../components/testimonials-footer-section";
import ContactForm from "../components/contact-form";
import ContactMap from "../components/contact-map";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f4f8ff] text-[#0c3f86]">
      <SiteHeader />

      <main className="px-4 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10">
            <h1 className="text-[40px] font-semibold text-[#0f4698]">Contact Shanti EyeTech</h1>
            <p className="mt-2 text-[16px] text-[#6c809d]">Book your appointment or reach out to us for eye-care assistance — our team responds within the hour during clinic times.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-[#dde5ef] bg-white px-6 py-6">
                  <h3 className="text-[16px] font-semibold text-[#0f4698]">Visit Us</h3>
                  <p className="mt-2 text-[15px] text-[#6c809d]">Shekhar Central, M1 &amp; M2, Palasia Square, Manorama Ganj, Indore, Madhya Pradesh 452001</p>
                </div>

                <div className="rounded-2xl border border-[#dde5ef] bg-white px-6 py-6">
                  <h3 className="text-[16px] font-semibold text-[#0f4698]">Call Us</h3>
                  <p className="mt-2 text-[15px] text-[#6c809d]">9179 19 1939 · 0731-4291939</p>
                </div>

                <div className="rounded-2xl border border-[#dde5ef] bg-white px-6 py-6">
                  <h3 className="text-[16px] font-semibold text-[#0f4698]">Email Us</h3>
                  <p className="mt-2 text-[15px] text-[#6c809d]">info@shantieyetech.com</p>
                </div>

                <ContactMap />
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-[#dde5ef] bg-white p-8">
                <h3 className="text-[20px] font-semibold text-[#0f4698]">Request an appointment.</h3>
                <p className="mt-2 text-[14px] text-[#6c809d]">We'll confirm via call or WhatsApp within the hour.</p>

                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <TestimonialsFooterSection />
    </div>
  );
}
