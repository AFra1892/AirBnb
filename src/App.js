import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Contact from './Components/Contact';
import Joke from './Components/Joke';

function App() {
  const setup1 = " shit I got my daughter a fridge for her birthday."
  return(
    <div className='container'>
      <Navbar/>

      <Card 
        img="images/katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        contry="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />



    </div>
  )
}

export default App;
















{/* 
   <Joke
     setup={setup1}
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
    */}