import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import clsx from "clsx";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import netlifyIdentity from "netlify-identity-widget";
import Link from "@docusaurus/Link";

function InfoBlock() {
  useEffect(() => {
    netlifyIdentity.setLocale("vi");
    netlifyIdentity.init({});
  }, []);

  console.log(netlifyIdentity.currentUser());
  const isLoggedIn = netlifyIdentity.currentUser() !== null;
  if (!isLoggedIn) {
    return (
      <div className="margin-bottom--xl">
        <div data-netlify-identity-button className="margin-top--md"></div>
      </div>
    );
  } else {
    return (
      <div className="margin-bottom--xl flex flex-col-reverse">
        <div data-netlify-identity-button className="margin-top--md"></div>
        <div className="avatar">
          <Link className="avatar__photo-link avatar__photo avatar__photo--lg" to="/settings">
            <img alt="Avatar" src={netlifyIdentity.currentUser()?.user_metadata?.avatar_url ?? "https://i.pravatar.cc/300"} />
          </Link>
          <div className="avatar__intro">
            <div className="avatar__name">{netlifyIdentity.currentUser()?.user_metadata?.full_name ?? "Jedi"}</div>
            <small className="avatar__subtitle">The choosen one 🔰</small>
          </div>
        </div>
      </div>
    );
  }
}

export default function Home() {
  const [enabled, setEnabled] = useState(false);

  const toggleCodePlayground = () => {
    setEnabled(!enabled);
  };

  useEffect(() => {
    const isCodePlaygroundEnabled = localStorage.getItem("isCodePlaygroundEnabled") === "true";
    setEnabled(isCodePlaygroundEnabled);
  }, []);

  useEffect(() => {
    localStorage.setItem("isCodePlaygroundEnabled", enabled);
  }, [enabled]);

  return (
    <Layout title={`Cài đặt`} description="Cài đặt">
      <div className={styles.settingsContainer}>
        <h1>Thông tin cá nhân</h1>
        <InfoBlock />
        <h1>Cài đặt</h1>
        <hr />
        <div className={styles.settingBlock}>
          <div className={styles.settingBlockHead}>
            <div className={styles.settingBlockTitle}>Code Playground</div>
            <span className={styles.settingBlockDes}>
              Trong các trang tài liệu, ta có thể sử dụng các code playground để thực thi và kiểm tra nhanh kết quả của code minh họa, qua đó hiểu rõ
              hơn về cách sử dụng các hàm, phương thức, cú pháp, ...
            </span>
          </div>
          <div className={styles.settingBlockBody}>
            <div className={styles.settingItem}>
              <Switch
                checked={enabled}
                onChange={toggleCodePlayground}
                className={clsx(styles.switch, enabled ? styles.switchEnabled : styles.switchDisabled)}
              >
                <span className="sr-only">Code playground</span>
                <span className={clsx(styles.switchDot, enabled ? styles.dotEnabled : styles.dotDisabled)} />
              </Switch>
              <div className={styles.settingItemDesc}>
                <span className={styles.settingItemTitle}>Code playground</span>
                <p>
                  <span className="badge badge--warning margin-right--sm">Beta</span>
                  Code playground
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
