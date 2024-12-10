import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

export default function Advertisement() {
  const { siteConfig } = useDocusaurusContext();
  const { carbonServeId } = siteConfig.customFields || {};

  if (!carbonServeId) {
    return null;
  }

  return (
    <div className={styles.carbonAds}>
      <script
        async
        type="text/javascript"
        src={`//cdn.carbonads.com/carbon.js?serve=${carbonServeId}`}
        id="_carbonads_js"
      />
    </div>
  );
}
