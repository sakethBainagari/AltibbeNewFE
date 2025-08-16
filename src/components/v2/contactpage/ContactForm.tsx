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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const inputClasses = (fieldName: string, hasError: boolean) => {
    const baseClasses = "w-full px-4 py-3 text-base border-2 rounded-lg transition-all duration-300 ease-in-out bg-white font-medium";
    const focusClasses = "focus:outline-none focus:ring-0";
    
    if (hasError) {
      return `${baseClasses} ${focusClasses} border-red-400 focus:border-red-500 shadow-sm focus:shadow-md`;
    }
    
    if (focusedField === fieldName) {
      return `${baseClasses} ${focusClasses} border-green-400 shadow-md ring-4 ring-green-100`;
    }
    
    return `${baseClasses} ${focusClasses} border-gray-300 hover:border-green-300 focus:border-green-400 focus:shadow-md focus:ring-4 focus:ring-green-100`;
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-32 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-2xl text-center mt-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-600 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-400 rounded-full translate-x-24 translate-y-24"></div>
      </div>
      
      <div className="relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">Tell Us About Your Needs</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto text-left">
          <div className="grid gap-8 md:gap-10">
            {/* Row 1: Name and Organization */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide uppercase">
                  Full Name <span className="text-red-500 ml-1">*</span>
                </label>
                <input 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('name', !!errors.name)}
                  placeholder="Enter your full name"
                  required 
                />
                {errors.name && <span className="text-red-500 text-sm mt-2 block font-medium animate-pulse">{errors.name}</span>}
              </div>
              
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide uppercase">
                  Organization / Institution <span className="text-red-500 ml-1">*</span>
                </label>
                <input 
                  name="organization" 
                  value={form.organization} 
                  onChange={handleChange}
                  onFocus={() => setFocusedField('organization')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('organization', !!errors.organization)}
                  placeholder="Company or institution name"
                  required 
                />
                {errors.organization && <span className="text-red-500 text-sm mt-2 block font-medium animate-pulse">{errors.organization}</span>}
              </div>
            </div>

            {/* Row 2: Role and Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide uppercase">
                  Role / Position <span className="text-red-500 ml-1">*</span>
                </label>
                <input 
                  name="role" 
                  value={form.role} 
                  onChange={handleChange}
                  onFocus={() => setFocusedField('role')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('role', !!errors.role)}
                  placeholder="Your job title or position"
                  required 
                />
                {errors.role && <span className="text-red-500 text-sm mt-2 block font-medium animate-pulse">{errors.role}</span>}
              </div>

              <div className="group">
                <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide uppercase">
                  Email <span className="text-red-500 ml-1">*</span>
                </label>
                <input 
                  name="email" 
                  type="email" 
                  value={form.email} 
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('email', !!errors.email)}
                  placeholder="your.email@company.com"
                  required 
                />
                {errors.email && <span className="text-red-500 text-sm mt-2 block font-medium animate-pulse">{errors.email}</span>}
              </div>
            </div>

            {/* Row 3: Phone and Country */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide uppercase">Phone</label>
                <input 
                  name="phone" 
                  type="tel" 
                  value={form.phone} 
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses('phone', false)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="group">
                <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide uppercase">Country / Region</label>
                <div className="relative">
                  <select 
                    name="country" 
                    value={form.country} 
                    onChange={handleChange}
                    onFocus={() => setFocusedField('country')}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputClasses('country', false)} pr-10 appearance-none`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 12px center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '16px'
                    }}
                  >
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Interest */}
            <div className="group">
              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide uppercase">Area of Interest</label>
              <div className="relative">
                <select 
                  name="interest" 
                  value={form.interest} 
                  onChange={handleChange}
                  onFocus={() => setFocusedField('interest')}
                  onBlur={() => setFocusedField(null)}
                  className={`${inputClasses('interest', false)} pr-10 appearance-none`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 12px center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '16px'
                  }}
                >
                  {interests.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="group">
              <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide uppercase">
                Message <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea 
                name="message" 
                value={form.message} 
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className={`${inputClasses('message', !!errors.message)} resize-none`}
                rows={5}
                placeholder="Tell us more about your requirements, project details, or how we can assist you..."
                required 
              />
              {errors.message && <span className="text-red-500 text-sm mt-2 block font-medium animate-pulse">{errors.message}</span>}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                onClick={handleSubmit}
                className="group w-full py-4 px-8 rounded-xl font-bold text-white text-lg tracking-wide uppercase
                         bg-gradient-to-r from-green-600 to-green-700 
                         hover:from-green-700 hover:to-green-800 
                         transform hover:scale-[1.02] hover:shadow-xl
                         transition-all duration-300 ease-out
                         shadow-lg hover:shadow-2xl
                         border-0 focus:outline-none focus:ring-4 focus:ring-green-200
                         active:scale-[0.98] cursor-pointer"
              >
                <span className="flex items-center justify-center">
                  Send Inquiry
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center transition-all duration-500 ease-out animate-pulse">
                <div className="flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-green-800 font-bold text-lg mb-2">Thank You!</h3>
                <p className="text-green-700 font-medium">
                  Thank you for reaching out. Our team will respond within 2 business days.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}