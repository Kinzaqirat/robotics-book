import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <section className={styles.features}>
      <div className="container">
        <div 
          className="row" 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 0',
          }}
        >

          {/* LEFT SIDE — ROBOT IMAGE */}
          <div className="col col--6" style={{ textAlign: 'center' }}>
            <img
              src="https://erepublic.brightspotcdn.com/dims4/default/a7ea80e/2147483647/strip/true/crop/8081x4214+0+0/resize/840x438!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.us-west-2.amazonaws.com%2F44%2F0c%2Fbf3043cf4952945a5b3281fcfa16%2Fadobestock-955269760.jpeg"  // <<< replace with your robot image
              style={{ width: '80%', maxWidth: 400 }}
              alt="Robotics"
            />
          </div>

          {/* RIGHT SIDE — BUTTON */}
          <div className="col col--6" style={{ textAlign: 'center' }}>
            <h2>Explore the Robotics Book</h2>

            <p style={{ maxWidth: 350, margin: '0 auto 1.5rem' }}>
              Dive into humanoid robotics, motion control, AI systems, and real-world robot development.
            </p>

            <Link
              className="button button--primary button--lg"
              to="/docs/physical-ai-robotics"
            >
              Read Book
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}





export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
