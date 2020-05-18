import React from "react"
import {Tween} from 'react-gsap'
import '../styles/IndexPage.css'

const IndexPage = () => {

  return(

    <>
      <section className="sect-1">
        
        <img className="logo" src="images/we-create.png" width="90px" />
        <Tween to={{x:'70px'}} duration={20} ease="back.out(1.7)" >
          <img src="images/clouds.png" alt="clouds" className="clouds" style={{border:'3px solid red'}} />
        </Tween>
      </section>


      <section className="sect-2-wrapper">
        <div className="sect-2"></div>
      </section>
      
      <section className="sect-3-wrapper">
        <div className="sect-3"></div>
      </section>

      <section className="sect-4-wrapper">
        <div className="sect-4"></div>
      </section>
    </>
  )
}

export default IndexPage
