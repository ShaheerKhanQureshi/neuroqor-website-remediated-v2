"use client"

import { useEffect, useRef } from "react"

const industries = [
  {
    id: "telecom",
    title: "Telecom",
    subtitle: "Performance and resilience",
    content: "Carriers require low-latency AI workloads and constant uptime. Our AI infrastructure delivers predictable throughput and scales with subscriber growth. Sovereign deployment options support carrier-grade isolation where spectrum data or lawful intercept capabilities necessitate on-premises control. Observability and dark SOC services reduce mean time to detect by automating triage and enabling analysts to focus on network-specific threats.",
    capabilities: [
      "Low-latency AI workloads for real-time decisions",
      "Sovereign deployments for carrier-grade isolation",
      "Dark SOC for automated triage and detection",
      "Scalable infrastructure for subscriber growth",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4V28M8 8V24M24 8V24M4 12V20M28 12V20" stroke="#1FB6C1" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "government",
    title: "Government",
    subtitle: "Sovereignty and compliance",
    content: "Public-sector and national programs require systems that preserve sovereignty, maintain clear control boundaries and remain operable under restricted connectivity. NeuroQor designs and integrates on-premises, private-cloud and air-gapped platforms with controlled transfer processes, auditable data flows and lifecycle governance.",
    capabilities: [
      "Sovereign and air-gapped infrastructure patterns",
      "Identity-aware segmentation and controlled interoperability",
      "Private AI platforms for sensitive workloads",
      "Audit trails, operational continuity and controlled change",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L4 10V16C4 22 9 27 16 28C23 27 28 22 28 16V10L16 4Z" stroke="#1FB6C1" strokeWidth="2" fill="none"/>
        <path d="M12 16L15 19L20 13" stroke="#1FB6C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "banking",
    title: "Banking",
    subtitle: "Trust and continuous assurance",
    content: "Financial institutions need modern platforms without compromising resilience, privacy or auditability. NeuroQor integrates private cloud, data, AI, secure networking, observability and cyber operations into controlled environments that support digital services while preserving operational assurance.",
    capabilities: [
      "Private cloud and data-platform modernization",
      "AI infrastructure for governed analytics and decision support",
      "Secure segmentation, identity and telemetry integration",
      "SLO-driven operations, resilience and audit evidence",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="20" rx="2" stroke="#1FB6C1" strokeWidth="2" fill="none"/>
        <path d="M4 14H28" stroke="#1FB6C1" strokeWidth="2"/>
        <rect x="8" y="18" width="8" height="4" rx="1" stroke="#1FB6C1" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
]

export default function IndustriesContent() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Jump nav — accessible links to each fully-rendered section below */}
        <nav aria-label="Industries" className="flex flex-col sm:flex-row gap-2 mb-16 fade-up">
          {industries.map((industry) => (
            <a
              key={industry.id}
              href={`#${industry.id}`}
              className="px-6 py-4 rounded-lg text-left transition-all duration-200 border flex-1 bg-[#F4F6F8] text-[#111827] border-transparent hover:border-[#1FB6C1]/30 hover:bg-[#0B1F33] hover:text-white group"
            >
              <span className="font-semibold block">{industry.title}</span>
              <span className="text-sm text-[#6B7280] group-hover:text-[#9CA3AF]">
                {industry.subtitle}
              </span>
            </a>
          ))}
        </nav>

        {/* All three industries fully rendered — no content hidden behind interaction */}
        <div className="space-y-12">
          {industries.map((industry) => (
            <div key={industry.id} id={industry.id} className="fade-up scroll-mt-32">
              <div className="relative rounded-xl bg-[#F4F6F8] p-8 lg:p-12 overflow-hidden">
                <div className="relative grid lg:grid-cols-2 gap-12 items-start">
                  {/* Content */}
                  <div>
                    <div className="w-16 h-16 rounded-xl bg-[#0B1F33] flex items-center justify-center mb-6">
                      {industry.icon}
                    </div>

                    <h2 className="text-3xl font-semibold text-[#111827] mb-2">
                      {industry.title}
                    </h2>
                    <p className="text-[#1FB6C1] font-medium mb-6">
                      {industry.subtitle}
                    </p>

                    <p className="text-[#6B7280] leading-relaxed">
                      {industry.content}
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div className="bg-white rounded-lg p-8 border border-gray-200/80">
                    <h3 className="text-lg font-semibold text-[#111827] mb-6">
                      Key Capabilities
                    </h3>
                    <ul className="space-y-4">
                      {industry.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
                            <path d="M6 10L9 13L14 7" stroke="#1FB6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-[#6B7280]">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
