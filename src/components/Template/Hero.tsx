import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div >
          <ThemePortrait width={350} height={350} priority />
        </div>
        <div className="hero-info">
          <h1 className="hero-title">
            <span className="hero-name">Abhishek Karthik Manikandan</span>
          </h1>

          <p className="hero-tagline">
            Senior Full Stack Developer at{' '}
            <a href="https://www.rbcroyalbank.com/personal.html" className="hero-highlight">
              Royal Bank of Canada
            </a>
            .
            <br />
            Building Full Stack powered AI products for over a decade.
          </p>

          <div className="hero-chips">
            <span className="hero-chip">Dalhousie University Alum</span>
            <span className="hero-chip">Anna University Alum</span>
          </div>

          <div className="hero-cta">
            <Link href="/about" className="button button-primary">
              About Me
            </Link>
            <Link href="/resume" className="button button-secondary">
              View Resume
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
