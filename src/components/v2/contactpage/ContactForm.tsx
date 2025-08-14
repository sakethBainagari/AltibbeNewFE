import React, { useState } from "react";

const countries = ["UAE", "USA", "KSA", "India", "Other"];
const interests = [
  "Government Collaboration",
  "Producer Solutions",
  "Retail & Consumer",
  "Media & Press",
  "Other"
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    role: "",
    email: "",
    phone: "",
    country: "UAE",
    interest: "Government Collaboration",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<any>({});

  function validate() {
    const newErrors: any = {};
    if (!form.name) newErrors.name = "Required";
    if (!form.organization) newErrors.organization = "Required";
    if (!form.role) newErrors.role = "Required";
    if (!form.email) newErrors.email = "Required";
    if (!form.message) newErrors.message = "Required";
    return newErrors;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({
        name: "",
        organization: "",
        role: "",
        email: "",
        phone: "",
        country: "UAE",
        interest: "Government Collaboration",
        message: ""
      });
    }
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-32 bg-white rounded-xl shadow-lg text-center mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Tell Us About Your Needs</h2>
      <form className="max-w-2xl mx-auto grid gap-6 text-left" onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold mb-1">Full Name *</label>
          <input name="name" value={form.name} onChange={handleChange} className={`w-full border rounded px-4 py-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`} required />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        <div>
          <label className="block font-semibold mb-1">Organization / Institution *</label>
          <input name="organization" value={form.organization} onChange={handleChange} className={`w-full border rounded px-4 py-2 ${errors.organization ? 'border-red-500' : 'border-gray-300'}`} required />
          {errors.organization && <span className="text-red-500 text-sm">{errors.organization}</span>}
        </div>
        <div>
          <label className="block font-semibold mb-1">Role / Position *</label>
          <input name="role" value={form.role} onChange={handleChange} className={`w-full border rounded px-4 py-2 ${errors.role ? 'border-red-500' : 'border-gray-300'}`} required />
          {errors.role && <span className="text-red-500 text-sm">{errors.role}</span>}
        </div>
        <div>
          <label className="block font-semibold mb-1">Email *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className={`w-full border rounded px-4 py-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} required />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} className="w-full border rounded px-4 py-2 border-gray-300" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Country / Region</label>
          <select name="country" value={form.country} onChange={handleChange} className="w-full border rounded px-4 py-2 border-gray-300">
            {countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Area of Interest</label>
          <select name="interest" value={form.interest} onChange={handleChange} className="w-full border rounded px-4 py-2 border-gray-300">
            {interests.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Message *</label>
          <textarea name="message" value={form.message} onChange={handleChange} className={`w-full border rounded px-4 py-2 ${errors.message ? 'border-red-500' : 'border-gray-300'}`} rows={4} required />
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>
        <button type="submit" className="w-full py-3 rounded-lg font-bold text-white bg-green-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-500 transition-all duration-200 shadow-lg text-lg">
          Send Inquiry
        </button>
        {submitted && (
          <div className="text-green-700 font-semibold text-center mt-4 animate-fade-in">
            Thank you for reaching out. Our team will respond within 2 business days.
          </div>
        )}
      </form>
    </section>
  );
}
