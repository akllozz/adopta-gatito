import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header title="Adopta un gatito hoy! "/>

    <div className= "cards">
    <MyCard 
    photo="https://randomoutputs.com/assets/images/tools/cats/aegean.webp"  
    name="Kitty Patitas Suaves"
    description= "Callada y reservada, le gusta estar sola pero si te ganas su amor va a ser una fiel compañera a tu lado."
    colorTag= "warning"
    textTag="Aegean" />
    <MyCard 
    photo="https://randomoutputs.com/assets/images/tools/cats/balinese.webp"  
    name= "Yuki"
    description= "Un gato joven que tiene mucha curiosidad y explora todo el día, tendras un compañero jugueton."
    colorTag="primary"
    textTag="Balinese" />
    <MyCard 
    photo="https://randomoutputs.com/assets/images/tools/cats/bombay.webp" 
    name= "Shadow"
    description= "Un gato que a principio puede parecer tímido, cuando te ganas su confianza es muy cariñoso."
    colorTag="danger"
    textTag="Bombay" />
    <MyCard 
    photo="https://randomoutputs.com/assets/images/tools/cats/japanese-bobtail.webp"  
    name= "Hamtara"
    description= "Una gata muy habladora y feliz, le gusta jugar con sus juguetes y es una buena cazadora."
    colorTag="dark"
    textTag="Japanese Bobtail" />
    </div>

    <div className="end">
    <Footer foot="Explora nuestra galería de gatitos listos para ir a su nueva casa y ser tu acompañante de por vida. Tenemos una variedad de gatos con diferentes personalidades y razas en busca de un hogar lleno de amor. Adopta un gatito y brindale una segunda oprtunidad de saber que es el amor verdadero y vivir feliz en su hogar."/>
    </div>
    </>
  )
}

export default App
