"use client"

import { useEffect, useRef } from "react"

const steps = [
  {
    id: "assess",
    title: "Assess",
    number: "01",
    content:
      "We confirm scope, constraints, dependencies and success measures through structured discovery and current-state review. The objective is to reduce ambiguity before design begins, especially around operational constraints, data boundaries, workload behavior and stakeholder expectations. Assess produces a shared understanding of what must be built, why it matters and how success will be measured.",
    outputs: [
      "Current-state review",
      "Scope and constraint map",
      "Success measures",
      "Stakeholder/dependency map",
    ],
    exit: "Scope, assumptions, decision owners and success measures are agreed.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 10V14L17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 18L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "design",
    title: "Design",
    number: "02",
    content:
      "We translate discovery into a delivery-ready blueprint that can be executed consistently across industries. Decisions and dependencies are documented, and the solution is sized and governed for real operating conditions. This stage produces the architecture pack and delivery controls that make implementation predictable and defensible.",
    outputs: [
      "HLD/LLD",
      "Data flows and trust boundaries",
      "Sizing/performance baseline",
      "Security-by-design controls",
      "Delivery and test plan",
    ],
    exit: "Design, assumptions, acceptance tests, risks and open decisions are reviewed and owned.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="16" y="4" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4" y="16" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="16" y="16" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="8" y1="12" x2="8" y2="16" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: "build",
    title: "Build",
    number: "03",
    content:
      "We implement the design using repeatable deployment patterns and controlled configuration, then integrate the stack so it operates as one system, not a set of components. Observability is wired in, controls are enforced, and the platform is validated against objective criteria. Handover is part of delivery, not an afterthought.",
    outputs: [
      "Standardized deployment",
      "End-to-end integration",
      "Functional/performance/resilience testing",
      "Rollback readiness",
      "Runbooks and dashboards",
    ],
    exit: "Agreed tests pass, exceptions are documented, and operational readiness is signed off.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 24L14 4L24 24H4Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 20L14 10L20 20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" fill="none" />
      </svg>
    ),
  },
  {
    id: "operate",
    title: "Operate",
    number: "04",
    content:
      "We run the platform against defined service levels and improve it as demand, data and dependencies evolve. Day-2 operations are treated as an engineered capability: proactive monitoring, safe change, cost and performance optimization, and governance evidence are built into the operating rhythm.",
    outputs: [
      "SLO-driven operations",
      "Controlled releases and rollback",
      "Capacity/performance tuning",
      "Patching/access reviews/audit evidence",
      "Lifecycle reporting",
    ],
    exit: "Service reviews confirm SLO, risk, capacity and improvement priorities.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 8V14L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
  },
]

export default function ApproachTimeline() {
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
        {/* Section Header */}
        <div className="max-w-3xl mb-16 fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mb-6">
            Our methodology
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            A systematic approach ensures predictable outcomes and continuous improvement.
          </p>
        </div>

        {/* Progress rail (visual only, decorative) */}
        <div className="hidden lg:block mb-4 fade-up delay-100" aria-hidden="true">
          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />
            <div className="relative grid grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1FB6C1] text-[#0B1F33] relative z-10">
                    {step.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Single source of truth: one stage list, used at every breakpoint */}
        <ol className="space-y-6 lg:space-y-4">
          {steps.map((step, index) => (
            <li
              key={step.id}
              id={step.id}
              className="fade-up scroll-mt-32 rounded-xl border border-gray-200/80 p-6 lg:p-8 hover:border-[#1FB6C1]/30 transition-colors"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="grid lg:grid-cols-[auto,1fr] gap-6 lg:gap-10 items-start">
                <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1FB6C1] text-[#0B1F33] lg:hidden shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-xs font-medium text-[#1FB6C1]">{step.number}</span>
                  <h3 className="text-xl lg:text-2xl font-semibold text-[#111827]">{step.title}</h3>
                </div>

                <div>
                  <p className="text-[#6B7280] leading-relaxed mb-6 max-w-3xl">{step.content}</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-semibold text-[#111827] mb-2">Outputs</p>
                      <ul className="space-y-1.5">
                        {step.outputs.map((output) => (
                          <li key={output} className="flex items-start gap-2 text-sm text-[#6B7280]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1FB6C1] mt-1.5 shrink-0" />
                            {output}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#111827] mb-2">Exit criteria</p>
                      <p className="text-sm text-[#6B7280] leading-relaxed">{step.exit}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
