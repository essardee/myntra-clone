import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Outlet } from "react-router-dom";

function App() {


  return (
    <>
    <Header key="header" />
    <main>
      <Outlet />
    </main>
    <Footer key="footer"/>
    </>
  )
}

export default App;