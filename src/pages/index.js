import React from "react"
import {Reveal, Tween} from 'react-gsap'
import {Animated} from "react-animated-css";
import '../styles/IndexPage.css'

const IndexPage = () => {


  return(

    <>
      <section className="sect-1">
        
        <img className="logo" src="images/we-create.png" width="90px" />


        <div className="caption1">
            <div className="header-wrapper">
                <div className="phrase1"><em>It's all about you.</em></div> <br /> 
                <div className="phrase2"><strong>And creating the incredible.</strong></div>
                
            </div>
            <br />
            <div className="caption2">
              Together we'll create the award-winning digital experiences you need to exceed your marketing goals, expand your business, and engage your audiences.
            </div>
        </div>


        
        <Tween to={{x:'70px'}} duration={60} ease="back.out(10.7)" >
          <img style={{opacity:'.7'}} src="images/clouds.png" alt="clouds" className="clouds" />
        </Tween>
      </section>





      <Reveal threshold={.1}>
        <Tween from={{opacity: 0}} duration={2}>
          <section className="sect-2-wrapper">
            <div className="sect-2"></div>
          </section>
        </Tween>
      </Reveal>


      <Reveal threshold={.1}>
        <Tween from={{x:'90px'}} duration={5} ease="elastic.out(3,.6)">
          <section className="sect-3-wrapper">
            <div className="sect-3"></div>

          </section>
        </Tween>
      </Reveal>

      
      <Reveal threshold={.1}>
        <Tween from={{x:'90px'}} duration={5} ease="bounce.out">

          <section className="sect-4-wrapper">
            <div className="sect-4"></div>
          </section>
        </Tween>
      </Reveal>


      <br />
      <section className="sect-5">
      <div className="fields">
        <div className="field-title">
          Industry <br />
          Agnostic 
          by Design
        </div>
        
        <ul className="u-list-field">
          <li><a href="#">ENTERPRISE</a></li>
          <li><a href="#">LEGAL</a></li>
          <li><a href="#">TECHNOLOGY</a></li>

          <li><a href="#">MANUFACTURING</a></li>
          <li><a href="#">CPAS</a></li>
          <li><a href="#">HEALTHCARE</a></li>

          <li><a href="#">EDUCATION</a></li>
          <li><a href="#">FINANCE</a></li>

        </ul>
          </div>
        </section>





        <section className="about-sect">
            <div className="who-we-are">
              <div className="phrase1">A specialized team of experts who solve complex business problems.</div>

              <div className="phrase2">Imarc is an award-winning full-service digital agency with a strong focus on web, mobile, and custom application solutions.</div>

            </div>


            <div className="about-btn">
              <div className="about-wrapper">
                  About IMARC
              </div>
            </div>
        </section>

      <br /><br /><br /><br /><br />







    </>

  )
}

export default IndexPage
