import { Link } from "react-router";
import { Shield, ArrowLeft } from "lucide-react";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include:
    
• **Personal Identification:** Name, email address, phone number, and company name.
• **Communication Data:** Messages, inquiries, and correspondence you send to us.
• **Usage Data:** Information automatically collected when you visit our website, including IP address, browser type, operating system, referring URLs, and pages viewed.
• **Cookies and Tracking:** We use cookies and similar tracking technologies to analyze website traffic and improve your experience (see Section 5 for more details).`,
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Your Information",
    content: `We use the information we collect for the following purposes:

• To respond to your inquiries and provide the services you request.
• To send you marketing communications, newsletters, or updates about our services (you may opt out at any time).
• To analyze and improve our website performance and user experience.
• To comply with legal obligations and protect our rights and the rights of others.
• To detect, prevent, and address fraud, security breaches, or other illegal activity.
• To personalize your experience and deliver content relevant to your interests.`,
  },
  {
    id: "sharing-information",
    title: "3. Sharing of Information",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:

• **Service Providers:** We work with trusted third-party vendors who assist in operating our website and conducting our business (e.g., email marketing platforms, analytics tools). These parties are contractually obligated to keep your information confidential.
• **Legal Compliance:** We may disclose your information if required by law, regulation, or valid legal process, or to protect the safety and rights of Seek Digital Solutions, our clients, or the public.
• **Business Transfers:** In the event of a merger, acquisition, or sale of our company assets, your information may be transferred to the acquiring entity.`,
  },
  {
    id: "data-retention",
    title: "4. Data Retention",
    content: `We retain your personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it.`,
  },
  {
    id: "cookies",
    title: "5. Cookies and Tracking Technologies",
    content: `Our website uses cookies and similar technologies to enhance your browsing experience. Types of cookies we use include:

• **Essential Cookies:** Necessary for the website to function properly and cannot be disabled.
• **Analytics Cookies:** Help us understand how visitors interact with our website (e.g., Google Analytics). This data is aggregated and anonymized.
• **Marketing Cookies:** Used to track visitors across websites to enable personalized advertising relevant to your interests.

You can manage cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.`,
  },
  {
    id: "third-party-services",
    title: "6. Third-Party Services",
    content: `Our website may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party services you access through our website.

Third-party services we may utilize include, but are not limited to: Google Analytics, Google Ads, Meta (Facebook) Pixel, and email marketing platforms.`,
  },
  {
    id: "your-rights",
    title: "7. Your Rights and Choices",
    content: `Depending on your location, you may have certain rights regarding your personal information, including:

• **Access:** Request a copy of the personal information we hold about you.
• **Correction:** Request correction of inaccurate or incomplete data.
• **Deletion:** Request deletion of your personal information, subject to certain legal exceptions.
• **Opt-Out:** Unsubscribe from marketing communications at any time by clicking the "unsubscribe" link in any email or contacting us directly.
• **Data Portability:** Request that we transfer your data to another service provider where technically feasible.

To exercise any of these rights, please contact us using the information provided in Section 9.`,
  },
  {
    id: "data-security",
    title: "8. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include SSL encryption, secure server infrastructure, and access controls.

However, no method of internet transmission or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.`,
  },
  {
    id: "contact-us",
    title: "9. Contact Us",
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

• **Email:** support@seekdigitalsolutions.com
• **Phone:** (860) 265-8630
• **Mail:** Seek Digital Solutions, 24 Carrier Court, Southington, CT 06489

We will respond to your inquiry within 30 days.`,
  },
  {
    id: "changes",
    title: "10. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make significant changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.`,
  },
];

export function PrivacyPolicy() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0B1F3A] to-[#0F4C81] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E85D26]/20 border border-[#E85D26]/30 mb-6">
            <Shield className="w-8 h-8 text-[#E85D26]" />
          </div>
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(30px, 5vw, 50px)", fontWeight: "900" }}>
            Privacy Policy
          </h1>
          <p className="text-blue-200 text-sm">
            <strong>Last Updated:</strong> March 25, 2026 &nbsp;·&nbsp; Effective Date: March 25, 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#0F4C81] text-sm font-medium hover:text-[#E85D26] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Intro */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
          <p className="text-gray-700 text-sm leading-relaxed">
            At <strong>Seek Digital Solutions</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our website.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mb-12">
          <h2 className="text-[#0B1F3A] mb-4" style={{ fontSize: "16px", fontWeight: "700" }}>Table of Contents</h2>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-[#0F4C81] text-sm hover:text-[#E85D26] hover:underline transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-[#0B1F3A] mb-4" style={{ fontSize: "20px", fontWeight: "800" }}>
                {section.title}
              </h2>
              <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line space-y-3">
                {section.content.split("\n").map((line, i) => {
                  if (line.startsWith("•")) {
                    return (
                      <p key={i} className="flex gap-2">
                        <span className="text-[#E85D26] shrink-0 mt-0.5">•</span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: line.substring(1).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                          }}
                        />
                      </p>
                    );
                  }
                  if (line.trim() === "") return null;
                  return (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  );
                })}
              </div>
              <div className="mt-6 border-b border-gray-100" />
            </section>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 bg-[#0B1F3A] rounded-2xl p-8 text-center">
          <h3 className="text-white mb-3" style={{ fontSize: "20px", fontWeight: "700" }}>
            Questions About Your Privacy?
          </h3>
          <p className="text-blue-200 text-sm mb-6">
            Our team is happy to answer any questions you have about how we handle your data.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E85D26] text-white text-sm font-semibold hover:bg-[#d04e1b] transition-colors"
          >
            Contact Our Privacy Team
          </Link>
        </div>
      </div>
    </div>
  );
}