"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { StaggerGroup, StaggerItem } from "./animations/motion-system";
import { SERVICES } from "../constants/services";

function ServiceIcon({ icon, featured }) {
  const iconColor = featured ? "text-[#7ce8bd]" : "text-[#2ca56f]";

  if (icon === "cataract") {
    return (
      <svg viewBox="0 0 24 24" className={`h-5 w-5 ${iconColor}`} fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="7.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (icon === "glaucoma") {
    return (
      <svg viewBox="0 0 24 24" className={`h-5 w-5 ${iconColor}`} fill="none" aria-hidden="true">
        <path d="M12 3.8 5.4 6.2V12c0 4.2 2.8 6.7 6.6 8.2 3.8-1.5 6.6-4 6.6-8.2V6.2L12 3.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "glasses") {
    return (
      <svg viewBox="0 0 24 24" className={`h-5 w-5 ${iconColor}`} fill="none" aria-hidden="true">
        <circle cx="8" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 12h2M4.8 11.2h.8m13.6 0h.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "cornea") {
    return (
      <svg viewBox="0 0 24 24" className={`h-5 w-5 ${iconColor}`} fill="none" aria-hidden="true">
        <path d="M2.8 12s3.1-4.7 9.2-4.7 9.2 4.7 9.2 4.7-3.1 4.7-9.2 4.7S2.8 12 2.8 12Z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="1.9" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (icon === "retina") {
    return (
      <svg viewBox="0 0 24 24" className={`h-5 w-5 ${iconColor}`} fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="6.3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 5.7v12.6M5.7 12h12.6M7.5 7.5l9 9M16.5 7.5l-9 9" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }

  if (icon === "pediatric") {
    return (
      <svg viewBox="0 0 24 24" className={`h-5 w-5 ${iconColor}`} fill="none" aria-hidden="true">
        <circle cx="12" cy="8.2" r="2.1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 10.7v8.1m0-5.2-2.8 2.8m2.8-2.8 2.8 2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "opticals") {
    return (
      <svg viewBox="0 0 24 24" className={`h-5 w-5 ${iconColor}`} fill="none" aria-hidden="true">
        <circle cx="8" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="12" r="2.8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10.8 12h2.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 ${iconColor}`} fill="none" aria-hidden="true">
      <rect x="5.2" y="5.2" width="13.6" height="13.6" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v8m-4-4h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ServiceCard({ title, description, icon, featured = false }) {
  const shouldReduceMotion = useReducedMotion();
  const [mouse, setMouse] = useState({ x: "50%", y: "50%" });
  const frameRef = useRef(null);

  const handleMouseMove = (event) => {
    if (shouldReduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      setMouse({ x: `${x}%`, y: `${y}%` });
    });
  };

  const handleMouseLeave = () => {
    setMouse({ x: "50%", y: "50%" });
  };

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const mxVal = parseFloat(mouse.x || "50%");
  const myVal = parseFloat(mouse.y || "50%");
  const rotateX = shouldReduceMotion ? 0 : (myVal - 50) / 6;
  const rotateY = shouldReduceMotion ? 0 : (mxVal - 50) / -6;
  const featuredTitle = featured ? "text-white" : "glass-title";
  const featuredDescription = featured ? "text-[#d9e7ff]" : "text-[#7186a5]";

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ "--mx": mouse.x, "--my": mouse.y }}
      animate={shouldReduceMotion ? undefined : { rotateX, rotateY }}
      whileHover={shouldReduceMotion ? undefined : { y: -10, scale: 1.015 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
      transition={{ type: "spring", stiffness: 80, damping: 18, mass: 1 }}
      className={[
        "motion-card-soft perspective group relative isolate h-full overflow-hidden rounded-[26px] border p-7 sm:p-8 lg:p-9",
        featured
          ? "border-[#0d4f9b] bg-[linear-gradient(180deg,#155ab2_0%,#0d458f_100%)] text-white shadow-[0_24px_50px_rgba(14,73,147,0.24)]"
          : "border-[#c5d8ec] glass-card text-[#1a4a8f] shadow-[0_16px_36px_rgba(53,86,123,0.06)] hover:border-[#afc5e0]",
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-100",
          featured ? "opacity-70" : "glass-highlight opacity-0 group-hover:opacity-100",
        ].join(" ")}
        style={{
          background: featured
            ? "radial-gradient(280px circle at var(--mx) var(--my), rgba(129,212,255,0.22), rgba(17,77,154,0) 60%)"
            : "radial-gradient(280px circle at var(--mx) var(--my), rgba(29,116,201,0.18), rgba(29,116,201,0) 62%)",
        }}
        aria-hidden="true"
      />

      <div
        className={[
          "pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110",
          featured ? "bg-white/20" : "bg-[#d4e7f8]/65",
        ].join(" ")}
        aria-hidden="true"
      />

      <div
        className={[
          "pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110",
          featured ? "bg-[#63f0bd]/14" : "bg-[#c8f4e4]/50",
        ].join(" ")}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col items-center text-center">
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { rotate: [0, -8, 4, 0], scale: 1.1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className={[
            "flex h-14 w-14 items-center justify-center rounded-[20px] ring-1 backdrop-blur-md transition-colors duration-400",
            featured
              ? "bg-white/14 ring-white/12"
              : "bg-[#e0f2ff]/80 ring-[#c5dcf0]",
          ].join(" ")}
        >
          <ServiceIcon icon={icon} featured={featured} />
        </motion.div>

        <h3 className={["mt-6 text-[24px] font-bold leading-[1.2] text-center sm:text-[26px]", featuredTitle].join(" ")}>
          {title}
        </h3>

        <p
          className={[
            "mt-4 max-w-[260px] text-[15px] leading-[1.6] text-center",
            featuredDescription,
          ].join(" ")}
        >
          {description}
        </p>

        <div className="mt-auto w-full pt-6">
          <div
            className={[
              "mx-auto h-1 w-14 rounded-full transition-all duration-500 group-hover:w-20",
              featured ? "bg-white/25" : "bg-[#b8d0e8] group-hover:bg-[#2575cf]/40",
            ].join(" ")}
            aria-hidden="true"
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function ServicesSection() {
  return (
    <section className="border-t border-[#d0e0f0] bg-[#f0f7ff] px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mx-auto max-w-[940px] text-center">
          <StaggerGroup className="space-y-5" stagger={0.1} distance={22} amount={0.25}>
            <StaggerItem>
              <p className="text-[13px] font-semibold uppercase tracking-[0.26em] text-[#2ca56f]">
                Our Services
              </p>
            </StaggerItem>

            <StaggerItem>
              <h2 className="mx-auto max-w-[800px] text-[46px] font-bold leading-[1.05] tracking-[-0.02em] text-[#0c4a9e] sm:text-[54px] lg:text-[62px]">
                Comprehensive eye care
                <br />
                under one roof
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="mx-auto max-w-[900px] text-[17px] leading-[1.62] text-[#5f7895] sm:text-[18px] lg:text-[19px]">
                From routine concerns to advanced surgical care, Shanti EyeTech offers specialised treatment across the major areas of ophthalmology.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-[#2ca56f]/50 to-transparent" />
            </StaggerItem>
          </StaggerGroup>
        </div>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 items-stretch" stagger={0.08} distance={18} amount={0.2}>
          {SERVICES.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                featured={service.featured}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
