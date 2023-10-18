import { setCookie } from 'cookies-next'

export default async function setApiCookie(req, res) {
  try {
    setCookie('token_from_api', 'abc123', { req, res, maxAge: 60 * 60 * 24 })
    res.status(200).send('Cookies have been set. Check the cookies in developer tools')
  } catch (error) {
    res.status(400).send(error.message)
  }
}