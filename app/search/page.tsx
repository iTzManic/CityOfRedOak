import React, { Suspense } from 'react'; // Import Suspense
import styles from './page.module.css';
import SearchContent from './SearchContent'; // Import our new client component

// This is now the main page component (a Server Component)
export default function SearchPage() {
  return (
    <main className={styles.main}>
      {/*
        This is the fix. We wrap the component that uses useSearchParams
        in a <Suspense> boundary.
      */}
      <Suspense fallback={<div className={styles.loading}>Loading search results...</div>}>
        <SearchContent />
      </Suspense>
    </main>
  );
}