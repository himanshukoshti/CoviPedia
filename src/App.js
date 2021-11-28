import './App.css';
import Navbar from './component/Navbar/Navbar'
import Homepage from './component/Homepage/Homepage';
import Cases from './component/Cases/Cases';
import Prevention from './component/Prevention/Prevention';
import Vaccination from './component/Vaccination/Vaccination';
import Footer from './component/Footer/Footer';
import Symptoms from './component/Symptoms/Symptoms';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/symptoms" component={Symptoms}/>
        <Route exact path="/cases" component={Cases}/>
        <Route exact path="/prevention" component={Prevention}/>
        <Route exact path="/vaccination" component={Vaccination}/>

        
      </Switch>

      <Footer />

    </>
  );
}

export default App;
