import React from 'react';
import { Metadata } from 'next';

import '@/styles/colors.scss';
import '@/styles/globals.scss';
import 'swiper/css/bundle';

import { RootStyleRegistry } from '@/lib/providers';

export const metadata: Metadata = {};

export interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="mn">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </head>
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
