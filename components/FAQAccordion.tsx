"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site";

export default function FAQAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isActive = active === index;
        return (
          <div key={faq.question} className="rounded-lg border border-blue-100 bg-white">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              onClick={() => setActive(isActive ? -1 : index)}
              aria-expanded={isActive}
            >
              <span className="font-bold text-ink-900">{faq.question}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-brand-600 transition ${isActive ? "rotate-180" : ""}`}
              />
            </button>
            {isActive ? <div className="px-5 pb-5 leading-7 text-ink-500">{faq.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
