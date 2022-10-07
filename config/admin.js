module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJLbG91ZCBSZWFsdHksIEluYy4iLCJVc2VybmFtZSI6InJhbHBoYnJpZGdlcyIsImV4cCI6MTY2NTE1MzUwMCwiaWF0IjoxNjY1MTUzNTAwfQ.omaNc5-3CzNoqX7griPlQsHMfjzc8cXEtGIXn8Fqjbo'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'W-]P$K^.Z7{QlHKmzOjE5`1u&?S,%S)vJfzkF!jdil74Q*Ru|b {7^jg9$t7OOh['),
  },
});
