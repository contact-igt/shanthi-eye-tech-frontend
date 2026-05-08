"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const defaultEase = [0.22, 1, 0.36, 1];

export function InViewFade({
  children,
  className,
  delay = 0,
  duration = 0.82,
  distance = 30,
  scale = 0.985,
  amount = 0.25,
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: defaultEase }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  delay = 0,
  stagger = 0.1,
  amount = 0.2,
  distance = 24,
  duration = 0.72,
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, distance = 24, duration = 0.72 }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: distance,
          scale: 0.985,
        },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration,
            ease: defaultEase,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function CountUpNumber({
  value,
  className,
  duration = 1.4,
  decimals = 0,
  prefix = "",
  suffix = "",
}) {
  const ref = useRef(null);
  const animationRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      return;
    }

    const start = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(tick);
      }
    };

    animationRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, duration, isInView, shouldReduceMotion]);

  const effectiveDisplay = shouldReduceMotion ? value : display;
  const formatted =
    decimals > 0
      ? effectiveDisplay.toFixed(decimals)
      : String(Math.round(effectiveDisplay));

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
