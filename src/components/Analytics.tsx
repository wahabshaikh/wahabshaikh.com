"use client";

import Script from "next/script";

const Analytics = () => {
  return (
    <>
      <Script src="https://sa.wahabshaikh.com/latest.js" />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://sa.wahabshaikh.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  );
};

export default Analytics;
