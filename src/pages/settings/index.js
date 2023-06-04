import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import clsx from "clsx";
import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Home() {
  const isCodePlaygroundEnabled = Boolean(localStorage.getItem("isCodePlaygroundEnabled") === "true");
  const [enabled, setEnabled] = useState(isCodePlaygroundEnabled);

  const toggleCodePlayground = () => {
    setEnabled(!enabled);
    localStorage.setItem("isCodePlaygroundEnabled", !enabled);
  };

  return (
    <Layout title={`Cài đặt`} description="Cài đặt">
      <div className={styles.settingsContainer}>
        <h1>Cài đặt</h1>
        <hr />
        <span className={styles.settingTitle}>Bật/tắt code playground trong tài liệu</span>
        <div className={styles.settingItem}>
          <Switch
            checked={enabled}
            onChange={toggleCodePlayground}
            className={clsx(styles.switch, enabled ? styles.switchEnabled : styles.switchDisabled)}
          >
            <span className="sr-only">Code playground</span>
            <span className={clsx(styles.switchDot, enabled ? styles.dotEnabled : styles.dotDisabled)} />
          </Switch>
          <span>Code playground</span>
        </div>
      </div>
    </Layout>
  );
}
