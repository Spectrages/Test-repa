'use client';
import './globals.scss';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Provider, store } from "@hosting2023/redux-lib";

const DMSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Template_3',
  description: 'Template_3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={DMSans.className}>{children}</body>
      </html>
    </Provider>
  )
}
