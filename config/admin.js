module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bdc8876e9cafe4a594e033bf412dd89b'),
  },
});
