import type {Metadata} from 'next';

import {SidebarLayout} from '@/components/layout';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {BUCKET_URL} from '@/const';
import {Library} from '@/types';

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

async function getLibrary(): Promise<Library> {
    const repoUrl = BUCKET_URL;

    try {
        const res = await fetch(repoUrl, {
            headers: {Accept: 'application/vnd.github.v3+json'},
            next: {revalidate: 3600},
        });

        if (!res.ok) throw new Error('Failed to fetch folders');

        const data: {name: string; type: string}[] = await res.json();

        return data
            .filter(item => item.type === 'dir')
            .map(item => ({name: item.name, slug: encodeURIComponent(item.name)}));
    } catch (error) {
        console.error('Error fetching folders:', error);
        return [];
    }
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const library = await getLibrary();

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-reshape-300 flex flex-row antialiased`}
            >
                <SidebarLayout library={library}>{children}</SidebarLayout>
            </body>
        </html>
    );
}
