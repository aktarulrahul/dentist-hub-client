import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import NotFound from './pages/NotFound/NotFound';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import ServicesProvider from './contexts/ServicesProvider';
import Services from './pages/Services/Services';
import Confirm from './pages/Confirm/Confirm';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <ServicesProvider>
      <AuthProvider>
        <BrowserRouter>
          <MenuBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/confirm">
              <Confirm />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route path="/services/:serviceId">
              <ServiceDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </ServicesProvider>
  );
}

export default App;
