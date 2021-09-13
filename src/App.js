import './app.css'
import Header from './components/header/header';
import Slider from './components/sliderbanner/Slider'
import Responsive from './components/sliderproducts/SliderProd'
import Form from './components/formLead/Signup.js'
import Footer from './components/footer/footer.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () =>{
   return(
    <Router>   
        <Header/>
        <Switch>
            <Route path='/'/>
        </Switch>
        <Slider/>
        <Responsive/>
        <Form/>
        <Footer/>
    </Router>
   ) 
}

export default App;