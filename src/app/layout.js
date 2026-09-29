import "./globals.css";
import { Montserrat } from 'next/font/google';
import LenisProvider from "./components/LenisProvider";
import StickyAdmissionButton from "./components/StickyAdmissionButton";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', "800"],
});

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import GTMRouteTracker from "./components/gtm/GTMRouteTracker";

export const metadata = {
  title: "Rising India",
  description: "Rising India School of Excellence is Goa’s first Apple-enabled, future-ready school blending global curriculum with personalized learning. Designed to nurture leaders, innovators, and changemakers, it is the School of Tomorrow, built today",
  icons: {
    icon: "/images/rise-lodha-logo-for-svg.svg", // favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" nighteye="disabled" className={montserrat.className}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G97N98TX13"></script>
        <Script id="ga-script" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-G97N98TX13');
  `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PVV4PDVX');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PVV4PDVX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <GTMRouteTracker />
        <LenisProvider>
          <Navbar />
          <StickyAdmissionButton />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}