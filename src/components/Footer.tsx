import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#F0EAE1] text-[#4A4A4A] pt-24 overflow-hidden border-t border-[#1C1C1C]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section - Links and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-14 h-14 overflow-hidden rounded-full shadow-sm shrink-0">
                <Image src="/logo.png" alt="Skaya Dental Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl md:text-2xl tracking-[0.15em] uppercase text-[#1C1C1C] leading-none mb-1">
                  Skaya
                </span>
                <span className="font-heading font-light text-sm md:text-base tracking-[0.3em] uppercase text-[#1C1C1C] leading-none mb-1.5">
                  Dental
                </span>
                <span className="text-[10px] tracking-wider uppercase text-[#8C8C8C] font-body">
                  The smile unedited
                </span>
              </div>
            </div>
            <p className="text-[#4A4A4A] font-light text-xl max-w-sm mb-8 leading-relaxed">
              Redefining dental wellness through advanced technology and profound comfort.
            </p>
            <a href="mailto:hello@skayadental.com" className="group inline-flex items-center gap-2 text-[#C5A880] hover:text-[#1C1C1C] transition-colors text-lg font-medium">
              hello@skayadental.com
              <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div>
            <h4 className="text-[#1C1C1C] font-semibold mb-6 tracking-widest uppercase text-xs">Navigation</h4>
            <ul className="space-y-4 font-light">
              <li><Link href="#treatments" className="hover:text-[#C5A880] transition-colors">Treatments</Link></li>
              <li><Link href="#patient-stories" className="hover:text-[#C5A880] transition-colors">Patient Stories</Link></li>
              <li><Link href="#clinic" className="hover:text-[#C5A880] transition-colors">Our Clinic</Link></li>
              <li><Link href="#book" className="hover:text-[#C5A880] transition-colors">Book a Visit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1C1C1C] font-semibold mb-6 tracking-widest uppercase text-xs">Location</h4>
            <address className="not-italic space-y-4 font-light text-[#4A4A4A]">
              <p className="text-[#1C1C1C]">123 Wellness Way, Suite 100</p>
              <p>New York, NY 10001</p>
              <a href="tel:5551234567" className="block text-[#1C1C1C] hover:text-[#C5A880] transition-colors mt-4">
                (555) 123-4567
              </a>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-[#8C8C8C] pb-8">
          <p>&copy; {new Date().getFullYear()} Skaya Dental. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#1C1C1C] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#1C1C1C] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Massive Background Typography */}
      <div className="w-full relative mt-[-8vw] flex justify-center items-end pointer-events-none select-none opacity-20">
        <h1 className="text-[25vw] font-heading font-light leading-none text-[#C5A880] text-center m-0 p-0 tracking-tighter">
          SKAYA
        </h1>
      </div>
    </footer>
  );
}

