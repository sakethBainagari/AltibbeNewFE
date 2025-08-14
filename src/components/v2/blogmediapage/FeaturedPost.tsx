// src/components/v2/blogmediapage/FeaturedPost.tsx
import React from "react";

export default function FeaturedPost() {
  return (
    <section className="mb-16">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="High-level government meeting room with Hedamo branding"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-800 mb-4">
            UAE and Altibbe Announce Joint Transparency Pilot
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Altibbe, through its Hedamo system, has partnered with leading UAE trade authorities to launch a national pilot for AI-powered product transparency. The initiative is designed to align seamlessly with CEPA objectives and Vision 2030 priorities, positioning the UAE as a global benchmark for digital trade trust.
          </p>
        </div>
      </div>
    </section>
  );
}
