import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Contact from './Components/Contact';
function App() {
  return(
    <div className='container'>
      <Navbar/>
      <Card />

      <Contact
        img="images/images/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="images/images/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="images/images/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      

    </div>
  )
}

export default App;
