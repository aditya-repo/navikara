"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import BrandMark from "@/components/BrandMark";
import { siteConfig } from "@/lib/site-config";

export default function NavigationHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = siteConfig.navigation.main.map((link) => ({
    label: link.label,
    href: pathname === "/" && "homeHref" in link ? link.homeHref : link.href
  }));

  return (
    <header className="relative z-50">
      <div className="section-shell">
        <div className="flex items-center justify-between py-5">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
            <BrandMark />
            <div>
              <div className="text-lg font-semibold tracking-[0.08em] text-white">
                {siteConfig.business.name}
              </div>
              <div className="text-xs uppercase tracking-[0.28em] text-blue-100/75">
                {siteConfig.business.descriptor}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-[0.95rem] font-medium text-blue-50/[0.88] transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/[0.12] bg-white/[0.06] text-white transition hover:bg-white/10 md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <nav className="border-t border-white/10 pb-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-white/[0.06] py-3 text-sm font-medium text-blue-50/[0.88] transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
