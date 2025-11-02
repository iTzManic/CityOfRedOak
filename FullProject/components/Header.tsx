// This "use client" directive is important!
"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// 1. IMPORT THE MARQUEE AND AN ICON
import Marquee from "react-fast-marquee";
import { FaInfoCircle } from "react-icons/fa";

export default function Header() {
  
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  // --- THIS IS THE PERMANENTLY FIXED MAPS URL ---
  const address = "601 N 6th St, Red Oak, IA 51566";
  const mapsUrl = `http://googleusercontent.com/maps/?q=${encodeURIComponent(address)}`;
  const phoneUrl = "tel:712-623-6510";

  return (
    <header className={styles.header}>
      
      {/* 2. ADD THE NEW ALERT BANNER */}
      <div className={styles.alertBanner}>
        <Marquee pauseOnHover={true} speed={50}>
          <FaInfoCircle className={styles.alertIcon} />
          This is an important announcement: City Hall will be closed on Monday
          for the holiday. 
        </Marquee>
      </div>

      {/* 1. TOP UTILITY BAR */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
            City Hall: 601 N 6th Street
          </a>
          <span>Open Hours: Monday - Friday | 8 am - 4:30 pm</span>
          <a href={phoneUrl}>
            Call Us: 712-623-6510
          </a>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav className={styles.mainNav}>
        <div className={styles.mainNavContent}>
          
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.jpg"
              alt="City of MyTown Logo"
              width={250}
              height={100}
              priority={true}
            />
          </Link>

          {/* NAV LINKS */}
          <div className={styles.navLinks}>
            <Link href="/government">GOVERNMENT</Link>
            <Link href="/departments">DEPARTMENTS</Link>
            <Link href="/community">COMMUNITY</Link>
            <Link href="/residents">RESIDENTS</Link>
            <Link href="/new-residents">NEW RESIDENTS</Link>
          </div>
          
          {/* SEARCH BAR */}
          <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className={styles.searchButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </button>
          </form>

        </div>
      </nav>
    </header>
  );
}