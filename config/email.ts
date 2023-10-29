export const emailConfig = {
  from: 'hi@bazinga.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://bazinga.com`
      : 'http://localhost:3000',
}
