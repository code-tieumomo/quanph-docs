import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import clsx from "clsx";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import netlifyIdentity from "netlify-identity-widget";

function InfoBlock() {
  useEffect(() => {
    netlifyIdentity.init({});
  }, []);

  console.log(netlifyIdentity.currentUser());
  const isLoggedIn = netlifyIdentity.currentUser() !== null;
  if (!isLoggedIn) {
    return (
      <div>
        <div data-netlify-identity-menu></div>
        <div data-netlify-identity-button>Login with Netlify Identity</div>
      </div>
    );
  } else {
    return (
      <div>
        <div data-netlify-identity-menu></div>
        <div data-netlify-identity-button>Logout with Netlify Identity</div>
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
                <span>Code playground</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
