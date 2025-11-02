// This must be a client component to read the URL
"use client";

import { useSearchParams } from 'next/navigation';
import styles from './page.module.css'; // We will create this file next

// This is a special Next.js feature.
// It tells Next.js not to cache this page,
// so it's always fresh for every new search.
export const dynamic = 'force-dynamic';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q'); // 'q' is the parameter we set in Header.tsx

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Search Results for: <span>"{query}"</span>
      </h1>
      
      <div className={styles.results}>
        {/* THIS IS WHERE YOUR SEARCH LOGIC WILL GO.
          For now, we just show a placeholder.
        */}
        <p>
          Showing results for "{query}". (Search result logic is not implemented yet.)
        </p>
      </div>
    </main>
  );
}