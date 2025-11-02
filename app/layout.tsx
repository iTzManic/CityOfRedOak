import './globals.css';
import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';

// 1. IMPORT the necessary tools
import { getAlertBanner } from '../sanity/lib/queries';
import { SanityLive } from '../sanity/lib/live'; // Correct path
import { draftMode } from 'next/headers';

// 2. REMOVED: We no longer need to import 'client' here
// import { client } from '../sanity/lib/client';

export const metadata = {
  title: 'City of Red Oak', // Updated title
  description: 'Official website for the City of Red Oak, Iowa',
};

// 3. MAKE THE LAYOUT AN ASYNC FUNCTION
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // 4. FETCH THE DATA ON THE SERVER
  const alertMessage = await getAlertBanner();
  
  // 5. CHECK if Draft Mode is enabled
  const isDraftMode = (await draftMode()).isEnabled;

  return (
    <html lang="en">
      <body>
        
        {/* 6. PASS the message AND draft mode status to the Header */}
        <Header alertMessage={alertMessage} isDraftMode={isDraftMode} />
        
        {children}
        
        <Footer />
        
        {/* 7. THIS IS THE FIX:
          The <SanityLive> component does not need the 'client' prop
          because it was already configured with it in sanity/lib/live.ts
        */}
        {isDraftMode && <SanityLive />}
      </body>
    </html>
  );
}