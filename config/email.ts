export const emailConfig = {
  from: 'hi@cali.so',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://yurier.net`
      : 'http://localhost:3000',
}
