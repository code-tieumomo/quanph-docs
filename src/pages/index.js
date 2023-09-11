import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import imageHero from "@site/static/img/hero.jpg";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to="/docs/intro"
          >
            Bắt đầu
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  // const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const RANDOM = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
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
      <section className="px-2 py-32 bg-white md:px-0">
        <div className="container items-center !max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">
                    Beautiful Pages to&nbsp;
                  </span>
                  <span
                    className="block text-emerald-600 xl:inline"
                    data-primary="emerald-600"
                  >
                    Tell Your Story!
                  </span>
                </h1>
                <p className="mx-auto text-sm text-gray-500 sm:max-w-md lg:text-base md:max-w-3xl">
                  Phần lớn là tài liệu cho học sinh nhưng cũng có một số bài
                  viết lưu lại những gì từng làm được không là sợ quên mất
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link
                    to="/docs/intro"
                    className="bg-emerald-500 text-white shrink-0 hover:bg-emerald-600 hover:text-white font-bold text-xs px-4 py-2 rounded cursor-pointer shadow outline-none focus:outline-none ease-linear transition-all duration-150"
                  >
                    Tài liệu
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?t=st=1688806865~exp=1688807465~hmac=406ead416a8777da193bc99cc4aa6fef2afa46f9cf5fecb1c594fc2c6f8a65c5"
                className="object-cover w-full h-auto overflow-hidden rounded-md sm:rounded-xl"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
