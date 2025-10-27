// app/privacy/page.tsx
import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#1a1d2e] text-white">
      {/* Header */}
      <header className="border-b border-gray-700 px-6 py-4">
        <h1 className="text-2xl font-semibold">Privacy</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Privacy Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Privacy</h2>
          <p className="text-gray-300 mb-4">
            Please read through this Privacy Policy carefully as it may affect
            your rights and it also helps you understand how much we value the
            privacy of your data.
          </p>
          <p className="text-gray-400 text-sm">Last Updated: 6 Feb 2023</p>
        </div>

        {/* Section 1: Introduction */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">1. Introduction</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            This Privacy Policy explains how information and data about you is
            collected, used and disclosed by Beldex and its group companies
            ("we" or "us"). This Privacy Policy (together with our Terms of
            Service and any other documents referred to in this document or the
            Terms or Service) applies to information we collect when you use our
            websites, mobile applications, hosted Beldex accounts and other
            online products and services (collectively, the "Services") or when
            you otherwise interact with us.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            We may change this Privacy Policy from time to time. If we make
            changes, we will notify you by changing the "Last Updated" date at
            the top of this page and, in some cases, we may provide you with
            additional notice by adding a statement to our blog page on Medium,
            social media accounts or sending you push notifications on your
            device. Unfortunately, because we don't store your details (see
            below for exactly what we do and don't store), we can't notify you
            of any changes via email.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Therefore, we encourage you to review the Privacy Policy whenever
            you access the Services to stay informed about our information
            practices and the ways you can join us in protecting your privacy.
          </p>
        </section>

        {/* Section 2: Collection of Information */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">
            2. Collection of Information
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Information you provide to us</strong> - We collect
            information you provide directly to us. When opening a wallet,
            you'll notice that you will provide literally no information
            directly to us so this usually relates to communications between you
            and our support teams or for any once-off interactive features (in
            these circumstances, we will usually explain exactly how that
            information will be used so don't worry).
          </p>

          <p className="text-gray-300 leading-relaxed mb-3">
            <strong>
              Information we collect automatically when you use the Services
            </strong>{" "}
            - When you access or use our Services, we automatically collect
            information about you, including:
          </p>

          <ul className="space-y-3 mb-4 ml-6">
            <li className="text-gray-300">
              <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              Your wallet's public address and view key- Your private key,
              mnemonic seed and all the really important wallet information is
              yours to protect and we will never have access to it.
            </li>
            <li className="text-gray-300">
              <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              The last date on which your wallet is accessed.
            </li>
            <li className="text-gray-300">
              <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              The subdomain of the API from which the Services are accessed
              (where access is made via an API).
            </li>
            <li className="text-gray-300">
              <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              When an error occurs, we collect information about the error (such
              as the date and error type) and we also log information about the
              type of device, browser and operating system you were using at the
              time of the error in the form of your user agent but, in
              circumstances in which there isn't an error, this information will
              not be collected.
            </li>
          </ul>

          <p className="text-gray-300 leading-relaxed mb-3">
            <strong>Information we do not collect</strong> – Because we care
            about your privacy, there is some information which we have
            deliberately designed our systems not to collect, including:
          </p>

          <ul className="space-y-3 ml-6">
            <li className="text-gray-300">
              <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              IP Address - We do not actively track or collect the IP from which
              you access the Services- that's your business.
            </li>
            <li className="text-gray-300">
              <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              Log Information - Information about your use of the Services,
              including the type of browser you use, access times, pages viewed,
              pages you visited before navigating to our websites etc... As
              stated above, some of this information such as the type of browser
              or operating system you're using will be logged but only in
              circumstances in which an error occurs.
            </li>
            <li className="text-gray-300">
              <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              Device Information - Information about the mobile device you use
              to access our mobile application, including the hardware model,
              operating system and version, unique device identifiers and mobile
              network information. Again, when an error occurs we log the type
              of device and operating system but in normal, error-free use, our
              system won't log any of it.
            </li>
            <li className="text-gray-300">
              <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              Information Collected by Cookies and Other Tracking Technologies -
              Cookies are small data files stored on your hard drive or in
              device memory that are used to track your usage of websites and
              other online tools often for purposes of monitoring and
              maintenance but we don't use them. Regardless, you are always
              welcome to disable the use of cookies on your browser to make
              absolutely certain there isn't anyone watching.
            </li>
            <li className="text-gray-300">
              <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              Account Address Information: Again, all we store is your public
              address and view key; we will never store or know your private
              spend key or mnemonic seed which means that it is
              cryptographically impossible for us to spend funds on your behalf
              or access your wallet.
            </li>
          </ul>
        </section>

        {/* Section 3: Use of Information */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">3. Use of Information</h3>
          <p className="text-gray-300 leading-relaxed mb-3">
            We may use the little information we collect for various purposes,
            including to:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="text-gray-300">
              <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
              Provide, maintain and improve our Services.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
