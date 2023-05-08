/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    // localeDetection: false,
    locales: ["en", "jp"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    // defaultLocale: "en-US",
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
