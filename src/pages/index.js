import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Link className="button button--secondary button--md" to="/docs/intro">
            Bắt đầu
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const PARTICLES = document.querySelectorAll(".star");
    PARTICLES.forEach((P) => {
      P.setAttribute(
        "style",
        `
          --angle: ${RANDOM(0, 360)};
          --duration: ${RANDOM(6, 20)};
          --delay: ${RANDOM(1, 10)};
          --alpha: ${RANDOM(40, 90) / 100};
          --size: ${RANDOM(2, 6)};
          --distance: ${RANDOM(40, 200)};
        `
      );
    });
  });

  return (
    <Layout title={`Trang chủ`} description="Tài liệu tham khảo">
      <main>
        <HomepageFeatures />
      </main>
      <HomepageHeader />
    </Layout>
  );
}
