import { IncomingMessage, ServerResponse } from 'http'
import * as Cookies from 'cookie'
import clientCookies from 'js-cookie'

export const getSessionAuth = ({
  req,
  res,
}: {
  req: IncomingMessage | undefined
  res: ServerResponse | undefined
}) => {
  let sessionToken
  if (req && res) {
    console.log('--------- res -------')
    console.log(res)
    console.log('--------- res -------')
    sessionToken = Cookies.parse('token')
  } else {
    sessionToken = clientCookies.get('token')
  }
  if (!sessionToken)
    return {
      headers: undefined,
      sessionToken: undefined,
    }
  return {
    headers: {
      authorization: sessionToken ? `Bearer ${sessionToken}` : undefined,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    sessionToken,
  }
}
