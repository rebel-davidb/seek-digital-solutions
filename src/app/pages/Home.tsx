import { Link } from "react-router";
import {
  Search, Globe, TrendingUp, Shield, Palette, BarChart2,
  CheckCircle, ArrowRight, Star, ChevronRight,
  Users, Award, Target, Lightbulb, Settings, Rocket
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroImage = "https://images.unsplash.com/photo-1758873271824-a3216c80d1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYWdlbmN5JTIwb2ZmaWNlJTIwbW9kZXJufGVufDF8fHx8MTc3NDQxNjk2Mnww&ixlib=rb-4.1.0&q=80&w=1080";
const teamImage = "https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzc0NDE2OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080";

const caseStudies = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1566918621183-ff90d3e0553f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZyUyMENSTSUyMGRhc2hib2FyZCUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzc0NDE3NzczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Email & CRM Optimization",
    title: "B2B Services Firm Triples Lead Conversion with CRM Overhaul",
    metrics: [
      { label: "Email Open Rate", value: "+94%" },
      { label: "Lead Conversion", value: "+3x" },
      { label: "Pipeline Revenue", value: "+$1.2M" },
    ],
    description: "A B2B services company had disconnected tools and a cold email list. We rebuilt their CRM workflows, segmented their audience, and launched automated nurture sequences that turned cold contacts into closed deals.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwdGVhbXxlbnwxfHx8fDE3NzQ0MTc3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Custom Development",
    title: "Regional Retailer Cuts Ops Time by 60% with Custom Platform",
    metrics: [
      { label: "Manual Work Eliminated", value: "60%" },
      { label: "Order Processing Speed", value: "4x faster" },
      { label: "Operational Cost Savings", value: "\$80K/yr" },
    ],
    description: "A growing regional retailer was drowning in manual processes and patchwork spreadsheets. We designed and built a custom web platform tailored to their workflow, eliminating bottlenecks and scaling operations effortlessly.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUEklMjBpbnRlZ3JhdGlvbiUyMGRhdGElMjBjb25uZWN0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ0MTc3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "API Integrations",
    title: "SaaS Platform Unifies 8 Tools into One Seamless Ecosystem",
    metrics: [
      { label: "Systems Integrated", value: "8 → 1" },
      { label: "Data Sync Errors", value: "-98%" },
      { label: "Team Productivity", value: "+45%" },
    ],
    description: "A fast-growing SaaS company was losing hours each week to duplicate data entry across disconnected platforms. We engineered a unified API integration layer connecting their CRM, billing, support, and analytics tools in real time.",
  },
];

const services = [
  {
    icon: Search,
    slug: "seo",
    title: "SEO Optimization",
    description: "Dominate search rankings with proven on-page and technical SEO strategies that drive sustainable organic growth.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Globe,
    slug: "web-design",
    title: "Website Design & Development",
    description: "Beautiful, fast, conversion-optimized websites built to turn visitors into loyal customers.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: TrendingUp,
    slug: "ppc",
    title: "Paid Advertising (PPC)",
    description: "Maximize your ad spend with laser-targeted Google and Meta campaigns managed by certified specialists.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Shield,
    slug: "reputation-management",
    title: "Reputation Management",
    description: "Monitor, protect, and grow your online reputation across Google, Yelp, BBB, and beyond.",
    color: "bg-blue-50 text-blue-700",
  },
  {
    icon: Palette,
    slug: "branding",
    title: "Branding",
    description: "Develop a distinctive brand identity that resonates with your audience and sets you apart from competitors.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: BarChart2,
    slug: "conversion",
    title: "Conversion Optimization",
    description: "Turn more visitors into paying customers through data-driven A/B testing and UX improvements.",
    color: "bg-teal-50 text-teal-600",
  },
];

const stats = [
  { value: "250+", label: "Clients Served" },
  { value: "94%", label: "Client Retention Rate" },
  { value: "15+", label: "Years of Expertise" },
];

const processSteps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Discovery",
    description: "We dive deep into your business, goals, audience, and competitive landscape to uncover the opportunities that matter most.",
  },
  {
    icon: Target,
    step: "02",
    title: "Strategy",
    description: "We craft a custom roadmap tailored to your objectives—no cookie-cutter approaches, just data-backed plans built to win.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execution",
    description: "Our expert team brings the strategy to life across all channels, ensuring every tactic is deployed with precision and speed.",
  },
  {
    icon: Settings,
    step: "04",
    title: "Optimization",
    description: "We continuously monitor performance, analyze data, and refine our approach to compound your results over time.",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "We run a security guard company across three Texas markets and our online presence was hurting us—bad reviews were showing up first and our website kept going down. Seek Digital got us on solid hosting, cleaned up our reputation across Google and Yelp, and helped us start actually asking for reviews the right way. We've had clients tell us they chose us specifically because of how we looked online.",
    name: "Darnell W.",
    title: "Owner",
    company: "Lone Star Protection Group",
    rating: 5,
  },
  {
    id: 2,
    quote: "Running a boutique agency means you're always juggling more than you can staff. I brought Seek Digital in to fill the gaps—dev work, integrations, email builds—things my team didn't have bandwidth for. They slot in seamlessly, meet deadlines, and I never have to babysit the work. It's honestly changed how I run my business. I white-label some of what they do and my clients have no idea it's not all in-house.",
    name: "Jenna M.",
    title: "Founder & Creative Director",
    company: "Meridian Creative Co.",
    rating: 5,
  },
  {
    id: 3,
    quote: "We had Aline in place but it wasn't talking to anything—no automated follow-ups, no lead nurture, nothing. Seek Digital came in, mapped out our entire inquiry-to-tour workflow, configured the eCRM side properly, and built out the automated touchpoints we'd been putting off for two years. Move-in inquiries that used to go cold are now converting at a rate we've never seen. For senior living, where families are making emotional decisions, that follow-through matters enormously.",
    name: "Patricia H.",
    title: "Marketing Director",
    company: "Brookfield Senior Living Communities",
    rating: 5,
  },
];

const valuePoints = [
  "Results-first approach backed by transparent reporting",
  "Dedicated account managers who know your business",
  "No long-term contracts—we earn your trust every month",
  "Integrated strategies across SEO, PPC, social, and web",
];

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImage}
            alt="Digital marketing agency team working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/92 via-[#0B1F3A]/80 to-[#0F4C81]/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E85D26]/20 border border-[#E85D26]/40 text-[#f4a07b] text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E85D26] animate-pulse" />
              Trusted by 250+ growing businesses
            </div>
            <h1 className="text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 68px)", lineHeight: "1.08", fontWeight: "900" }}>
              Grow Your Business with{" "}
              <span className="text-[#E85D26]">Data-Driven</span>{" "}
              Digital Marketing
            </h1>
            <p className="text-blue-100 mb-10 max-w-2xl" style={{ fontSize: "clamp(16px, 2vw, 20px)", lineHeight: "1.6" }}>
              Seek Digital Solutions builds and executes full-funnel marketing strategies that drive real revenue—not just vanity metrics. Let's put your growth on autopilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#E85D26] text-white font-bold hover:bg-[#d04e1b] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{ fontSize: "16px" }}
              >
                Request a Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
                style={{ fontSize: "16px" }}
              >
                Explore Our Services
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-14 flex flex-wrap gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-white" style={{ fontSize: "28px", fontWeight: "900" }}>{stat.value}</div>
                  <div className="text-blue-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#E85D26] text-sm font-bold tracking-widest uppercase">What We Do</span>
            <h2 className="text-[#0B1F3A] mt-3 mb-5" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "900" }}>
              Full-Service Digital Marketing
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto" style={{ fontSize: "17px", lineHeight: "1.6" }}>
              From search to social, we cover every channel your customers use—ensuring your brand shows up everywhere it matters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  to={`/services/${service.slug}`}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group block"
                >
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-[#0B1F3A] mb-3" style={{ fontSize: "18px", fontWeight: "700" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-[#E85D26] text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About / Value Proposition Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={teamImage}
                  alt="Seek Digital Solutions team collaborating on strategy"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/40 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-[#E85D26] text-white rounded-2xl px-6 py-5 shadow-xl">
                <div style={{ fontSize: "36px", fontWeight: "900" }}>94%</div>
                <div className="text-orange-100 text-sm">Client Retention Rate</div>
              </div>
              <div className="absolute -top-6 -left-6 bg-[#0B1F3A] text-white rounded-2xl px-6 py-5 shadow-xl">
                <div style={{ fontSize: "36px", fontWeight: "900" }}>3.8x</div>
                <div className="text-blue-200 text-sm">Average Return on Ad Spend</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-[#E85D26] text-sm font-bold tracking-widest uppercase">Why Seek Digital</span>
              <h2 className="text-[#0B1F3A] mt-3 mb-6" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: "900", lineHeight: "1.15" }}>
                We Don't Just Run Campaigns—We Drive Business Outcomes
              </h2>
              <p className="text-gray-500 mb-8" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                Founded on a belief that marketing should be accountable, Seek Digital Solutions combines creative storytelling with rigorous analytics. Our team of specialists has helped businesses across industries achieve breakthrough growth—and we're obsessed with proving ROI every step of the way.
              </p>
              <ul className="space-y-4 mb-10">
                {valuePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E85D26] mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0F4C81] text-white font-bold hover:bg-[#0a3a63] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Meet the Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-[#0B1F3A] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#E85D26] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#0F4C81] blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#E85D26] text-sm font-bold tracking-widest uppercase">How We Work</span>
            <h2 className="text-white mt-3 mb-5" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "900" }}>
              Our Proven 4-Step Process
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto" style={{ fontSize: "17px", lineHeight: "1.6" }}>
              Every engagement starts with clarity and ends with compounding growth. Here's how we make it happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#E85D26]/40 to-transparent" />

            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative text-center group">
                  {/* Step number */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#E85D26]/20 group-hover:border-[#E85D26]/40 transition-all duration-300">
                      <Icon className="w-10 h-10 text-[#E85D26]" />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#E85D26] text-white flex items-center justify-center text-xs font-black"
                    >
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-white mb-3" style={{ fontSize: "20px", fontWeight: "700" }}>{step.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies / Results Section */}
      <section id="results" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#E85D26] text-sm font-bold tracking-widest uppercase">Real Results</span>
            <h2 className="text-[#0B1F3A] mt-3 mb-5" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "900" }}>
              Case Studies That Speak for Themselves
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto" style={{ fontSize: "17px", lineHeight: "1.6" }}>
              We measure success by the growth our clients achieve. Here are a few stories we're proud of.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#E85D26] text-white text-xs font-semibold">
                    {study.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[#0B1F3A] mb-3" style={{ fontSize: "18px", fontWeight: "700", lineHeight: "1.3" }}>
                    {study.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{study.description}</p>
                  <div className="mt-auto grid grid-cols-3 gap-3 border-t border-gray-100 pt-5">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-[#E85D26]" style={{ fontSize: "20px", fontWeight: "800" }}>{metric.value}</div>
                        <div className="text-gray-400" style={{ fontSize: "11px" }}>{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#E85D26] text-sm font-bold tracking-widest uppercase">Client Love</span>
            <h2 className="text-[#0B1F3A] mt-3 mb-5" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "900" }}>
              What Our Clients Are Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E85D26] text-[#E85D26]" />
                  ))}
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0F4C81] to-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#E85D26]/15 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E85D26]/20 border border-[#E85D26]/40 text-[#f4a07b] text-sm font-medium mb-8">
            <Users className="w-4 h-4" />
            Limited Onboarding Slots Available
          </div>
          <h2 className="text-white mb-6" style={{ fontSize: "clamp(30px, 5vw, 54px)", fontWeight: "900", lineHeight: "1.1" }}>
            Ready to Grow Your Business?
          </h2>
          <p className="text-blue-200 mb-10 max-w-2xl mx-auto" style={{ fontSize: "18px", lineHeight: "1.6" }}>
            Let's build a strategy that drives real results. Get your free consultation and discover how Seek Digital Solutions can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#E85D26] text-white font-bold hover:bg-[#d04e1b] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{ fontSize: "16px" }}
            >
              Get Your Free Strategy Session
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+18602658630"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
              style={{ fontSize: "16px" }}
            >
              Call Us: (860) 265-8630
            </a>
          </div>
          <p className="mt-6 text-blue-300 text-sm flex items-center justify-center gap-2">
            <Award className="w-4 h-4" />
            No commitment required · Response within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
}