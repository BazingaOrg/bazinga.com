export const seo = {
  title: 'Bazinga | 每天进步一点点',
  description:
    '我叫 Bazinga，是一个在努力向全栈发展的开发者，目标是每天进步一点点',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://bazinga.so'
      : 'http://localhost:3000'
  ),
} as const
