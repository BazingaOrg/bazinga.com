export function url(path = '') {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'http://www.bazinga.ink'
      : 'http://localhost:3000'

  return new URL(path, baseUrl)
}
