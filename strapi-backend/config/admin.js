module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '35f0204c7e899139fd9659fbb03deb1c'),
  },
});
