import './globals.css';
import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; // 1. IMPORT THE FOOTER

export const metadata = {
  title: 'City of MyTown',
  description: 'Official website for the City of MyTown',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        
        {/* 'children' is your page.tsx content */}
        {children}
        
        <Footer /> {/* 2. ADD THE FOOTER HERE */}
      </body>
    </html>
  );
}