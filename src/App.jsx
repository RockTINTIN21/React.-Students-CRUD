import { useState } from 'react'
import './App.css'
import Header from "./layouts/Header/Header.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from "./layouts/Body/Body.jsx";
import RightPanel from "./layouts/RightPanel/RightPanel.jsx";
import Footer from "./layouts/Footer/Footer.jsx";
function App() {

  return (
      <>
          <Header></Header>
          <div className="content">
              <Body></Body>
              <RightPanel></RightPanel>
          </div>
          <Footer></Footer>
      </>
  )
}

export default App
