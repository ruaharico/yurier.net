export const emailConfig = {
  from: 'harico@yurier.net',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://yurier.net`
      : 'http://localhost:3000',
}
