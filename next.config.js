/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    SET_AT_BUILD_TIME: process.env.SET_AT_BUILD_TIME,
    PROVIDED_AT_SERVER_RUNTIME: process.env.PROVIDED_AT_SERVER_RUNTIME,
    ALSO_PROVIDED_AT_SERVER_RUNTIME: process.env.ALSO_PROVIDED_AT_SERVER_RUNTIME,
    RUNTIME_ENVIRONMENT: process.env.RUNTIME_ENVIRONMENT,
  }
}

module.exports = nextConfig
