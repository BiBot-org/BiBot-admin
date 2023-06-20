module.exports = {
  reactStrictMode: true,
  env: {
    KEYCLOAK_URL: process.env.KEYCLOAK_URL,
    KEYCLOAK_REALM: process.env.KEYCLOAK_REALM,
    KEYCLOAK_CLIENT_ID: process.env.KEYCLOAK_CLIENT_ID,
  },
  images: {
    domains: ["storage.googleapis.com"],
  },
};
