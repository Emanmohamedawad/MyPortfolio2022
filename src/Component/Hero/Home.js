import React from "react"
import "./Home.css";
import Hero from "../image/em.jpg";
// import Skill1 from "../image/skill1v.png";
// import Skill2 from "../image/skill2g.png";
// import Skill3 from "../image/skill3xx.png";
// import { Typewriter } from "react-simple-typewriter";
import { useTypewriter } from 'react-simple-typewriter'

const Home = () => {
  const {text} = useTypewriter({
    words: [' Front-end Developer.', ' Dapp web3 Developer', ' UI-UX Designer'],
    loop: {},
    onLoopDone: () => console.log(`loop completed `),
  })
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I`m <span>Eman Mohamed</span>
            </h1>
            <h2>
             
              <span>{text}</span>
                {/* <span>
                <Typewriter words={[" Front-end Developer.", " Dapp web3 Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /> 
              </span>  */}
            </h2>

            <p> I am working as Web developer React js ,UI-UX designer and develop dapp site with web3 js, Interested in Blockchain Development by solidity</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                 <a className='btn_shadow' href="https://www.linkedin.com/feed/">
                   <i class='fab fa-linkedin-in'></i>
                  </a> 
                  <a className='btn_shadow' href="https://github.com/Emanmohamedawad?tab=repositories">
                   <i class='fab fa-github'></i>
                  </a>
                  <a className='btn_shadow' href="https://www.behance.net/emanmohamed2799">
                    <i class='fab fa-behance'></i>
                  </a>
                  <a className='btn_shadow' href="https://twitter.com/Eman2799M">
                    <i class='fab fa-twitter'></i>
                  </a>

                </div>
              </div>
              {/* <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={Skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={Skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={Skill3} alt='' />
                </button>
              </div> */}
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={Hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home