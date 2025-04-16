import Action from "./components/Action"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Grill from "./components/Grill"
import Header from "./components/Header"
import Main from "./components/Main"
import Oriental from "./components/Oriental"
import Statistics from "./components/Statistics"
import Loader from "./components/Loader"
import Customers from "./components/Customers"
import Community from "./components/Community"

function App() {
  

  return (
    <div className=" text-black">
      <Header/>
      <Main/>
      <Statistics/>
      <Features/>
      <Oriental/>
      <Loader/>
      <Grill/>
      <Customers/>
      <Community/>
      <Action/>
      <Footer/>
    </div>
  )
}

export default App
