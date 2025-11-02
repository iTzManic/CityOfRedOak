import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        {/* Column 1: Info */}
        <div className={styles.footerColumn}>
          <div className={styles.logo}>CITY OF RED OAK</div>
          <p>712-243-4810</p>
          <p>601 N 6th Street</p>
          <p>Red Oak, Iowa</p>
          <p>Hours: M – F | 8 am – 4:30 pm</p>
        </div>

        {/* Column 2: Nav */}
        <div className={styles.footerColumn}>
          <h4>NAVIGATION</h4>
          <nav className={styles.footerNav}>
            <Link href="/">HOME</Link>
            <Link href="/government">GOVERNMENT</Link>
            <Link href="/parks-and-rec">PARKS & REC</Link>
            <Link href="/news">NEWS</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>
        </div>

        {/* Column 3: Emergency */}
        <div className={styles.footerColumn}>
          <h4>EMERGENCY INFO</h4>
          <p>
            In the event of a city wide emergency an EOC will be set up.
            Numbers will be relayed to resident in those instances.
          </p>
          <p>
            This general number 243-2204 notifies the community center
            for general traffic.
          </p>
        </div>

      </div>
      <div className={styles.footerBottom}>
        <p>
          © 2025 City of Red Oak, Iowa. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}