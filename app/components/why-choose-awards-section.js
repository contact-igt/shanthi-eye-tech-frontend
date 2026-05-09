import Image from "next/image";
import { InViewFade, StaggerGroup, StaggerItem } from "./animations/motion-system";
import { TRUST_REASONS, AWARDS } from "../constants/awards";

export default function WhyChooseAwardsSection() {
  return (
    <>
      <section className="bg-[#dfe9ff] px-4 pb-24 pt-8 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <InViewFade className="relative min-h-[440px] overflow-hidden rounded-[26px] border border-[#c5dff0] bg-[#e0f0ff] shadow-[0_20px_48px_rgba(53,86,123,0.12)] sm:min-h-[560px] lg:min-h-[680px]" distance={28}>
            <Image
              src="/Trustus.jpeg"
              alt="Doctor consulting a patient"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-center"
            />
          </InViewFade>

          <StaggerGroup className="" stagger={0.1} distance={20} amount={0.25}>
            <StaggerItem>
              <p className="text-[13px] font-bold uppercase tracking-[0.28em] text-[#2ca56f]">
                Why Choose Us
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="mt-4 max-w-[700px] text-[46px] font-bold leading-[1.08] tracking-[-0.02em] text-[#0c4a9e] sm:text-[56px] lg:text-[64px]">
                Why patients trust
                <br />
                Shanti EyeTech.
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-4 max-w-[700px] text-[17px] leading-[1.62] text-[#5f7a95] sm:text-[18px] lg:text-[19px]">
                Eight reasons why families across Indore choose us for their eye care.
              </p>
            </StaggerItem>

            <StaggerItem>
              <StaggerGroup className="mt-8 grid gap-y-5 border-t border-[#bdd5f0] pt-6 sm:grid-cols-2 sm:gap-x-7" stagger={0.08} distance={14} amount={0.2}>
                {TRUST_REASONS.map((item) => (
                  <StaggerItem key={item.id}>
                    <article
                      className="group flex gap-5 rounded-[18px] border-2 border-[#b8d5e8] bg-white/70 p-5 transition-all duration-400 hover:bg-[#e0f4ff] hover:border-[#6ba3d8] hover:shadow-[0_12px_32px_rgba(33,150,243,0.15)]"
                    >
                      <p className="shrink-0 text-[16px] font-bold tracking-wider text-[#0d9e83]">
                        {item.id}
                      </p>
                      <div className="flex-1">
                        <h3 className="text-[20px] font-bold leading-[1.25] text-[#0c5aa8] transition-colors duration-300 group-hover:text-[#0847a8]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-[1.6] text-[#5f7a95] transition-colors duration-300 group-hover:text-[#4a6a8a]">
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

      <section className="bg-white px-4 py-18 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px]">
          <StaggerGroup className="text-center" stagger={0.1} distance={20} amount={0.28}>
            <StaggerItem>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2ca56f]">
                Awards & Recognition
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 className="mt-3 text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-[#16233a] sm:text-[56px] lg:text-[62px]">
                A Legacy of <span className="text-[#175db8]">Recognition</span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mx-auto mt-5 max-w-[760px] text-[18px] leading-[1.5] text-[#616a7b] sm:text-[19px]">
                Continuous excellence in ophthalmic innovation and patient service.
              </p>
            </StaggerItem>
          </StaggerGroup>

          <div className="relative mt-14">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[#dde6f2]" aria-hidden="true" />

            <ul className="space-y-12 lg:space-y-16">
              {AWARDS.map((item, index) => {
                const leftAligned = index % 2 === 0;
                const dotColor = index % 3 === 0 ? "#175db8" : index % 3 === 1 ? "#0f8a57" : "#5d6b7c";

                return (
                  <StaggerItem key={`${item.year}-${index}`}>
                    <li className="relative">
                      <div className="lg:hidden flex items-start gap-4">
                        <div className="flex-shrink-0 pt-1">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(31,79,138,0.12)] ring-1 ring-[#dce6f2]">
                            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: dotColor }} />
                          </span>
                        </div>
                        <div>
                          <p className="text-[14px] font-semibold text-[#c7d3e1]">{item.year}</p>
                          <h3 className="mt-1 text-[18px] font-semibold leading-tight text-[#1a273a]">{item.title}</h3>
                          <p className="mt-2 max-w-[520px] text-[15px] leading-[1.55] text-[#667085]">{item.description}</p>
                        </div>
                      </div>

                      <div className="hidden lg:grid lg:grid-cols-[1fr_96px_1fr] lg:items-center">
                        {leftAligned ? (
                          <div className="pr-10 text-right">
                            <div className="inline-block max-w-[520px]">
                              <h3 className="text-[24px] font-semibold leading-tight text-[#1a273a]">{item.title}</h3>
                              <p className="mt-2 text-[16px] leading-[1.55] text-[#667085]">{item.description}</p>
                            </div>
                          </div>
                        ) : (
                          <div className="pr-10 text-right">
                            <span className="text-[54px] font-semibold leading-none tracking-[-0.04em] text-[#d5dee9]">
                              {item.year}
                            </span>
                          </div>
                        )}

                        <div className="relative flex justify-center">
                          <span className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-[#dde6f2]" aria-hidden="true" />
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_10px_24px_rgba(31,79,138,0.12)] ring-1 ring-[#dce6f2]">
                            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: dotColor }} />
                          </span>
                        </div>

                        {leftAligned ? (
                          <div className="pl-10 text-left">
                            <span className="text-[54px] font-semibold leading-none tracking-[-0.04em] text-[#d5dee9]">
                              {item.year}
                            </span>
                          </div>
                        ) : (
                          <div className="pl-10 text-left">
                            <div className="inline-block max-w-[520px]">
                              <h3 className="text-[24px] font-semibold leading-tight text-[#1a273a]">{item.title}</h3>
                              <p className="mt-2 text-[16px] leading-[1.55] text-[#667085]">{item.description}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  </StaggerItem>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
