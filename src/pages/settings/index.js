import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import clsx from "clsx";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { auth, loginWithGoogle } from "../../services/firebase";

export default function Home() {
  const [enabled, setEnabled] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const toggleCodePlayground = () => {
    setEnabled(!enabled);
  };

  useEffect(() => {
    const isCodePlaygroundEnabled =
      localStorage.getItem("isCodePlaygroundEnabled") === "true";
    setEnabled(isCodePlaygroundEnabled);
  }, []);

  useEffect(() => {
    localStorage.setItem("isCodePlaygroundEnabled", enabled);
  }, [enabled]);

  const logout = () => {
    auth.signOut();
  };

  const login = () => {
    loginWithGoogle();
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });

  return (
    <Layout title={`Cài đặt`} description="Cài đặt">
      <div className={styles.settingsContainer}>
        <h1>Thông tin cá nhân</h1>
        {/* <InfoBlock /> */}
        {currentUser ? (
          <div className="w-full max-w-md p-4 mb-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flow-root">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full align-middle"
                    src={currentUser.photoURL}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate mb-0 dark:text-white">
                    <span className="inline-flex mr-2 items-center rounded-md bg-red-50 px-1 py-0.5 text-xs font-medium text-red-700 border border-red-200 border-solid">
                      Logged in
                    </span>
                    {currentUser.displayName}
                  </p>
                  <p className="text-sm text-gray-500 truncate mb-0 dark:text-gray-400">
                    {currentUser.email}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <button
                    className="bg-red-500 text-white hover:bg-red-600 font-bold text-xs px-2 py-1.5 rounded cursor-pointer shadow outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={logout}
                  >
                    Đăng xuất
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-emerald-500 text-white hover:bg-emerald-600 font-bold text-xs px-2 py-1.5 mb-16 rounded cursor-pointer shadow outline-none focus:outline-none ease-linear transition-all duration-150"
            type="button"
            onClick={login}
          >
            Lecturer ?
          </button>
        )}

        <h1>Cài đặt</h1>
        <hr />
        <div className={styles.settingBlock}>
          <div className={styles.settingBlockHead}>
            <div className={styles.settingBlockTitle}>Code Playground</div>
            <span className={styles.settingBlockDes}>
              Trong các trang tài liệu, ta có thể sử dụng các code playground để
              thực thi và kiểm tra nhanh kết quả của code minh họa, qua đó hiểu
              rõ hơn về cách sử dụng các hàm, phương thức, cú pháp, ...
            </span>
          </div>
          <div className={styles.settingBlockBody}>
            <div className={styles.settingItem}>
              <Switch
                checked={enabled}
                onChange={toggleCodePlayground}
                className={clsx(
                  styles.switch,
                  enabled ? styles.switchEnabled : styles.switchDisabled
                )}
              >
                <span className="sr-only">Code playground</span>
                <span
                  className={clsx(
                    styles.switchDot,
                    enabled ? styles.dotEnabled : styles.dotDisabled
                  )}
                />
              </Switch>
              <div className={styles.settingItemDesc}>
                <span className={styles.settingItemTitle}>Code playground</span>
                <p>
                  <span className="inline-flex mr-2 items-center rounded-md bg-yellow-50 px-1 py-0.5 text-xs font-medium text-yellow-700 border border-yellow-200 border-solid">
                    Beta
                  </span>
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
