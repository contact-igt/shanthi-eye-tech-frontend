import Image from "next/image";
import { InViewFade, StaggerGroup, StaggerItem } from "./animations/motion-system";

const trustReasons = [
  {
    id: "01",
    title: "Doctor-led eye care",
    description: "Every consultation handled by an experienced ophthalmologist.",
  },
  {
    id: "02",
    title: "Advanced technology",
    description: "Modern diagnostic and surgical equipment.",
  },
  {
    id: "03",
    title: "Patient-friendly environment",
    description: "A calm, peaceful, reassuring space.",
  },
  {
    id: "04",
    title: "Personalised attention",
    description: "Treatment plans tailored to your case.",
  },
  {
    id: "05",
    title: "Affordable solutions",
    description: "Quality care at accessible rates.",
  },
  {
    id: "06",
    title: "Central Indore location",
    description: "Easily reachable from across the city.",
  },
  {
    id: "07",
    title: "Trained paramedical staff",
    description: "Qualified team supporting every step.",
  },
  {
    id: "08",
    title: "Comprehensive services",
    description: "All major eye care under one roof.",
  },
];

const awards = [
  {
    year: "2018",
    title: "Best Video Award",
    description:
      "Shree SadGuru Seva Sansthan - Managed Post LASIK Epithelial Ingrowth",
  },
  {
    year: "2017",
    title: "Memorial Award",
    description:
      "Dr. Ramesh Krishna Agarwal Award - M.P.SOS Annual Conference, Gwalior",
  },
  {
    year: "2016",
    title: "Best Poster Award",
    description: "M.P. State Ophthalmic Society Annual Conference, Bhopal",
  },
  {
    year: "2011",
    title: "Best Surgical Video",
    description: "Small vs Large Rhexis for Endocapsular Phaco - IDOS, Indore",
  },
  {
    year: "2011",
    title: "Best Glaucoma Paper",
    description: "Ophthalmology Tomorrow Annual Conference, IDOS, Indore",
  },
];

export default function WhyChooseAwardsSection() {
  return (
    <>
      <section className="bg-[#eef3f8] px-4 pb-16 pt-4 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto grid w-full max-w-[1280px] items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <InViewFade className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-[#d5dfec] bg-[#d8e3ef] sm:min-h-[390px] lg:min-h-[460px]" distance={28}>
            <Image
              src="/Trustus.jpeg"
              alt="Doctor consulting a patient"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-[center_45%]"
            />
          </InViewFade>

          <StaggerGroup className="" stagger={0.1} distance={20} amount={0.25}>
            <StaggerItem>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2ca56f]">
                Why Choose Us
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="mt-3 max-w-[620px] text-[48px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#0f4698] sm:text-[58px] lg:text-[62px]">
                Why patients trust
                <br />
                Shanti EyeTech.
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-3 max-w-[660px] text-[18px] leading-[1.5] text-[#7e91ae] sm:text-[19px]">
                Eight reasons why families across Indore choose us for their eye care.
              </p>
            </StaggerItem>

            <StaggerItem>
              <StaggerGroup className="mt-6 grid border-t border-[#d9e3ef] sm:grid-cols-2 sm:gap-x-8" stagger={0.08} distance={14} amount={0.2}>
                {trustReasons.map((item) => (
                  <StaggerItem key={item.id}>
                    <article
                      className="motion-card-soft flex gap-4 border-b border-[#d9e3ef] py-4 pr-3"
                    >
                      <p className="shrink-0 pt-1 text-[13px] font-semibold tracking-[0.08em] text-[#2ca56f]">
                        {item.id}
                      </p>
                      <div>
                        <h3 className="text-[22px] font-semibold leading-tight text-[#1f5dad]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-[16px] leading-[1.4] text-[#7c91af]">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-[#0d4798] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-[1280px]">
          <StaggerGroup className="" stagger={0.1} distance={20} amount={0.28}>
            <StaggerItem>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#66f0bd]">
                Awards & Recognition
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="mt-3 max-w-[760px] text-[48px] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-[58px] lg:text-[62px]">
                Recognised for excellence
                <br />
                in ophthalmology.
              </h2>
            </StaggerItem>

            <StaggerItem>
              <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5" stagger={0.08} distance={14} amount={0.2}>
                {awards.map((item, index) => (
                  <StaggerItem key={`${item.year}-${index}`}>
                    <article className="motion-card-soft max-w-[260px]">
                      <p className="text-[38px] font-bold leading-none tracking-[-0.03em] text-[#63f0bd]">
                        {item.year}
                      </p>
                      <h3 className="mt-2 text-[17px] font-semibold leading-tight text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] leading-[1.45] text-[#a9c2e6]">
                        {item.description}
                      </p>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
