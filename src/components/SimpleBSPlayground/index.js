import React from "react";
import StackBlitzSDK from "@stackblitz/sdk";
import { useEffect } from "react";
import Link from "@docusaurus/Link";

export function SimpleBSPlayground({
  fileName,
  height = 400,
  openFile = "index.js",
  isConsole = true,
  template = "javascript",
  title = "Code playground",
  description = "An code playground for you to play with the code!"
}) {
  const randomString = Math.random().toString(36).substring(7);

  useEffect(() => {
    const isCodePlaygroundEnabled = localStorage.getItem("isCodePlaygroundEnabled") === "true";
    if (isCodePlaygroundEnabled) {
      const files = require(`../../code/${fileName}`).files;

      StackBlitzSDK.embedProject(
        randomString,
        {
          title: title,
          description: description,
          template: template,
          files: files,
          settings: {
            compile: {
              clearConsole: false
            }
          }
        },
        {
          openFile: openFile,
          devToolsHeight: isConsole ? 100 : 0,
          theme: "light",
          height: height
        }
      );
    }
  }, []);

  return (
    <div id={randomString} className="code-playground-notice">
      ⚡ Bật <span>Code playground</span> trong <Link to="/settings">Cài đặt</Link> để hiện code playground ⚡
    </div>
  );
}
