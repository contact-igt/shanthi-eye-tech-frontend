export default function ContactMap() {
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=22.728396,75.887842";

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#d8e4f4] bg-white shadow-[0_12px_34px_rgba(31,72,126,0.08)]">
      <div className="relative aspect-[16/10] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3679.9958130848913!2d75.88784199999999!3d22.728396999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQzJzQyLjIiTiA3NcKwNTMnMTYuMiJF!5e0!3m2!1sen!2sin!4v1778247099112!5m2!1sen!2sin"
          title="Shanti EyeTech location map"
          className="absolute inset-0 h-full w-full border-0 grayscale-[0.35] saturate-[0.8]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div
          className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(223,244,236,0.44)_0_12px,rgba(233,247,242,0.44)_12px_24px)]"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1f69c7] text-white shadow-[0_10px_24px_rgba(31,105,199,0.35)]">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
              <path
                d="M12 21s7-6.4 7-11.4A7 7 0 1 0 5 9.6C5 14.6 12 21 12 21Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </span>
          <p className="mt-4 rounded-lg bg-white/88 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#3c6ea4]">
            Google Map Embed - Palasia Square
          </p>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex h-11 items-center rounded-full bg-white px-5 text-[14px] font-semibold text-[#1f69c7] shadow-[0_8px_20px_rgba(21,76,150,0.12)] transition hover:bg-[#f0f6ff]"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}
