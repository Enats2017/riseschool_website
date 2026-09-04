import Image from "next/image";
import Link from "next/link";
import { dinNext } from "@/app/fonts";

export default function Footer() {
  return (
    <footer className="bg-[#831719] text-white px-2 md:px-4 py-8 md:py-16 overflow-x-hidden">
      <div className="w-full">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

          {/* Logo + Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex justify-center md:justify-start mb-6">
              <Image
                src="/images/logo.png"
                alt="Rise School Logo"
                width={200}
                height={60}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-base leading-relaxed opacity-90 max-w-[300px] md:max-w-full">
              Rising India School of Excellence is Goa’s first Apple-enabled, future-ready school blending global curriculum with personalized learning. Designed to nurture leaders, innovators, and changemakers, it is the School of Tomorrow, built today.
            </p>
          </div>

          {/* Links Section */}
          <div className="md:col-span-1">
            <h3 className={`text-[22px] md:text-[26px] mb-6 ${dinNext.className}`}>Company</h3>

            {/* Mobile: two columns */}
            <div className="grid grid-cols-2 gap-y-2 md:hidden text-[17px]">
              <Link href="#" className="hover:text-red-200 transition-colors">Home</Link>
              {/* <Link href="#" className="hover:text-red-200 transition-colors">Programs</Link> */}
              <Link href="#" className="hover:text-red-200 transition-colors">About us</Link>
              <Link href="#" className="hover:text-red-200 transition-colors">Campus</Link>
              <Link href="#" className="hover:text-red-200 transition-colors">ACADEMICS</Link>
              <Link href="#" className="hover:text-red-200 transition-colors">TECHNOLOGY</Link>
              <Link href="#" className="hover:text-red-200 transition-colors">BEYOND ACADEMICS</Link>
              <Link href="/contact" className="hover:text-red-200 transition-colors">NEWS & EVENTS</Link>
              <Link href="/career" className="hover:text-red-200 transition-colors">Careers</Link>
              <Link href="/blog" className="hover:text-red-200 transition-colors">Blog</Link>
              <Link href="/terms" className="hover:text-red-200 transition-colors">Contact Us</Link>
            </div>

            {/* Desktop: stacked links */}
            <ul className="hidden md:block space-y-2 text-[17px]">
              <li><Link href="#" className="hover:text-red-200 transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="hover:text-red-200 transition-colors">About us</Link></li>
              <li><Link href="/campus" className="hover:text-red-200 transition-colors">Campus </Link></li>
              <li><Link href="academic-life" className="hover:text-red-200 transition-colors">Academics</Link></li>
              <li><Link href="technology" className="hover:text-red-200 transition-colors">Technology</Link></li>
            </ul>
          </div>

          {/* Programs & Policies */}
          <div className="md:col-span-1 transform translate-y-8">

            {/* Mobile: two columns */}
          
            {/* Desktop: stacked links */}
            <ul className="hidden md:block space-y-2 text-[18px] mt-6">
              <li><Link href="beyond-academics" className="hover:text-red-200 transition-colors">BEYOND ACADEMICS</Link></li>
              <li><Link href="#" className="hover:text-red-200 transition-colors">News & Events</Link></li>
              <li><Link href="/career" className="hover:text-red-200 transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-red-200 transition-colors">Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-red-200 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start ">
            <h3 className={`text-[22px] md:text-[26px] mb-6 ${dinNext.className}`}>Contact Us</h3>
            <div className="space-y-4 text-[17px]">
              <p className="leading-relaxed break-words">
              Yashvitaru Education Trust, Gulf of Goa, Survey no 178/1, A-Q of Sancoale Village, Mormugao, Goa 403710 
              </p>
              <Link href="tel:+918657015231" className="hover:text-red-200 transition-colors block">
              +91 86570 15231
              </Link>
              <Link href="mailto:admissions.goa@riseschool.in" className="hover:text-red-200 transition-colors block break-words">
                admissions.goa@riseschool.in
              </Link>
              <p className="leading-relaxed pt-2">School Time: 8:30 AM - 3:00 PM</p>
            </div>
          </div>

        </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-red-700 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[16px] md:text-[18px]">
            &copy; 2025 <span className="font-semibold">Rising India School of Excellence.</span> <span className="opacity-70">All Right Reserved.</span>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <Link 
              href="https://www.instagram.com/riseinternational.school?igsh=YWN4eWp6dWw2NDU5&utm_source=qr"
              target="_blank"
              className="px-6 py-2 border border-white/30 rounded-full text-xs font-medium hover:bg-white/10 transition-colors"
            >
              INSTAGRAM
            </Link>
            <Link 
              href="https://www.facebook.com/p/Rising-India-School-of-Excellence-61580507945155/" 
              className="px-6 py-2 border border-white/30 rounded-full text-xs font-medium hover:bg-white/10 transition-colors"
            >
              FACEBOOK
            </Link>
             <Link 
              href="https://in.linkedin.com/company/rising-india-school-of-excellence" 
              className="px-6 py-2 border border-white/30 rounded-full text-xs font-medium hover:bg-white/10 transition-colors"
            >
              LINKEDIN
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
