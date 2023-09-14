import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Contact from './Components/Contact';
import Joke from './Components/Joke';
import Data from './Data';


function App() {



const newArray = Data.map(item=>{
  return <Card
    img={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    country={item.location}
    title={item.title}
    price={item.price}
  />
})
  return(
    <div className='container'>
      <Navbar/>
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