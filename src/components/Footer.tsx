import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Skaya Dental</h2>
            <p className="text-white/70 block text-balance leading-relaxed">
              Premium, anxiety-free dentistry designed for your comfort and lasting health.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex uppercase tracking-wider text-white/50 text-sm">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-gold transition-colors">General Dentistry</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Cosmetic Treatments</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Implants & Surgery</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Invisalign & Orthodontics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex uppercase tracking-wider text-white/50 text-sm">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold shrink-0" size={20} />
                <span className="text-white/80 leading-snug">123 Wellness Way, Suite 100<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold shrink-0" size={20} />
                <a href="tel:+15551234567" className="hover:text-gold transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold shrink-0" size={20} />
                <a href="mailto:hello@skayadental.com" className="hover:text-gold transition-colors">hello@skayadental.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex uppercase tracking-wider text-white/50 text-sm">Office Hours</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex justify-between"><span>Monday - Friday</span> <span>8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>9:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between text-white/50"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Skaya Dental. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
