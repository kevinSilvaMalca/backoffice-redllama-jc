module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "redllamajc@innvortex.com",
        defaultReplyTo: "redllamajc@innvortex.com",
        testAddress: "redllamajc@innvortex.com",
      },
    },
  },
});
