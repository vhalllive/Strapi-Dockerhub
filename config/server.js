module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env("http://13.127.235.179:1337", "http://localhost:1337"),
});
