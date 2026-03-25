import { useParams, Link, Navigate } from "react-router";
import {
  Search, Globe, TrendingUp, Palette, BarChart2,
  CheckCircle, ArrowRight, ChevronRight, Shield,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// ─── SVG Graphic Components ───────────────────────────────────────────────────

function SeoGraphic() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const heights = [38, 62, 90, 120, 155, 188];
  const base = 265;
  const barW = 30;
  const startX = 272;
  const gap = 10;

  return (
    <svg viewBox="0 0 500 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="300" rx="16" fill="#f8fafc" />

      {/* ── Left: SERP Panel ── */}
      <text x="20" y="24" fontSize="11" fontWeight="700" fill="#0B1F3A" letterSpacing="1">SEARCH RESULTS</text>

      {/* Search bar */}
      <rect x="16" y="32" width="230" height="28" rx="14" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <circle cx="34" cy="46" r="7" fill="none" stroke="#4285F4" strokeWidth="2" />
      <line x1="39" y1="51" x2="43" y2="55" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
      <text x="50" y="50" fontSize="10" fill="#94a3b8">digital marketing agency ct</text>

      {/* Result #1 — highlighted */}
      <rect x="16" y="68" width="232" height="58" rx="8" fill="#fff7f0" stroke="#E85D26" strokeWidth="1.5" />
      <rect x="24" y="76" width="18" height="18" rx="4" fill="#E85D26" />
      <text x="33" y="89" fontSize="9" fontWeight="800" fill="white" textAnchor="middle">1</text>
      <text x="50" y="88" fontSize="10" fontWeight="700" fill="#0B1F3A">Your Business · seekdigital.com</text>
      <rect x="50" y="95" width="140" height="7" rx="3" fill="#cbd5e1" />
      <rect x="50" y="108" width="100" height="6" rx="3" fill="#e2e8f0" />

      {/* Result #2 */}
      <rect x="16" y="133" width="232" height="46" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="24" y="141" width="18" height="18" rx="4" fill="#e2e8f0" />
      <text x="33" y="154" fontSize="9" fill="#94a3b8" textAnchor="middle">2</text>
      <rect x="50" y="145" width="120" height="7" rx="3" fill="#e2e8f0" />
      <rect x="50" y="158" width="90" height="6" rx="3" fill="#f1f5f9" />

      {/* Result #3 */}
      <rect x="16" y="186" width="232" height="46" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="24" y="194" width="18" height="18" rx="4" fill="#e2e8f0" />
      <text x="33" y="207" fontSize="9" fill="#94a3b8" textAnchor="middle">3</text>
      <rect x="50" y="198" width="130" height="7" rx="3" fill="#e2e8f0" />
      <rect x="50" y="211" width="95" height="6" rx="3" fill="#f1f5f9" />

      {/* Result #4 */}
      <rect x="16" y="239" width="232" height="46" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="24" y="247" width="18" height="18" rx="4" fill="#e2e8f0" />
      <text x="33" y="260" fontSize="9" fill="#94a3b8" textAnchor="middle">4</text>
      <rect x="50" y="251" width="115" height="7" rx="3" fill="#e2e8f0" />
      <rect x="50" y="264" width="85" height="6" rx="3" fill="#f1f5f9" />

      {/* Divider */}
      <line x1="257" y1="20" x2="257" y2="285" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4,3" />

      {/* ── Right: Bar Chart ── */}
      <text x="270" y="24" fontSize="11" fontWeight="700" fill="#0B1F3A" letterSpacing="1">ORGANIC TRAFFIC</text>

      {/* Grid lines */}
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="268" y1={base - (188 / 3) * i} x2="490" y2={base - (188 / 3) * i}
          stroke="#e2e8f0" strokeWidth="1" />
      ))}

      {/* Bars */}
      {months.map((month, i) => {
        const x = startX + i * (barW + gap);
        const h = heights[i];
        const isLast = i === 5;
        return (
          <g key={month}>
            <rect x={x} y={base - h} width={barW} height={h} rx="5"
              fill={isLast ? "#E85D26" : "#0F4C81"}
              opacity={isLast ? 1 : 0.25 + i * 0.14}
            />
            <text x={x + barW / 2} y={base + 14} fontSize="9" fill="#94a3b8" textAnchor="middle">{month}</text>
          </g>
        );
      })}

      {/* Trend line */}
      <polyline
        points={months.map((_, i) => `${startX + i * (barW + gap) + barW / 2},${base - heights[i]}`).join(" ")}
        fill="none" stroke="#E85D26" strokeWidth="2" strokeDasharray="5,3" opacity="0.6"
      />

      {/* +187% badge */}
      <rect x="390" y="28" width="88" height="30" rx="8" fill="#E85D26" />
      <text x="434" y="48" fontSize="13" fontWeight="800" fill="white" textAnchor="middle">+187%</text>

      <text x="270" y="290" fontSize="10" fill="#94a3b8">Avg. organic traffic lift · 6-month window</text>
    </svg>
  );
}

function WebDesignGraphic() {
  return (
    <svg viewBox="0 0 500 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="300" rx="16" fill="#f8fafc" />

      {/* Browser window */}
      <rect x="28" y="24" width="444" height="256" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />

      {/* Chrome bar */}
      <rect x="28" y="24" width="444" height="34" rx="12" fill="#e8ecf0" />
      <rect x="28" y="44" width="444" height="14" fill="#e8ecf0" />
      <circle cx="52" cy="41" r="6" fill="#fc5f57" />
      <circle cx="72" cy="41" r="6" fill="#febc2e" />
      <circle cx="92" cy="41" r="6" fill="#28c840" />
      <rect x="116" y="33" width="240" height="16" rx="8" fill="white" />
      <text x="236" y="45" fontSize="9" fill="#94a3b8" textAnchor="middle">seekdigitalsolutions.com</text>

      {/* Header */}
      <rect x="28" y="58" width="444" height="38" fill="#0B1F3A" />
      <circle cx="56" cy="77" r="10" fill="#E85D26" />
      <rect x="74" y="72" width="40" height="8" rx="3" fill="rgba(255,255,255,0.4)" />
      <rect x="290" y="72" width="32" height="8" rx="3" fill="rgba(255,255,255,0.3)" />
      <rect x="332" y="72" width="32" height="8" rx="3" fill="rgba(255,255,255,0.3)" />
      <rect x="374" y="72" width="32" height="8" rx="3" fill="rgba(255,255,255,0.3)" />
      <rect x="418" y="69" width="46" height="16" rx="6" fill="#E85D26" />

      {/* Hero */}
      <rect x="28" y="96" width="444" height="80" fill="#0F4C81" opacity="0.15" />
      <rect x="28" y="96" width="444" height="80" fill="url(#heroGrad)" />
      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0B1F3A" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0F4C81" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect x="50" y="112" width="160" height="12" rx="5" fill="rgba(255,255,255,0.9)" />
      <rect x="50" y="130" width="120" height="9" rx="4" fill="rgba(255,255,255,0.5)" />
      <rect x="50" y="148" width="80" height="20" rx="5" fill="#E85D26" />
      <text x="90" y="162" fontSize="9" fontWeight="700" fill="white" textAnchor="middle">Get Started</text>

      {/* Cards row */}
      {[44, 190, 336].map((x, i) => (
        <g key={i}>
          <rect x={x} y="192" width="122" height="74" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
          <rect x={x + 8} y="200" width="106" height="30" rx="4" fill="#f1f5f9" />
          <rect x={x + 8} y="238" width="80" height="8" rx="3" fill="#e2e8f0" />
          <rect x={x + 8} y="251" width="60" height="7" rx="3" fill="#f1f5f9" />
        </g>
      ))}
    </svg>
  );
}

function PPCGraphic() {
  const tiers = [
    { label: "AUDIENCE", count: "100,000", w: 380, x: 60, fill: "#0B1F3A" },
    { label: "IMPRESSIONS", count: "42,000", w: 310, x: 95, fill: "#0F4C81" },
    { label: "CLICKS", count: "8,400", w: 240, x: 130, fill: "#1e6aa8" },
    { label: "LEADS", count: "840", w: 170, x: 165, fill: "#c24f1e" },
    { label: "CUSTOMERS", count: "80", w: 120, x: 190, fill: "#E85D26" },
  ];
  const tierH = 38;
  const tierGap = 6;
  const startY = 24;

  return (
    <svg viewBox="0 0 500 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="300" rx="16" fill="#f8fafc" />
      <text x="250" y="20" fontSize="11" fontWeight="700" fill="#0B1F3A" letterSpacing="1" textAnchor="middle">AD SPEND FUNNEL</text>

      {tiers.map((tier, i) => {
        const y = startY + 14 + i * (tierH + tierGap);
        return (
          <g key={tier.label}>
            <rect x={tier.x} y={y} width={tier.w} height={tierH} rx="6" fill={tier.fill} />
            <text x={tier.x + 12} y={y + 14} fontSize="9" fontWeight="700" fill="rgba(255,255,255,0.7)" letterSpacing="0.5">{tier.label}</text>
            <text x={tier.x + 12} y={y + 28} fontSize="13" fontWeight="800" fill="white">{tier.count}</text>
          </g>
        );
      })}

      {/* ROAS Badge */}
      <circle cx="420" cy="228" r="52" fill="#E85D26" />
      <text x="420" y="218" fontSize="12" fontWeight="700" fill="white" textAnchor="middle">AVG. ROAS</text>
      <text x="420" y="238" fontSize="26" fontWeight="900" fill="white" textAnchor="middle">3.8x</text>
      <text x="420" y="254" fontSize="9" fill="rgba(255,255,255,0.8)" textAnchor="middle">Return</text>

      <text x="250" y="290" fontSize="10" fill="#94a3b8" textAnchor="middle">Avg. funnel performance across managed campaigns</text>
    </svg>
  );
}

function ReputationGraphic() {
  const platforms = [
    { name: "Google", score: "4.9", x: 32, color: "#4285F4" },
    { name: "Yelp", score: "4.7", x: 172, color: "#d32323" },
    { name: "BBB", score: "A+", x: 312, color: "#006aaa" },
  ];
  const months = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];
  const scores = [3.2, 3.6, 4.0, 4.4, 4.7, 4.9];
  const chartL = 32, chartR = 468, chartT = 196, chartB = 278;
  const chartW = chartR - chartL;
  const chartH = chartB - chartT;
  const toX = (i: number) => chartL + (i / (scores.length - 1)) * chartW;
  const toY = (v: number) => chartB - ((v - 2.5) / (5 - 2.5)) * chartH;
  const points = scores.map((v, i) => `${toX(i)},${toY(v)}`).join(" ");

  return (
    <svg viewBox="0 0 500 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="300" rx="16" fill="#f8fafc" />
      <text x="250" y="20" fontSize="11" fontWeight="700" fill="#0B1F3A" letterSpacing="1" textAnchor="middle">REVIEW PLATFORM SCORECARD</text>

      {/* Platform cards */}
      {platforms.map((p) => (
        <g key={p.name}>
          <rect x={p.x} y="28" width="124" height="98" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
          <rect x={p.x} y="28" width="124" height="28" rx="10" fill={p.color} opacity="0.12" />
          <rect x={p.x} y="46" width="124" height="10" fill={p.color} opacity="0.12" />
          <text x={p.x + 62} y="47" fontSize="10" fontWeight="700" fill={p.color} textAnchor="middle">{p.name}</text>
          <text x={p.x + 62} y="80" fontSize="28" fontWeight="900" fill="#0B1F3A" textAnchor="middle">{p.score}</text>
          <text x={p.x + 20} y="97" fontSize="13" fill="#f59e0b">★★★★★</text>
          <text x={p.x + 62} y="118" fontSize="8" fill="#94a3b8" textAnchor="middle">out of 5.0</text>
        </g>
      ))}

      {/* Trend section */}
      <text x="32" y="182" fontSize="10" fontWeight="700" fill="#0B1F3A">AVERAGE RATING TREND — 6 MONTHS</text>

      {/* Chart grid */}
      {[3, 4, 5].map((v) => (
        <g key={v}>
          <line x1={chartL} y1={toY(v)} x2={chartR} y2={toY(v)} stroke="#e2e8f0" strokeWidth="1" />
          <text x={chartL - 6} y={toY(v) + 4} fontSize="8" fill="#94a3b8" textAnchor="end">{v}.0</text>
        </g>
      ))}

      {/* Area fill */}
      <polygon
        points={`${chartL},${chartB} ${points} ${chartR},${chartB}`}
        fill="#E85D26" opacity="0.08"
      />

      {/* Line */}
      <polyline points={points} fill="none" stroke="#E85D26" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Dots + month labels */}
      {scores.map((v, i) => (
        <g key={i}>
          <circle cx={toX(i)} cy={toY(v)} r="4" fill="#E85D26" />
          <text x={toX(i)} y={chartB + 14} fontSize="8" fill="#94a3b8" textAnchor="middle">{months[i]}</text>
        </g>
      ))}

      {/* Improvement badge */}
      <rect x="388" y="192" width="80" height="38" rx="8" fill="#0B1F3A" />
      <text x="428" y="208" fontSize="8" fontWeight="600" fill="rgba(255,255,255,0.7)" textAnchor="middle">IMPROVED</text>
      <text x="428" y="225" fontSize="14" fontWeight="900" fill="#E85D26" textAnchor="middle">+1.7 ★</text>

      <text x="250" y="296" fontSize="9" fill="#94a3b8" textAnchor="middle">Avg. star rating improvement across managed clients</text>
    </svg>
  );
}

function BrandingGraphic() {
  const center = { x: 250, y: 148 };
  const elements = [
    { label: "Logo Suite", icon: "◈", cx: 250, cy: 54 },
    { label: "Color Palette", icon: "◉", cx: 372, cy: 101 },
    { label: "Typography", icon: "Aa", cx: 372, cy: 195 },
    { label: "Brand Voice", icon: "≋", cx: 250, cy: 242 },
    { label: "Photography", icon: "⊡", cx: 128, cy: 195 },
    { label: "Guidelines", icon: "≡", cx: 128, cy: 101 },
  ];

  return (
    <svg viewBox="0 0 500 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="300" rx="16" fill="#f8fafc" />

      {/* Connection lines */}
      {elements.map((e) => (
        <line key={e.label} x1={center.x} y1={center.y} x2={e.cx} y2={e.cy}
          stroke="#e2e8f0" strokeWidth="2" />
      ))}

      {/* Center hexagon-style circle */}
      <circle cx={center.x} cy={center.y} r="52" fill="#0B1F3A" />
      <circle cx={center.x} cy={center.y} r="52" fill="none" stroke="#E85D26" strokeWidth="2.5" strokeDasharray="8,4" />
      <text x={center.x} y={center.y - 6} fontSize="11" fontWeight="800" fill="white" textAnchor="middle">BRAND</text>
      <text x={center.x} y={center.y + 10} fontSize="11" fontWeight="800" fill="#E85D26" textAnchor="middle">IDENTITY</text>

      {/* Element nodes */}
      {elements.map((e, i) => (
        <g key={e.label}>
          <circle cx={e.cx} cy={e.cy} r="28" fill={i % 2 === 0 ? "#0F4C81" : "#E85D26"} />
          <text x={e.cx} y={e.cy + 5} fontSize="12" fill="white" textAnchor="middle">{e.icon}</text>
          <text x={e.cx} y={e.cy + 42} fontSize="8.5" fontWeight="600" fill="#475569" textAnchor="middle">{e.label}</text>
        </g>
      ))}

      <text x="250" y="294" fontSize="10" fill="#94a3b8" textAnchor="middle">A complete brand identity system — from concept to guidelines</text>
    </svg>
  );
}

function CROGraphic() {
  return (
    <svg viewBox="0 0 500 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="300" rx="16" fill="#f8fafc" />
      <text x="250" y="22" fontSize="11" fontWeight="700" fill="#0B1F3A" letterSpacing="1" textAnchor="middle">A / B TEST RESULTS</text>

      {/* Version A */}
      <rect x="18" y="34" width="206" height="242" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <rect x="18" y="34" width="206" height="28" rx="12" fill="#f1f5f9" />
      <rect x="18" y="48" width="206" height="14" fill="#f1f5f9" />
      <text x="121" y="54" fontSize="10" fontWeight="700" fill="#64748b" textAnchor="middle">Version A — Original</text>
      {/* Hero placeholder */}
      <rect x="30" y="74" width="182" height="50" rx="6" fill="#e2e8f0" />
      <rect x="56" y="84" width="100" height="8" rx="3" fill="#cbd5e1" />
      <rect x="66" y="98" width="80" height="6" rx="3" fill="#d1d5db" />
      {/* Body */}
      <rect x="30" y="134" width="182" height="7" rx="3" fill="#e2e8f0" />
      <rect x="30" y="147" width="160" height="7" rx="3" fill="#e2e8f0" />
      <rect x="30" y="160" width="140" height="7" rx="3" fill="#e2e8f0" />
      {/* Gray CTA */}
      <rect x="62" y="180" width="118" height="32" rx="6" fill="#94a3b8" />
      <text x="121" y="200" fontSize="10" fontWeight="700" fill="white" textAnchor="middle">Submit</text>
      {/* Rate */}
      <text x="121" y="238" fontSize="28" fontWeight="900" fill="#94a3b8" textAnchor="middle">2.3%</text>
      <text x="121" y="256" fontSize="9" fill="#94a3b8" textAnchor="middle">Conversion Rate</text>

      {/* Arrow */}
      <polygon points="238,148 252,140 252,156" fill="#0B1F3A" />
      <line x1="252" y1="148" x2="262" y2="148" stroke="#0B1F3A" strokeWidth="3" strokeLinecap="round" />

      {/* Version B */}
      <rect x="276" y="34" width="206" height="242" rx="12" fill="white" stroke="#E85D26" strokeWidth="2" />
      <rect x="276" y="34" width="206" height="28" rx="12" fill="#fff7f0" />
      <rect x="276" y="48" width="206" height="14" fill="#fff7f0" />
      <text x="379" y="54" fontSize="10" fontWeight="700" fill="#E85D26" textAnchor="middle">Version B — Optimized</text>
      {/* Hero placeholder */}
      <rect x="288" y="74" width="182" height="50" rx="6" fill="#fff0e8" />
      <rect x="308" y="84" width="120" height="8" rx="3" fill="#fbd5bc" />
      <rect x="318" y="98" width="100" height="6" rx="3" fill="#fbd5bc" />
      {/* Body */}
      <rect x="288" y="134" width="182" height="7" rx="3" fill="#f1f5f9" />
      <rect x="288" y="147" width="160" height="7" rx="3" fill="#f1f5f9" />
      <rect x="288" y="160" width="140" height="7" rx="3" fill="#f1f5f9" />
      {/* Orange CTA */}
      <rect x="320" y="180" width="118" height="32" rx="6" fill="#E85D26" />
      <text x="379" y="200" fontSize="10" fontWeight="700" fill="white" textAnchor="middle">Get Started Free</text>
      {/* Rate */}
      <text x="379" y="238" fontSize="28" fontWeight="900" fill="#E85D26" textAnchor="middle">5.7%</text>
      <text x="379" y="256" fontSize="9" fill="#E85D26" textAnchor="middle">Conversion Rate</text>

      {/* Winner badge */}
      <rect x="350" y="38" width="60" height="20" rx="8" fill="#E85D26" />
      <text x="380" y="52" fontSize="9" fontWeight="700" fill="white" textAnchor="middle">✓ WINNER</text>

      {/* Lift stat */}
      <text x="250" y="290" fontSize="12" fontWeight="800" fill="#0B1F3A" textAnchor="middle">+148% conversion lift · statistically significant</text>
    </svg>
  );
}

// ─── Service Data ─────────────────────────────────────────────────────────────

const servicesData = [
  {
    slug: "seo",
    title: "SEO Optimization",
    tagline: "Get found by the customers who are already looking for you.",
    heroDescription:
      "Most businesses are invisible online—not because their product isn't good, but because their digital presence isn't built to compete. We fix that with a comprehensive, data-led approach to search engine optimization that earns lasting rankings and consistent organic traffic.",
    heroImage: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBzZWFyY2glMjBlbmdpbmUlMjBvcHRpbWl6YXRpb24lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzc0NDE4NDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Search,
    accentColor: "#0F4C81",
    stats: [
      { value: "+187%", label: "Avg. Organic Traffic Lift" },
      { value: "Top 3", label: "Rankings within 90 Days" },
      { value: "500+", label: "Keywords Researched per Client" },
    ],
    challenge:
      "Most businesses pour budget into paid ads while ignoring their organic foundation. When ad spend stops, so does the traffic. Meanwhile, competitors who invested in SEO are compounding their visibility every month—ranking on page one, earning clicks for free, and building brand authority that money alone can't buy.",
    solution:
      "We take a full-funnel, technically rigorous approach to SEO. That means fixing what's broken under the hood, targeting the right keywords with the right intent, building content that earns authority, and acquiring backlinks that Google actually respects. Our campaigns are built to last—not to game the algorithm, but to genuinely earn top placement.",
    Graphic: SeoGraphic,
    steps: [
      {
        n: "01",
        title: "Technical Audit",
        desc: "We conduct a deep crawl of your site—identifying indexing errors, page speed issues, Core Web Vitals failures, broken links, duplicate content, and schema gaps.",
      },
      {
        n: "02",
        title: "Keyword & Intent Mapping",
        desc: "We research 500+ keywords, cluster them by search intent, and map them to the right pages—ensuring every piece of content answers what your buyers are actually searching.",
      },
      {
        n: "03",
        title: "On-Page Optimization",
        desc: "We optimize title tags, meta descriptions, headers, internal links, schema markup, and content structure across every key page on your site.",
      },
      {
        n: "04",
        title: "Authority Building",
        desc: "We earn high-quality backlinks through digital PR, strategic outreach, and content partnerships—building your domain authority with links that move the needle.",
      },
      {
        n: "05",
        title: "Monitoring & Refinement",
        desc: "We track rankings, traffic, and conversions in real time—continuously refining strategy based on what's working and what Google's latest signals reveal.",
      },
    ],
    deliverables: [
      "Comprehensive technical SEO audit report",
      "Keyword research & intent mapping (500+ terms)",
      "On-page optimization across all key pages",
      "Schema markup implementation",
      "Core Web Vitals & page speed optimization",
      "Link building & digital PR outreach",
      "Google Search Console & GA4 configuration",
      "Monthly performance reporting & strategy calls",
    ],
  },
  {
    slug: "web-design",
    title: "Website Design & Development",
    tagline: "Your website is your best salesperson. Let's build one worth having.",
    heroDescription:
      "A slow, outdated, or confusing website doesn't just fail to convert—it actively costs you customers. We design and build fast, beautiful, conversion-focused websites that make the right first impression and are built to grow with your business.",
    heroImage: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkZXZlbG9wbWVudCUyMGxhcHRvcCUyMGNvZGUlMjBtb2Rlcm58ZW58MXx8fHwxNzc0NDE4NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Globe,
    accentColor: "#7c3aed",
    stats: [
      { value: "68%", label: "Avg. Bounce Rate Reduction" },
      { value: "2.4x", label: "Conversion Rate Lift" },
      { value: "30 days", label: "Post-Launch Support Included" },
    ],
    challenge:
      "Too many businesses are running on websites that look like they were built in 2014—slow to load, painful on mobile, and structured in a way that confuses rather than converts. A bad website doesn't just sit idle; it's actively turning away prospects who have already found you.",
    solution:
      "We design every site from the user's perspective first. Wireframes before visuals. Conversion logic before aesthetics. The result is a website that looks exceptional, loads fast, and is built to guide visitors toward the action you want them to take—whether that's a call, a form submission, or a purchase.",
    Graphic: WebDesignGraphic,
    steps: [
      {
        n: "01",
        title: "Discovery & Goal Setting",
        desc: "We map your business goals, target audience personas, competitive landscape, and site objectives before a single wireframe is drawn.",
      },
      {
        n: "02",
        title: "Wireframing & Site Architecture",
        desc: "We design the structure—page hierarchy, navigation flow, content placement—ensuring users can find what they need and move toward conversion naturally.",
      },
      {
        n: "03",
        title: "UI Design & Brand Alignment",
        desc: "We build a full visual design system aligned to your brand: typography, color, component styles, and responsive layouts for every breakpoint.",
      },
      {
        n: "04",
        title: "Development & CMS Build",
        desc: "We develop on your preferred stack—WordPress, Webflow, or custom React—with clean code, accessibility compliance, and CMS integration for easy content management.",
      },
      {
        n: "05",
        title: "Launch & Post-Live Support",
        desc: "We handle QA testing, speed optimization, analytics setup, and a full 30-day post-launch support window to address anything that surfaces after go-live.",
      },
    ],
    deliverables: [
      "Custom UI/UX design (desktop, tablet & mobile)",
      "Responsive HTML/CSS or React/Webflow development",
      "CMS integration with easy content editing",
      "Page speed & Core Web Vitals optimization",
      "Google Analytics 4 & Tag Manager setup",
      "ADA accessibility compliance review",
      "Design files & brand asset handoff",
      "30-day post-launch support",
    ],
  },
  {
    slug: "ppc",
    title: "Paid Advertising (PPC)",
    tagline: "Stop guessing. Start converting.",
    heroDescription:
      "Pay-per-click advertising is the fastest way to put your business in front of buyers who are actively ready to act—but only when it's managed with precision. We run Google and Meta campaigns that are built to convert, not just spend.",
    heroImage: "https://images.unsplash.com/photo-1773883926069-4135f1fdd710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWlkJTIwYWR2ZXJ0aXNpbmclMjBnb29nbGUlMjBhZHMlMjBjYW1wYWlnbiUyMGRpZ2l0YWx8ZW58MXx8fHwxNzc0NDE4NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: TrendingUp,
    accentColor: "#E85D26",
    stats: [
      { value: "3.8x", label: "Average Return on Ad Spend" },
      { value: "47%", label: "Lower Cost-Per-Acquisition" },
      { value: "5 days", label: "Average Campaign Launch Time" },
    ],
    challenge:
      "Most PPC campaigns are set up once and left to run—bloated keyword lists, generic ad copy, traffic sent to homepage, and no real conversion tracking. Budgets get spent, but the data to improve is never collected. The result is a month-over-month drain that never gets better.",
    solution:
      "We build campaigns with the end conversion in mind from day one. Every audience segment, ad group, bid strategy, and landing page is designed as part of a cohesive system—not a collection of independent settings. We track everything, test constantly, and optimize with real data.",
    Graphic: PPCGraphic,
    steps: [
      {
        n: "01",
        title: "Audience & Market Research",
        desc: "We define your ideal customer profile, analyze competitor ad strategies, map keyword intent, and identify the highest-value segments to target first.",
      },
      {
        n: "02",
        title: "Campaign Architecture",
        desc: "We structure campaigns with clean ad group segmentation, precise match types, robust negative keyword lists, and audience exclusions to prevent waste.",
      },
      {
        n: "03",
        title: "Ad Creative Development",
        desc: "We write high-converting ad copy, design visual creatives for display and social, and build landing pages optimized for each campaign's specific intent.",
      },
      {
        n: "04",
        title: "Bid Strategy & Budget Allocation",
        desc: "We configure smart bidding strategies, set up conversion tracking in GA4 and the ad platforms, and allocate budget across campaigns based on performance tiers.",
      },
      {
        n: "05",
        title: "Continuous Optimization",
        desc: "Weekly bid adjustments, creative A/B tests, negative keyword expansion, and monthly strategy reviews—we treat every campaign as a living system, not a set-it-and-forget-it setup.",
      },
    ],
    deliverables: [
      "Google Search & Performance Max campaign management",
      "Meta (Facebook & Instagram) Ads management",
      "Custom audience targeting & lookalike builds",
      "Ad creative copywriting & design",
      "Landing page optimization recommendations",
      "Full conversion tracking setup (GA4 + platform pixels)",
      "Bi-weekly optimization reports",
      "Monthly strategy review calls",
    ],
  },
  {
    slug: "reputation-management",
    title: "Reputation Management",
    tagline: "Control the narrative. Earn the trust that wins business.",
    heroDescription:
      "Your online reputation is often the first thing a potential customer sees—and it shapes their decision before they ever speak to you. We proactively monitor, manage, and improve how your business appears across every major review platform and search result.",
    heroImage: "https://images.unsplash.com/photo-1680986070892-1b64bfe03338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjByZXB1dGF0aW9uJTIwbWFuYWdlbWVudCUyMHJldmlld3MlMjB0cnVzdCUyMGJyYW5kfGVufDF8fHx8MTc3NDQyMDA5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Shield,
    accentColor: "#0F4C81",
    stats: [
      { value: "+1.7★", label: "Avg. Star Rating Improvement" },
      { value: "3x", label: "More Reviews Generated" },
      { value: "24 hrs", label: "Avg. Response Time to Reviews" },
    ],
    challenge:
      "One bad review on Google can cost you dozens of customers—and most businesses have no system to respond, recover, or build a counterweight of positive feedback. Worse, negative content in search results can linger for years, quietly turning away prospects who never tell you why they didn't call.",
    solution:
      "We take a proactive, 360° approach: monitoring your reputation across Google, Yelp, BBB, and industry-specific platforms; responding professionally to every review; and implementing ethical review generation systems that build a positive track record that speaks for itself.",
    Graphic: ReputationGraphic,
    steps: [
      {
        n: "01",
        title: "Reputation Audit",
        desc: "We audit your current standing across all major review platforms, search result pages, and social mentions—giving you a clear picture of where you stand and what's at risk.",
      },
      {
        n: "02",
        title: "Review Monitoring Setup",
        desc: "We configure real-time alerts across Google, Yelp, Facebook, BBB, and industry-specific directories so no review goes unnoticed, regardless of where it's posted.",
      },
      {
        n: "03",
        title: "Response Management",
        desc: "We craft and post timely, professional responses to all reviews—positive and negative—demonstrating accountability, building public trust, and turning critics into opportunities.",
      },
      {
        n: "04",
        title: "Review Generation Campaigns",
        desc: "We implement ethical, compliant review request systems—via email, SMS, and QR code—that consistently prompt satisfied customers to share their experience on the platforms that matter most.",
      },
      {
        n: "05",
        title: "Suppression & Content Strategy",
        desc: "For businesses dealing with damaging search results, we build a content strategy that earns positive placements—pushing unfavorable results down through legitimate, sustainable authority building.",
      },
    ],
    deliverables: [
      "Full online reputation audit (all major platforms)",
      "Real-time review monitoring & alert setup",
      "Professional review responses (positive & negative)",
      "Ethical review generation system (email/SMS/QR)",
      "Google Business Profile optimization",
      "Negative content suppression strategy",
      "Monthly reputation score reporting",
      "Quarterly strategy review call",
    ],
  },
  {
    slug: "branding",
    title: "Branding",
    tagline: "Your brand is more than a logo. It's a feeling.",
    heroDescription:
      "A strong brand makes every other marketing investment work harder. It's the difference between a business people recognize and one they remember. We build brand identities that are distinctive, intentional, and built to last.",
    heroImage: "https://images.unsplash.com/photo-1760386129108-d17b9cdfc4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwbG9nbyUyMGNyZWF0aXZlfGVufDF8fHx8MTc3NDM1Njc5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: Palette,
    accentColor: "#059669",
    stats: [
      { value: "200+", label: "Brand Identities Delivered" },
      { value: "3 wks", label: "Average Full System Delivery" },
      { value: "100%", label: "Original, Custom-Designed Work" },
    ],
    challenge:
      "Too many businesses operate with a brand that was cobbled together over time—a logo from a freelancer, colors from a template, a voice that's never been defined. The result is a fragmented identity that confuses customers and undermines trust before you've even had a chance to speak.",
    solution:
      "We approach branding as a strategic discipline first, a design exercise second. We start with your business goals, target audience, and competitive landscape—then build a visual and verbal identity system that's distinctive, consistent, and deeply aligned with who you are and where you're going.",
    Graphic: BrandingGraphic,
    steps: [
      {
        n: "01",
        title: "Discovery Workshop",
        desc: "We run a facilitated session exploring your brand values, mission, target audience, personality, and long-term positioning goals—the foundation everything else is built on.",
      },
      {
        n: "02",
        title: "Competitive Analysis",
        desc: "We map your competitive landscape visually and verbally—identifying whitespace, differentiation opportunities, and the positioning that will make your brand impossible to ignore.",
      },
      {
        n: "03",
        title: "Concept Development",
        desc: "We present multiple strategic directions—mood boards, logo explorations, color and type pairings—each backed by a clear rationale, not just aesthetics.",
      },
      {
        n: "04",
        title: "Design System Build",
        desc: "We finalize your logo suite, color palette, typography system, pattern library, and iconography—creating a complete visual language for your brand.",
      },
      {
        n: "05",
        title: "Brand Guidelines Delivery",
        desc: "We deliver a comprehensive brand standards document covering logo usage, color specs, typography rules, voice & tone guidelines, and application examples.",
      },
    ],
    deliverables: [
      "Primary, secondary & icon logo suite",
      "Color palette with hex, RGB & CMYK values",
      "Typography system (primary & secondary fonts)",
      "Brand voice & messaging guide",
      "Pattern & visual elements library",
      "Business card & letterhead templates",
      "Social media profile & cover templates",
      "Brand guidelines document (PDF & Figma)",
    ],
  },
  {
    slug: "conversion",
    title: "Conversion Rate Optimization",
    tagline: "More traffic isn't always the answer. Better conversion is.",
    heroDescription:
      "You don't always need more visitors—you need to make more of the ones you already have. CRO is one of the highest-ROI investments a business can make, because you're extracting more revenue from traffic you're already paying for.",
    heroImage: "https://images.unsplash.com/photo-1638281269990-8fbe0db9375e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXJzaW9uJTIwcmF0ZSUyMG9wdGltaXphdGlvbiUyMFVYJTIwdGVzdGluZyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzQ0MTg0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: BarChart2,
    accentColor: "#0d9488",
    stats: [
      { value: "+37%", label: "Avg. Conversion Rate Lift" },
      { value: "61%", label: "Avg. Reduction in Cost-Per-Lead" },
      { value: "30 days", label: "Time to First Measurable Results" },
    ],
    challenge:
      "Most websites are full of friction points that nobody notices until they're mapped. Forms that ask too much. Headlines that don't speak to the visitor's real concern. CTAs buried below the fold. Checkout flows with unnecessary steps. Each one quietly bleeds conversions—and most businesses have no idea how much they're losing.",
    solution:
      "We combine qualitative research and quantitative data to find exactly where your funnel is leaking—then we run controlled experiments to fix it. Every test is hypothesis-led, statistically managed, and tied to real business outcomes: form fills, calls, purchases, or whatever conversion matters most to you.",
    Graphic: CROGraphic,
    steps: [
      {
        n: "01",
        title: "Analytics & Funnel Audit",
        desc: "We dig into GA4, heatmaps, and session recordings to identify where users are dropping off, which pages have the highest exit rates, and where friction is killing conversions.",
      },
      {
        n: "02",
        title: "User Research",
        desc: "We conduct user testing sessions and surveys to understand the 'why' behind the data—uncovering objections, confusion points, and missed messaging opportunities.",
      },
      {
        n: "03",
        title: "Hypothesis Development",
        desc: "We build a prioritized test roadmap ranked by potential impact, implementation effort, and statistical confidence—so we're always testing the things that matter most first.",
      },
      {
        n: "04",
        title: "A/B Testing",
        desc: "We design, develop, and run controlled A/B and multivariate experiments on landing pages, forms, CTAs, headlines, and checkout flows—letting data pick the winner.",
      },
      {
        n: "05",
        title: "Implementation & Iteration",
        desc: "Winning variants are implemented site-wide. Learnings feed the next round of tests. CRO is not a one-time project—it's a continuous improvement loop that compounds over time.",
      },
    ],
    deliverables: [
      "GA4 & heatmap analysis report",
      "Full conversion funnel audit",
      "User testing sessions (5–10 participants)",
      "Prioritized test roadmap",
      "A/B test setup, management & reporting",
      "Landing page redesign recommendations",
      "Form & checkout optimization",
      "Monthly CRO performance reporting",
    ],
  },
];

const serviceMap = Object.fromEntries(servicesData.map((s) => [s.slug, s]));

// ─── Page Component ───────────────────────────────────────────────────────────

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceMap[slug] : null;

  if (!service) return <Navigate to="/" replace />;

  const { title, tagline, heroDescription, heroImage, icon: Icon, accentColor, stats,
    challenge, solution, Graphic, steps, deliverables } = service;

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/80 to-[#0B1F3A]/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-300 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/#services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">{title}</span>
          </nav>

          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${accentColor}33`, border: `1.5px solid ${accentColor}80` }}>
              <Icon className="w-7 h-7" style={{ color: accentColor }} />
            </div>
            <h1 className="text-white" style={{ fontSize: "clamp(30px, 5vw, 56px)", fontWeight: "900", lineHeight: "1.1" }}>
              {title}
            </h1>
          </div>

          <p className="text-blue-100 max-w-2xl mb-10" style={{ fontSize: "clamp(16px, 2vw, 20px)", lineHeight: "1.6" }}>
            {tagline}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
                <div className="text-white" style={{ fontSize: "22px", fontWeight: "900" }}>{s.value}</div>
                <div className="text-blue-300 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview + Graphic ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div>
              <span className="text-[#E85D26] text-sm font-bold tracking-widest uppercase">The Challenge</span>
              <h2 className="text-[#0B1F3A] mt-3 mb-5" style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: "800", lineHeight: "1.2" }}>
                Why Most Businesses Struggle Here
              </h2>
              <p className="text-gray-600 mb-10" style={{ fontSize: "16px", lineHeight: "1.75" }}>{challenge}</p>

              <span className="text-[#E85D26] text-sm font-bold tracking-widest uppercase">Our Solution</span>
              <h3 className="text-[#0B1F3A] mt-3 mb-5" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: "800", lineHeight: "1.2" }}>
                How Seek Digital Approaches It
              </h3>
              <p className="text-gray-600 mb-8" style={{ fontSize: "16px", lineHeight: "1.75" }}>{solution}</p>
              <p className="text-gray-600 mb-8" style={{ fontSize: "16px", lineHeight: "1.75" }}>{heroDescription}</p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#E85D26] text-white font-bold hover:bg-[#d04e1b] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get a Free Strategy Call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Graphic */}
            <div className="sticky top-28">
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-white p-4">
                <Graphic />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="py-24 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#E85D26] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#0F4C81] blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#E85D26] text-sm font-bold tracking-widest uppercase">How We Work</span>
            <h2 className="text-white mt-3" style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: "900" }}>
              Our Approach to {title}
            </h2>
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.n} className="flex gap-6 sm:gap-10 relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-6 sm:left-7 top-16 w-px h-full bg-white/10" />
                )}
                {/* Number */}
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#E85D26]/20 border border-[#E85D26]/40 flex items-center justify-center">
                  <span className="text-[#E85D26] font-black" style={{ fontSize: "14px" }}>{step.n}</span>
                </div>
                {/* Content */}
                <div className="pb-12">
                  <h3 className="text-white mb-2" style={{ fontSize: "20px", fontWeight: "700" }}>{step.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#E85D26] text-sm font-bold tracking-widest uppercase">What You Get</span>
            <h2 className="text-[#0B1F3A] mt-3" style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: "900" }}>
              Everything Included
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto" style={{ fontSize: "16px", lineHeight: "1.6" }}>
              No surprises, no hidden add-ons. Here's exactly what's delivered when you partner with us on {title}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#E85D26] mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-[#0F4C81] to-[#0B1F3A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-5" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "900", lineHeight: "1.15" }}>
            Ready to Get Started with {title}?
          </h2>
          <p className="text-blue-200 mb-10" style={{ fontSize: "17px", lineHeight: "1.6" }}>
            Let's talk about your goals and build a strategy that drives real results. No commitment required—just a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#E85D26] text-white font-bold hover:bg-[#d04e1b] transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ fontSize: "16px" }}
            >
              Request a Free Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+18602658630"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-200"
              style={{ fontSize: "16px" }}
            >
              Call (860) 265-8630
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}