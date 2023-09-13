import logo from './logo.svg';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Contact from './Components/Contact';
import Joke from './Components/Joke';

function App() {
  return(
    <div className='container'>
      <Navbar/>
      <Card />

    <Joke
      setup="I got my daughter a fridge for her birthday."
      punchline="I can't wait to see her face light up when she opens it."
    />
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
