// This must be a client component to read the UR
"use client";

import { useSearchParams } from 'next/navigation';
import styles from './page.module.css'; // We re-use the same styles

export default function SearchContent() { //test
  const searchParams = useSearchParams();
  const query = searchParams.get('q'); // 'q' is the parameter we set in Header.tsx

  return (
    <div className={styles.results}>
      <h1 className={styles.title}>
        Search Results for: <span>"{query}"</span>
      </h1>
      
      {/* THIS IS WHERE YOUR SEARCH LOGIC WILL GO.
        For now, we just show a placeholder.
      */}
      <p>
        Showing results for "{query}". (Search result logic is not implemented yet.)
      </p>
    </div>
  );
}