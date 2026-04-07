// src/app/fonts.js
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

// DINNextLTPro-Condensed for headings (all weights)
export const dinNext = localFont({
  src: [
    {
      path: '/fonts/fonnts.com-DINNextLTPro-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/fonts/fonnts.com-DINNextLTPro-Condensed.ttf', // Regular
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/fonnts.com-DINNextLTPro-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/fonts/fonnts.com-DINNextLTPro-Regular.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '/fonts/fonnts.com-DINNextLTPro-BoldCondensed.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/fonnts.com-DINNextLTPro-Heavy.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-din', // optional for CSS variable usage
});

// Montserrat for paragraphs
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});
