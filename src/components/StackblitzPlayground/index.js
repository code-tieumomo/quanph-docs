import React from "react";
import StackBlitzSDK from "@stackblitz/sdk";
import { useEffect } from "react";

export function StackblitzPlayground({ fileName, template = "javascript" }) {
  const code = require(`../../code/${fileName}`).code;

  useEffect(() => {
    StackBlitzSDK.embedProject(
      "embed",
      {
        title: "Thực hành",
        description: "Thực hành",
        template: template,
        files: {
          "index.js": code,
          "index.html": ""
        }
      },
      {
        openFile: "index.js",
        devToolsHeight: 100,
        theme: "light",
        height: 300
      }
    );
  }, []);

  return <div id="embed"></div>;
}
