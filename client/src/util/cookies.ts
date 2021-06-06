import { isServer } from './isServer'

//  https://gist.github.com/joduplessis/7b3b4340353760e945f972a69e855d11
export function setCookie(name: string, val: string) {
  if (isServer()) return

  const date = new Date()
  const value = val

  // Set it expire in 7 days
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000)

  // Set it
  document.cookie =
    name + '=' + value + '; expires=' + date.toUTCString() + '; path=/'
}

export function getCookie(name: string) {
  if (isServer()) return

  const value = '; ' + document.cookie
  const parts: any = value.split('; ' + name + '=')

  if (parts.length == 2) {
    return parts.pop().split(';').shift()
  }
}

export function deleteCookie(name: string) {
  if (isServer()) return

  const date = new Date()

  // Set it expire in -1 days
  date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000)

  // Set it
  document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/'
}
