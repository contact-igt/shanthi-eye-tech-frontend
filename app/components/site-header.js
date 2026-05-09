"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "../constants/navigation";

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

const NAV_HREFS = {
  Home: "/",
  "About Us": "/about",
  "Know Your Doctor": "/#doctor",
  Services: "/#services",
  Awards: "/#awards",
  Testimonials: "/#testimonials",
  Contact: "/contact",
};

function getHref(item) {
  return NAV_HREFS[item] ?? "#";
}

function getActiveLabel(pathname, hash) {
  if (pathname === "/about") return "About Us";
  if (pathname === "/contact") return "Contact";

  if (pathname !== "/") {
    return null;
  }

  if (hash === "#doctor") return "Know Your Doctor";
  if (hash === "#services") return "Services";
  if (hash === "#awards") return "Awards";
  if (hash === "#testimonials") return "Testimonials";

  return "Home";
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);

    updateHash();
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, [pathname]);

  const activeLabel = getActiveLabel(pathname, hash);

  return (
    <header>
      <div className="bg-[#0b4ca0] text-white">
        <div className="mx-auto flex h-10 max-w-[1280px] items-center justify-between gap-3 px-4 text-[11px] font-medium sm:h-11 sm:text-[13px]">
          <div className="hidden items-center gap-2 text-white/92 md:flex">
            <LocationIcon />
            <span>Shekhar Central, Palasia Square, Indore</span>
          </div>

          <div className="flex items-center gap-2 text-white/92">
            <ClockIcon />
            <span>Mon-Sat · 10:00 AM - 7:00 PM</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-5">
            <div className="hidden items-center gap-2 text-white/92 lg:flex">
              <MailIcon />
              <span>info@shantieyetech.com</span>
            </div>
            <div className="flex items-center gap-2 text-[#4bf4b8]">
              <PhoneIcon />
              <span className="font-semibold">9179191939 / 0731-4291939</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-[#dbe7f9] bg-white">
        <div className="mx-auto flex min-h-20 max-w-[1280px] items-center gap-4 px-4 py-3 lg:min-h-24">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/favicon.png"
              alt="Shanti EyeTech logo"
              width={200}
              height={80}
              className="h-auto w-auto max-w-[150px] sm:max-w-[180px] lg:max-w-[200px]"
              priority
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-1.5 xl:flex xl:flex-nowrap">
            {NAV_ITEMS.map((item) => {
              const active = activeLabel === item;
              const href = getHref(item);

              return (
                <Link
                  key={item}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "relative shrink-0 overflow-hidden whitespace-nowrap rounded-full px-3.5 py-2 text-[15px] font-semibold leading-none transition-colors duration-300",
                    active
                      ? "text-[#2b6ec8]"
                      : "text-[#46658f] hover:text-[#1f5cb7]",
                  ].join(" ")}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-[#eaf2ff] shadow-[0_10px_24px_rgba(43,110,200,0.12)] ring-1 ring-[#d9e6f7]"
                      transition={{ type: "spring", stiffness: 520, damping: 34 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item}</span>
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center">
            <a
              href="tel:+919179191939"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[#2d6ec7] bg-white px-6 text-[16px] font-semibold text-[#2b6ec8] transition hover:bg-[#ecf3ff]"
            >
              <PhoneIcon />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
