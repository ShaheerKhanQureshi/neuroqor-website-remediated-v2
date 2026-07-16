"use client"

import { useEffect, useRef } from "react"

const ecosystem = [
  {
    name: "ID Quantique & IonQ",
    description: "Quantum hardware and PQC innovations",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#1FB6C1" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="8" stroke="#1FB6C1" strokeWidth="1" strokeDasharray="4 3"/>
        <circle cx="12" cy="4" r="1.5" fill="#1FB6C1"/>
        <circle cx="12" cy="20" r="1.5" fill="#1FB6C1"/>
      </svg>
    ),
  },
  {
    name: "Dell, Cisco & H3C",
    description: "Compute, fabric and storage platforms",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="6" rx="1" stroke="#1FB6C1" strokeWidth="1.5"/>
        <rect x="3" y="14" width="18" height="6" rx="1" stroke="#1FB6C1" strokeWidth="1.5"/>
        <circle cx="6" cy="7" r="1" fill="#1FB6C1"/>
        <circle cx="6" cy="17" r="1" fill="#1FB6C1"/>
      </svg>
    ),
  },
  {
    name: "Trend Micro",
    description: "Threat detection and antivirus technologies",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L20 7V13C20 17 16 20 12 22C8 20 4 17 4 13V7L12 3Z" stroke="#1FB6C1" strokeWidth="1.5" fill="none"/>
        <path d="M9 12L11 14L15 10" stroke="#1FB6C1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const whatWeDeliver = [
  "AI platform foundations",
  "HPC/GPU infrastructure",
  "Private cloud and Kubernetes",
  "Secure networking and boundaries",
  "Observability and Day-2 operations",
  "Quantum-ready assurance",
]

const howWeDeliver = [
  { title: "Assess", description: "Scope, constraints and success measures." },
  { title: "Design", description: "HLD/LLD, sizing baselines, quantum-ready posture and acceptance criteria." },
  { title: "Build", description: "Integrate the stack and validate performance, resilience and security controls." },
  { title: "Operate", description: "SLO-driven Day-2 with safe change and continuous optimization." },
]

export default function AboutContent() {
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
        {/* What we do */}
        <div className="mb-24 fade-up">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#111827] mb-6">What we do</h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              NeuroQor delivers end-to-end integration outcomes, not isolated components. We take accountability from architecture through implementation to ongoing operations so platforms remain reliable, measurable and defensible long after go-live.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          <div className="fade-up">
            <h2 className="text-3xl font-semibold text-[#111827] mb-6">Mission</h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Our mission is to design, integrate, and operate sovereign infrastructure for regulated environments built for AI platforms and quantum-ready assurance, because capability and trust must evolve together.
            </p>
          </div>
          <div className="fade-up delay-100">
            <h2 className="text-3xl font-semibold text-[#111827] mb-6">Vision</h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Our vision is to make trusted, sovereign AI the default in regulated industries, delivered through resilient platforms, measurable operational assurance and privacy by design, while preparing organizations for the quantum era.
            </p>
          </div>
        </div>

        {/* What we deliver */}
        <div className="mb-24 fade-up delay-100">
          <div className="bg-[#F4F6F8] rounded-xl p-8 lg:p-12">
            <h2 className="text-3xl font-semibold text-[#111827] mb-8">What we deliver</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatWeDeliver.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1FB6C1] mt-2 shrink-0" />
                  <span className="text-[#111827] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How we deliver */}
        <div className="mb-24 fade-up delay-200">
          <h2 className="text-3xl font-semibold text-[#111827] mb-8">How we deliver</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeDeliver.map((stage, index) => (
              <div key={stage.title} className="rounded-lg border border-gray-200/80 p-6">
                <span className="text-xs font-medium text-[#1FB6C1]">{`0${index + 1}`}</span>
                <h3 className="text-lg font-semibold text-[#111827] mb-2">{stage.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Origins */}
        <div className="mb-24 fade-up delay-200">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#111827] mb-6">Origins</h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              NeuroQor was founded by engineers and security practitioners who saw a gap between high-performance computing and real-world operational requirements. We set out to build systems that meet stringent regulatory and availability needs.
            </p>
          </div>
        </div>

        {/* Operational assurance */}
        <div className="mb-24 fade-up delay-300">
          <div className="bg-[#F4F6F8] rounded-xl p-8 lg:p-12">
            <h2 className="text-3xl font-semibold text-[#111827] mb-6">Operational assurance</h2>
            <p className="text-lg text-[#6B7280] leading-relaxed max-w-3xl">
              In regulated environments, "working" is not enough. Platforms must be operable, auditable and resilient under real constraints. We engineer assurance through measurable controls, traceability of change and a disciplined Day-2 operating rhythm.
            </p>
          </div>
        </div>

        {/* Technology ecosystem */}
        <div className="mb-24 fade-up delay-400">
          <h2 className="text-3xl font-semibold text-[#111827] mb-6">Technology ecosystem</h2>
          <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-3xl">
            We integrate proven platforms from global technology ecosystems into a cohesive, supportable stack. Where formal alliances exist, we engage OEM ecosystems for design validation and lifecycle continuity, without locking clients into a single-vendor architecture.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {ecosystem.map((item) => (
              <div
                key={item.name}
                className="bg-[#F4F6F8] rounded-lg p-6 border border-transparent hover:border-[#1FB6C1]/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0B1F33] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#111827] mb-2">{item.name}</h3>
                <p className="text-sm text-[#6B7280]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
