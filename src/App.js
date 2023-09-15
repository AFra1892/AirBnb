import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Hero from './Components/Hero'
import Data from './Data';


function App() {



const newArray = Data.map(item=>{
  return <Card
    key={item.id}
    item={item}
  />
})
  return(
    <div className='container'>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
                {newArray}
            </section>
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