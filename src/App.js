
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Hero from './components/Hero';
import Reminders from './components/Reminders';

function App() {
  return (
    <div>
      {/* <SignUp/> */}
      <Navbar/>
      <main className="mx-auto justify-center items-center px-6 py-20 md:px-8 lg:px-12">
        <Hero />
        <Reminders/>
      </main>
    </div>
  );
}

export default App;
