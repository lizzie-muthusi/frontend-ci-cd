module.exports = {
  apps: [
    {
      name: "frontend-prod",
      script: "bun start",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
