
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Hero from './components/Hero';
import Reminders from './components/Reminders';
import Map from './components/Map';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      {/* <SignUp/> */}
      <Navbar/>
      <main className="mx-auto justify-center items-center px-6 pt-20 md:px-8 lg:px-12 z-10">
        <Hero />
        <Reminders/>
        <Map/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
