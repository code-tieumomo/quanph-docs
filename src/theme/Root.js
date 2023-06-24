import React, { useEffect, useState } from "react";
import { auth, db, loginWithGoogle, signInWithG } from "../services/firebase";
import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";
import image401 from "@site/static/img/401.gif";
import { child, get, ref } from "firebase/database";

export default function Root({ children }) {
  const location = useLocation();
  const [userAuth, setUserAuth] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [message, setMessage] = useState("Đang kiểm tra quyền truy cập...");

  auth.onAuthStateChanged(async function (user) {
    if (user !== null) {
      const userRef = ref(db);
      get(child(userRef, "users/" + user.uid))
        .then((snapshot) => {
          if (snapshot.exists() && snapshot.val().is_teacher === true) {
            setUserAuth(user);
          } else {
            fetch(`${process.env.SERVER_URL}/api/authorize-teacher-from-dcsr`, {
              method: "POST",
              body: JSON.stringify({
                email: user.email,
                uid: user.uid,
              }),
            })
              .then((res) => {
                res.json();
              })
              .then((data) => {
                console.log(data);
              });
            setMessage(
              "Bạn chưa có quyền xem nội dung này! Vui lòng đợi được cấp quyền hoặc sử dụng tài khoản khác."
            );
          }
          setIsLoaded(true);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setMessage("Bạn cần đăng nhập để xem nội dung này.");
      setIsLoaded(true);
      setUserAuth(null);
    }
  });

  const isAllow = () => {
    return !location.pathname?.startsWith("/teaching") || userAuth?.email;
  };

  return (
    <>
      {isLoaded ? null : (
        <main className="auth-notice fixed">
          <svg height="1em" viewBox="0 0 512 512">
            <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
          </svg>
          <p>Đang xác thực...</p>
        </main>
      )}
      {isAllow() ? (
        <>{children}</>
      ) : (
        <main className="auth-notice">
          <img src={image401} />
          <Link onClick={loginWithGoogle}>{message}</Link>
          <div className="sr-only">{children}</div>
        </main>
      )}
    </>
  );
}
