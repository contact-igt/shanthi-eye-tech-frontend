"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { StaggerGroup, StaggerItem } from "./animations/motion-system";

const services = [
  {
    title: "Cataract Services",
    description: "Clearer vision with advanced cataract evaluation and surgical care.",
    icon: "cataract",
    featured: true,
  },
  {
    title: "Glaucoma Services",
    description: "Early diagnosis and long-term management to protect your vision.",
    icon: "glaucoma",
  },
  {
    title: "Freedom From Glasses",
    description: "Advanced LASIK and vision correction for suitable candidates.",
    icon: "glasses",
  },
  {
    title: "Keratoconus Care",
    description: "Specialised diagnosis for corneal thinning and distorted vision.",
    icon: "cornea",
  },
  {
    title: "Retina Services",
    description: "Diagnosis and care for retinal conditions affecting vision.",
    icon: "retina",
  },
  {
    title: "Pediatric Eye Care",
    description: "Gentle, careful eye care for children's vision development.",
    icon: "pediatric",
  },
  {
    title: "Opticals",
    description: "Quality eyewear, lens fitting and frame selection support.",
    icon: "opticals",
  },
  {
    title: "Pharmacy",
    description: "In-house pharmacy for continuity of eye-care prescriptions.",
    icon: "pharmacy",
  },
];

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

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ "--mx": mouse.x, "--my": mouse.y }}
      whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "motion-card-soft group relative overflow-hidden rounded-[18px] border p-6",
        featured
          ? "border-[#0f4a98] bg-[#0f4a98] text-white"
          : "border-[#d7e1ee] bg-white text-[#19468f] hover:border-[#9fc1ea]",
      ].join(" ")}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: featured
            ? "radial-gradient(220px circle at var(--mx) var(--my), rgba(110,178,255,0.25), rgba(17,77,154,0) 65%)"
            : "radial-gradient(220px circle at var(--mx) var(--my), rgba(29,116,201,0.22), rgba(29,116,201,0) 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { rotate: [0, -4, 2, 0], scale: 1.08 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={[
            "flex h-10 w-10 items-center justify-center rounded-xl",
            featured ? "bg-[#1a62b5]" : "bg-[#e7f4ee]",
          ].join(" ")}
        >
          <ServiceIcon icon={icon} featured={featured} />
        </motion.div>

        <h3 className={["mt-4 text-[33px] font-semibold leading-tight", featured ? "text-white" : "text-[#164995]"].join(" ")}>
          {title}
        </h3>

        <p
          className={[
            "mt-3 text-[19px] leading-[1.45]",
            featured ? "text-[#c8daf2]" : "text-[#7186a5]",
          ].join(" ")}
        >
          {description}
        </p>

        <Link
          href="#"
          className={[
            "motion-link-underline mt-5 inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.08em]",
            featured ? "text-[#63efba]" : "text-[#35b271]",
          ].join(" ")}
        >
          <span>Read More</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.article>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-[#eef3f8] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
      <div className="mx-auto w-full max-w-[1280px]">
        <StaggerGroup className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end" stagger={0.12} distance={24}>
          <StaggerItem>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#2ca56f]">
                Our Services
              </p>
              <h2 className="mt-4 max-w-[720px] text-[48px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#0f4698] sm:text-[58px] lg:text-[64px]">
                Comprehensive eye care
                <br />
                under one roof.
              </h2>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p className="max-w-[610px] text-[18px] leading-[1.5] text-[#7e91ae] sm:text-[19px] lg:justify-self-end">
              From routine concerns to advanced surgical care, Shanti EyeTech offers
              specialised treatment across the major areas of ophthalmology.
            </p>
          </StaggerItem>
        </StaggerGroup>

        <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" stagger={0.08} distance={18} amount={0.2}>
          {services.map((service) => (
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
