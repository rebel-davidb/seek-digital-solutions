import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["24 Carrier Court", "Southington, CT 06489"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["(860) 265-8630"],
    link: "tel:+18602658630",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["support@seekdigitalsolutions.com"],
    link: "mailto:support@seekdigitalsolutions.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Fri: 9:00 AM – 6:00 PM CST", "Sat – Sun: Closed"],
  },
];

const services = [
  "SEO Optimization",
  "Website Design & Development",
  "Paid Advertising (PPC)",
  "Reputation Management",
  "Branding",
  "Conversion Optimization",
  "Other / Not Sure",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    // Encode form data as application/x-www-form-urlencoded for Netlify Forms.
    // Netlify detects the form at build time via /public/netlify-forms.html
    // and accepts POST submissions to "/" at runtime.
    const encode = (data: Record<string, string>) =>
      Object.entries(data)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
        .join("&");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          "bot-field": "",
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      // In local dev the POST will 404 (no Netlify runtime), but the form
      // still works correctly once deployed. Show a friendly dev-mode notice.
      if (import.meta.env.DEV) {
        setSubmitted(true); // simulate success in preview
      } else {
        setSubmitError(
          "Something went wrong sending your message. Please try calling us directly at (860) 265-8630."
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Page Hero */}
      <div className="bg-gradient-to-br from-[#0B1F3A] to-[#0F4C81] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#E85D26] blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#E85D26] text-sm font-bold tracking-widest uppercase">Get in Touch</span>
          <h1 className="text-white mt-4 mb-5" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "900", lineHeight: "1.1" }}>
            Let's Build Something Great Together
          </h1>
          <p className="text-blue-200" style={{ fontSize: "18px", lineHeight: "1.6" }}>
            Tell us about your business and goals. We'll reach out within 24 hours with ideas tailored to your needs—no obligation required.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <aside className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-[#0B1F3A] mb-3" style={{ fontSize: "24px", fontWeight: "800" }}>
                Contact Information
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our team is ready to help you achieve your growth goals. Reach out by form, phone, or email.
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, title, lines, link }) => (
                <div key={title} className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#0F4C81] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[#0B1F3A] font-semibold text-sm mb-1">{title}</div>
                    {lines.map((line) =>
                      link ? (
                        <a key={line} href={link} className="block text-gray-500 text-sm hover:text-[#E85D26] transition-colors">
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-gray-500 text-sm">{line}</p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-52 bg-gray-100 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Map · Southington, CT</p>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-16 px-8">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-[#0B1F3A] mb-4" style={{ fontSize: "28px", fontWeight: "800" }}>
                    Message Received!
                  </h3>
                  <p className="text-gray-500 max-w-md mx-auto text-sm leading-relaxed mb-8">
                    Thank you for reaching out to Seek Digital Solutions. Our team will review your message and get back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" }); }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0F4C81] text-white text-sm font-semibold hover:bg-[#0a3a63] transition-colors"
                  >
                    Send Another Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h2 className="text-[#0B1F3A] mb-2" style={{ fontSize: "22px", fontWeight: "800" }}>
                  Request a Free Strategy Session
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill out the form below and we'll prepare a customized growth plan for your business.
                </p>

                {/* Netlify Form */}
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                   {/* Required hidden fields for Netlify Forms JS submission */}
                   <input type="hidden" name="form-name" value="contact" />
                   <p className="hidden">
                     <label>
                       Don't fill this out if you're human: <input name="bot-field" />
                     </label>
                   </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name <span className="text-[#E85D26]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${
                          errors.name
                            ? "border-red-400 bg-red-50 focus:border-red-500"
                            : "border-gray-200 bg-gray-50 focus:border-[#0F4C81] focus:bg-white"
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Email Address <span className="text-[#E85D26]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${
                          errors.email
                            ? "border-red-400 bg-red-50 focus:border-red-500"
                            : "border-gray-200 bg-gray-50 focus:border-[#0F4C81] focus:bg-white"
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(512) 555-0100"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm outline-none focus:border-[#0F4C81] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm outline-none focus:border-[#0F4C81] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm outline-none focus:border-[#0F4C81] focus:bg-white transition-colors text-gray-700"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Tell Us About Your Goals <span className="text-[#E85D26]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your business, current challenges, and what you'd like to achieve..."
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full px-4 py-3 rounded-lg border text-sm outline-none resize-none transition-colors ${
                        errors.message
                          ? "border-red-400 bg-red-50 focus:border-red-500"
                          : "border-gray-200 bg-gray-50 focus:border-[#0F4C81] focus:bg-white"
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-500" role="alert">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#E85D26] text-white font-bold hover:bg-[#d04e1b] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                    style={{ fontSize: "15px" }}
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? "Sending…" : "Send My Message"}
                  </button>

                  {submitError && (
                    <p className="text-center text-red-500 text-sm" role="alert">
                      {submitError}
                    </p>
                  )}

                  <p className="text-center text-gray-400 text-xs">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy-policy" className="underline hover:text-[#E85D26] transition-colors">Privacy Policy</a>.
                    We never share your information.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}