export const seo = {
  title: '百合研社团',
  description:
    '百合研社团，「与你·一起绽放」的百合向研究·服务·媒体社团。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://yurier.net'
      : 'http://localhost:3000'
  ),
} as const
