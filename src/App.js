import './app.css'
import Header from './components/header/header';
import Slider from './components/sliderbanner/Slider'
import Responsive from './components/sliderproducts/SliderProd'
import Form from './components/formLead/form.js'
import Footer from './components/footer/footer.js'
const App = () =>{
   return(
    <>   
        <Header/>
        <Slider/>
        <Responsive/>
        <Form/>
        <Footer/>
    </>
   ) 
}

export default App;