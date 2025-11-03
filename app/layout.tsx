import './globals.css';
import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';

// 1. IMPORT the necessary tools
import { getAlertBanner } from '../sanity/lib/queries';
import { SanityLive } from '../sanity/lib/live'; 
import { draftMode } from 'next/headers';
import { client } from '../sanity/lib/client';

export const metadata = {
  title: 'City of Red Oak', // Updated title
  description: 'Official website for the City of Red Oak, Iowa',
};

// 2. MAKE THE LAYOUT AN ASYNC FUNCTION
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // 3. FETCH THE DATA ON THE SERVER
  const alertMessage = await getAlertBanner();
  
  // 4. CHECK if Draft Mode is enabled
  const isDraftMode = (await draftMode()).isEnabled;

  return (
    <html lang="en">
      <body>
        
        {/* 5. PASS the message AND draft mode status to the Header */}
        <Header alertMessage={alertMessage} isDraftMode={isDraftMode} />
        
        {children}
        
        <Footer />
        
        {/* 6. ADD THE SanityLive COMPONENT */}
        {isDraftMode && <SanityLive />}
      </body>
    </html>
  );
}