import {Redirect, Route} from 'react-router-dom'
import Cookie from 'js-cookie'

const Authenticate = props => {
  const jwtToken = Cookie.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return <Route {...props} />
}

export default Authenticate