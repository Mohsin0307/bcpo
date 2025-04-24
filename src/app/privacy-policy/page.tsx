import React from "react";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | NCCPO Ltd</title>
        <meta
          name="description"
          content="Read the Privacy Policy of NCCPO Ltd."
        />
      </Head>
      <main className="max-w-4xl mx-11 py-10 mt-7 text-gray-800">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          This Privacy Policy applies between you, the user of this website, and
          <strong> NCCPO Ltd</strong>, the owner and provider of this website.
          NCCPO Ltd takes your privacy seriously and is committed to safeguarding
          your personal data.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Who We Are</h2>
        <p className="mb-4">
          <strong>NCCPO Ltd</strong><br />
          1 Brockehurst Mews, Macclesfield, SK10 2GY, UK<br />
          Tel: +44 7979 201706<br />
          Email: info@nccpo.co.uk
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. What Information We Collect</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Full name</li>
          <li>Contact information (email address, phone number)</li>
          <li>Demographic information (postal code, preferences)</li>
          <li>IP address, browser type, and operating system</li>
          <li>Information you voluntarily provide through forms or communication</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. How We Collect Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Form submissions</li>
          <li>Website browsing (via cookies)</li>
          <li>Email or phone correspondence</li>
          <li>Social media interactions</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Why We Collect Data</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To respond to enquiries</li>
          <li>Improve website and services</li>
          <li>Maintain internal records</li>
          <li>Send promotional or service-related emails</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Cookies</h2>
        <p className="mb-4">
          We use cookies to enhance user experience. You will be asked for
          consent. You may disable cookies in your browser, but some features may
          not work properly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Sharing Your Data</h2>
        <p className="mb-4">
          We may share data with service providers, legal authorities if required,
          or potential business buyers. We do not sell or lease your data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Data Security</h2>
        <p className="mb-4">
          Your data is stored securely. We use encryption, secure servers, and
          regular reviews. However, no online transmission is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Data Retention</h2>
        <p className="mb-4">
          We retain data only as long as necessary for business or legal purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">9. Your Rights</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Access or request copies of your data</li>
          <li>Request correction or deletion</li>
          <li>Object to data processing</li>
          <li>Withdraw consent</li>
        </ul>
        <p className="mb-4">
          To exercise your rights, contact us at: info@nccpo.co.uk
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          10. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy. The latest version will always be
          available on this page.
        </p>

        <p className="text-sm text-gray-500 mt-10">Last updated: April 17, 2025</p>
      </main>
    </>
  );
};

export default PrivacyPolicy;
