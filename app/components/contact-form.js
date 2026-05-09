"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Cataract Services",
    date: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json?.error || "Submission failed");
      }

      setStatus({ ok: true, message: "Request submitted — we will contact you soon." });
      setForm({ name: "", phone: "", email: "", service: "Cataract Services", date: "", message: "" });
    } catch (err) {
      setStatus({ ok: false, message: err.message || "Unexpected error" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#244a82]">Full Name</span>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="mt-2 h-12 w-full rounded-xl border border-[#d6e2f2] bg-[#f3f7fc] px-4 text-[15px] text-[#23426f] outline-none transition focus:border-[#5c8fd2] focus:ring-2 focus:ring-[#a6c4ea]/50"
        />
      </label>

      <label className="block">
        <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#244a82]">Phone Number</span>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          placeholder="+91 9XXXXXXXXX"
          className="mt-2 h-12 w-full rounded-xl border border-[#d6e2f2] bg-[#f3f7fc] px-4 text-[15px] text-[#23426f] outline-none transition focus:border-[#5c8fd2] focus:ring-2 focus:ring-[#a6c4ea]/50"
        />
      </label>

      <label className="block">
        <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#244a82]">Email</span>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="mt-2 h-12 w-full rounded-xl border border-[#d6e2f2] bg-[#f3f7fc] px-4 text-[15px] text-[#23426f] outline-none transition focus:border-[#5c8fd2] focus:ring-2 focus:ring-[#a6c4ea]/50"
        />
      </label>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#244a82]">Service</span>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="mt-2 h-12 w-full rounded-xl border border-[#d6e2f2] bg-[#f3f7fc] px-4 text-[15px] text-[#23426f] outline-none transition focus:border-[#5c8fd2] focus:ring-2 focus:ring-[#a6c4ea]/50"
          >
            <option>Cataract Services</option>
            <option>Glaucoma Care</option>
            <option>LASIK / Refractive</option>
            <option>Retina Services</option>
          </select>
        </label>

        <label className="block">
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#244a82]">Preferred Date</span>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="mt-2 h-12 w-full rounded-xl border border-[#d6e2f2] bg-[#f3f7fc] px-4 text-[15px] text-[#23426f] outline-none transition focus:border-[#5c8fd2] focus:ring-2 focus:ring-[#a6c4ea]/50"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#244a82]">Message (Optional)</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your concern..."
          className="mt-2 w-full rounded-xl border border-[#d6e2f2] bg-[#f3f7fc] px-4 py-3 text-[15px] text-[#23426f] outline-none transition focus:border-[#5c8fd2] focus:ring-2 focus:ring-[#a6c4ea]/50"
        />
      </label>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#1f63cc] px-5 text-[15px] font-semibold text-white transition hover:bg-[#1652ac] disabled:opacity-60"
        >
          {loading ? "Sending..." : "Request Appointment"}
        </button>
      </div>

      {status && (
        <p className={status.ok ? "text-sm text-[#178954]" : "text-sm text-[#c44747]"} role="status">
          {status.message}
        </p>
      )}
    </form>
  );
}
