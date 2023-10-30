
import './App.css';
import Navbar from './components/navbar';
import Footer from "./components/footer"
import AllRoutes from "./AllRoutes"


function App() {
  return (
    <div >
      <Navbar/>
        <AllRoutes/>
       
      <Footer/>
    </div>
  );
}

export default App;
