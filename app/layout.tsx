import type {Metadata} from 'next';

import {SidebarLayout} from '@/components/layout';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Image Viewer',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-reshape-300 flex flex-row antialiased`}
            >
                <SidebarLayout>{children}</SidebarLayout>
            </body>
        </html>
    );
}
