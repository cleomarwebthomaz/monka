
import Router from 'next/router'
import nextCookie from 'next-cookies'

export const auth = ctx => {
  const { token } = nextCookie(ctx)

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/auth/login' })
    ctx.res.end()
    return
  }

  if (!token) {
    Router.push('/auth/login')
  }

  return token
}