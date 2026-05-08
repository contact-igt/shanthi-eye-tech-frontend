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
        <span className="text-sm font-semibold text-[#0f4698]">Full name</span>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-2 w-full rounded-lg border border-[#dbe6f7] px-3 py-2"
        />
      </label>

      <label className="block">
        <span className="text-sm font-semibold text-[#0f4698]">Phone number</span>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="mt-2 w-full rounded-lg border border-[#dbe6f7] px-3 py-2"
        />
      </label>

      <label className="block">
        <span className="text-sm font-semibold text-[#0f4698]">Email address</span>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="mt-2 w-full rounded-lg border border-[#dbe6f7] px-3 py-2"
        />
      </label>

      <div className="grid grid-cols-2 gap-3">
        <label className="block">
          <span className="text-sm font-semibold text-[#0f4698]">Service</span>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-[#dbe6f7] px-3 py-2"
          >
            <option>Cataract Services</option>
            <option>Glaucoma Care</option>
            <option>LASIK / Refractive</option>
            <option>Retina Services</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-[#0f4698]">Preferred date</span>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border border-[#dbe6f7] px-3 py-2"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-semibold text-[#0f4698]">Message (optional)</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="mt-2 w-full rounded-lg border border-[#dbe6f7] px-3 py-2"
        />
      </label>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-full bg-[#2acb7c] px-5 py-3 text-white font-semibold hover:bg-[#1db66d] disabled:opacity-60"
        >
          {loading ? "Sending…" : "Request appointment"}
        </button>
      </div>

      {status && (
        <p className={status.ok ? "text-sm text-green-200" : "text-sm text-red-200"} role="status">
          {status.message}
        </p>
      )}
    </form>
  );
}
