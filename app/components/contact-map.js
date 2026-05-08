export default function ContactMap() {
  return (
    <div className="rounded-2xl overflow-hidden border border-[#dbe5f5] bg-white p-3">
      <div className="aspect-[16/9] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3679.9958130848913!2d75.88784199999999!3d22.728396999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQzJzQyLjIiTiA3NcKwNTMnMTYuMiJF!5e0!3m2!1sen!2sin!4v1778247099112!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
