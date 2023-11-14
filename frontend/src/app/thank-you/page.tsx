"use client";
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    const script = document.createElement("script");
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=987563355877513&ev=PageView&noscript=1" />`;
    script.innerHTML = `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '987563355877513');
          fbq('track', 'PageView');
          `;
    script.async = true;
    document.body.appendChild(noscript);
    document.body.appendChild(script);
    console.log("pixel fired successfully");
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, []);

  return (
    <main>
      <section className="bg-[#A3C0E6] p-10 sm:p-20 min-h-screen flex justify-center items-center">
        <section className="max-w-[1100px] mx-auto">
          <h1 className="text-[32px] font-header font-bold text-center">
            Thank you for your interest!
          </h1>
          <div className="text-center pt-5">
            Your information has been successfully submitted. We will reach out
            to you shortly.
          </div>
          <p className="font-bold text-center pt-5">
            You can also contact us directly at{" "}
            <a href="tel:7026169655" className="underline">
              702.616.9655
            </a>{" "}
            or visit{" "}
            <a
              href="https://ranchoplazadental.com"
              target="_blank"
              className="underline"
            >
              ranchoplazadental.com
            </a>
          </p>
        </section>
      </section>
    </main>
  );
};

export default ThankYou;
