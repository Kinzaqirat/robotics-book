import type {ReactNode} from 'react';
import { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// Particle component for background animation
function Particles() {
  const [particles, setParticles] = useState<Array<{id: number; style: any}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 4 + 2}px`,
        height: `${Math.random() * 4 + 2}px`,
        animationDelay: `${Math.random() * 6}s`,
        opacity: Math.random() * 0.6 + 0.2,
      }
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className={styles.particles}>
      {particles.map(particle => (
        <div
          key={particle.id}
          className={styles.particle}
          style={particle.style}
        />
      ))}
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <header className={styles.hero}>
      <Particles />
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            The Future of Robotics
          </h1>
          <p className={styles.heroSubtitle}>
            Master humanoid robotics, AI systems, and motion control through comprehensive guides, 
            practical examples, and cutting-edge research.
          </p>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            {/* Left Side - Robot Visual */}
            <div className={styles.robotVisual}>
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Advanced Robotics"
                className={styles.robotImage}
              />
              
              <div className={styles.techGrid}>
                <div className={styles.techItem}>
                  <span>🤖 AI Systems</span>
                </div>
                <div className={styles.techItem}>
                  <span>⚡ Motion Control</span>
                </div>
                <div className={styles.techItem}>
                  <span>🧠 Neural Networks</span>
                </div>
                <div className={styles.techItem}>
                  <span>🔧 Hardware</span>
                </div>
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>Start Your Robotics Journey</h2>
              <p className={styles.ctaDescription}>
                Dive deep into the world of humanoid robotics with our comprehensive guide. 
                From basic mechanics to advanced AI systems, learn everything you need to 
                build and program sophisticated robots.
              </p>
              
              <Link
                className={styles.ctaButton}
                to="/docs/physical-ai-robotics"
              >
                🚀 Explore Robotics Book
                <span style={{fontSize: '1.2em'}}>→</span>
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🧠</div>
              <h3 className={styles.featureTitle}>AI & Machine Learning</h3>
              <p className={styles.featureDescription}>
                Learn how to implement neural networks and machine learning algorithms 
                for intelligent robot behavior and decision making.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚙️</div>
              <h3 className={styles.featureTitle}>Motion & Control</h3>
              <p className={styles.featureDescription}>
                Master motion planning, kinematics, and control systems for precise 
                and natural robot movements.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔌</div>
              <h3 className={styles.featureTitle}>Hardware Integration</h3>
              <p className={styles.featureDescription}>
                Understand sensor integration, actuator control, and hardware-software 
                interfaces for real-world applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Robotics Book - Master Humanoid Robotics & AI"
      description="Comprehensive guide to humanoid robotics, AI systems, motion control, and robot development. Learn cutting-edge robotics technology.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}