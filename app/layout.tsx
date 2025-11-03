import './globals.css';
import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';

// --- SANITY FETCHING TEMPORARILY DISABLED FOR TESTING ---
// import { getAlertBanner } from '../sanity/lib/queries';
// import { SanityLive } from '../sanity/lib/live'; 
// import { draftMode } from 'next/headers';
// import { client } from '../sanity/lib/client';
// --- END OF DISABLED CODE ---

export const metadata = {
  title: 'City of Red Oak', // Updated title
  description: 'Official website for the City of Red Oak, Iowa',
};

// --- REVERTED TO A SYNC FUNCTION FOR TESTING ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // --- HARD-CODED VALUES FOR TESTING ---
  // We are not fetching anything, just passing 'null'
  const alertMessage = null; 
  const isDraftMode = false;

  return (
    <html lang="en">
      <body>
        
        {/* We pass the hard-coded values to the Header */}
        <Header alertMessage={alertMessage} isDraftMode={isDraftMode} />
        
        {children}
        
        <Footer />
        
        {/* --- SANITY LIVE PREVIEW TEMPORARILY DISABLED --- */}
        {/* {isDraftMode && <SanityLive />} */}
      </body>
    </html>
  );
}