import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image'; 
// 1. IMPORT THE ICONS YOU NEED
import {
  FaFileSignature,
  FaGavel,
  FaLandmark,
  FaTree,
  FaCampground,
  FaHome
} from 'react-icons/fa';

export default function HomePage() {
  return (
    <main>
      
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
        </div>
      </section>

      {/* =============================================
        ⬇️ THIS IS THE UPDATED "ICON" SECTION ⬇️
        =============================================
      */}
      <section className={styles.iconNav}>
        <div className={styles.iconGrid}>
          
          <Link href="/permits" className={styles.iconLink}>
            <div className={styles.iconCircle}>
              <FaFileSignature /> {/* 2. ICON COMPONENT ADDED */}
            </div>
            <span>Permits</span>
          </Link>
          
          <Link href="/ordinances" className={styles.iconLink}>
            <div className={styles.iconCircle}>
              <FaGavel /> {/* 2. ICON COMPONENT ADDED */}
            </div>
            <span>Ordinances</span>
          </Link>

          <Link href="/city-council" className={styles.iconLink}>
            <div className={styles.iconCircle}>
              <FaLandmark /> {/* 2. ICON COMPONENT ADDED */}
            </div>
            <span>City Council</span>
          </Link>

          <Link href="/parks" className={styles.iconLink}>
            <div className={styles.iconCircle}>
              <FaTree /> {/* 2. ICON COMPONENT ADDED */}
            </div>
            <span>Parks</span>
          </Link>

          <Link href="/campgrounds" className={styles.iconLink}>
            <div className={styles.iconCircle}>
              <FaCampground /> {/* 2. ICON COMPONENT ADDED */}
            </div>
            <span>Campgrounds</span>
          </Link>

          <Link href="/new-residents" className={styles.iconLink}>
            <div className={styles.iconCircle}>
              <FaHome /> {/* 2. ICON COMPONENT ADDED */}
            </div>
            <span>New Residents</span>
          </Link>

        </div>
      </section>
      
      {/* =============================================
        ⬇️ THIS IS THE UPDATED "WELCOME" SECTION ⬇️
        =============================================
      */}
      
      {/* 3. WELCOME ("Why Atlantic?") SECTION */}
      <section className={styles.welcome}>
        <div className={styles.welcomeGrid}>
          
          {/* Column 1: Image */}
          <div className={styles.welcomeImage}>
            {/* You'll need to add an image to your /public folder */}
            <Image
              src="/why-redoak-image.jpg" // <-- ADD A REAL IMAGE HERE
              alt="Street view of downtown MyTown"
              width={500}
              height={330}
              className={styles.welcomeImgTag}
            />
          </div>
          
          {/* Column 2: Text */}
          <div className={styles.welcomeText}>
            <h2 className={styles.sectionTitle}>Why RedOak?</h2>
            <p>
              Why Red Oak?

Nestled in the rolling hills of southwest Iowa, Red Oak is a community that perfectly blends historic charm with modern opportunity. Known for its beautiful tree-lined streets, iconic brick architecture, and strong Midwestern values, Red Oak offers a warm and welcoming environment for families, businesses, and visitors alike.

Whether you’re strolling through our vibrant downtown, enjoying a concert in Fountain Square Park, or exploring our local shops and restaurants, you’ll quickly see why so many people are proud to call Red Oak home. With excellent schools, safe neighborhoods, and a spirit of community involvement, Red Oak embodies the very best of small-town living — where neighbors know your name and opportunity is always just around the corner.
            </p>
          </div>

        </div>
      </section>

      {/* 4. CITY NEWS SECTION */}
      <section className={styles.news}>
        <h2 className={styles.sectionTitle}>City of MyTown News</h2>
        <div className={styles.newsGrid}>
          {/* News Card 1 */}
          <div className={styles.newsCard}>
            <h3>Public Hearing Notice</h3>
            <p>
              Notice is hereby given that the City Council of the City of MyTown
              will hold a public hearing on...
            </p>
            <Link href="/news/public-hearing" className={styles.readMore}>
              Read More »
            </Link>
          </div>
          {/* News Card 2 */}
          <div className={styles.newsCard}>
            <h3>Fireworks Reminder</h3>
            <p>
              Fireworks usage within the city limits of MyTown, IA are
              allowable during the following hours...
            </p>
            <Link href="/news/fireworks" className={styles.readMore}>
              Read More »
            </Link>
          </div>
          {/* News Card 3 */}
          <div className={styles.newsCard}>
            <h3>City Owned Properties for Sale</h3>
            <p>
              A full list of City owned properties is listed below. If you wish
              to purchase a City-owned vacant lot...
            </p>
            <Link href="/news/properties" className={styles.readMore}>
              Read More »
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CALENDAR OF EVENTS SECTION */}
      <section className={styles.calendar}>
        <div className={styles.calendarGrid}>
          <div className={styles.calendarInfo}>
            <h2 className={styles.sectionTitle}>Calendar of Events</h2>
            <p>Discover what's happening in MyTown.</p>
            <Link href="/calendar" className={styles.ctaButton}>
              View All Events
            </Link>
          </div>
          <div className={styles.eventList}>
            {/* Hard-coded events for now */}
            <div className={styles.eventItem}>
              <div className={styles.eventDate}>
                <span>NOV</span>
                <strong>05</strong>
              </div>
              <div className={styles.eventDetails}>
                <h4>City Council Meeting</h4>
                <p>5:30 pm | City Hall</p>
              </div>
            </div>
            <div className={styles.eventItem}>
              <div className={styles.eventDate}>
                <span>NOV</span>
                <strong>12</strong>
              </div>
              <div className={styles.eventDetails}>
                <h4>Parks & Rec Board Meeting</h4>
                <p>6:00 pm | Community Center</p>
              </div>
            </div>
            <div className={styles.eventItem}>
              <div className={styles.eventDate}>
                <span>NOV</span>
                <strong>19</strong>
              </div>
              <div className={styles.eventDetails}>
                <h4>Library Story Time</h4>
                <p>10:00 am | Public Library</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL SECTION */}
      <section className={styles.testimonial}>
        <h2 className={styles.sectionTitle}>What Our Residents Have to Say</h2>
        <blockquote>
          "I came to MyTown as a manager. With absolutely no established
          connections to the community, I found it to be welcoming and
          nurturing. I cannot imagine calling anywhere else HOME!"
        </blockquote>
        <cite>– Rich Perry | MyTown Resident | 45 Years</cite>
      </section>
      
      {/* 7. "PERFECT LOCATION" CTA SECTION */}
      <section className={styles.cta}>
        <h2 className={styles.sectionTitle}>The Perfect Location</h2>
        <p>
          Where small-town charm meets big opportunities. With a thriving
          community, modern amenities, and easy access to major cities,
          MyTown offers the perfect balance.
        </p>
        <Link href="/new-residents" className={styles.ctaButton}>
          Become a Resident
        </Link>
      </section>
    </main>
  );
}