import { Route, Switch } from 'react-router-dom';
//import Homepage from './component/Homepage';
import Guestsignup from '../components/signupGuest';
import Login from '../components/Login'
import RootDashboard from '../components/RootDashboard';
import GuestDashboard from '../components/GuestDashboard';
import {RPrivateRoute,GPrivateRoute} from '../routers/PrivateRoute'
import ListBecas from '../components/becas/ListBecas';


export default function AppRouter() {
  return (
    <Switch>
        <Route exact path="/" component={ListBecas}/>
        <Route exact path="/guest/register/" component={Guestsignup}/>
        <Route exact path="/guest/login/" component={Login}/>
        <GPrivateRoute exact path="/guest/dashboard/"  component={GuestDashboard} />
        <RPrivateRoute exact path="/root/dashboard/"  component={RootDashboard} />{/*se cambio la ruta privada*/}
    </Switch>
  )
}
