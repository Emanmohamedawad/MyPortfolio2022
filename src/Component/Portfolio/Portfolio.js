import React from "react"
import "./Portfolio.css"
//import Card from "./Card"
//import Portfolio_data from "./Portfoliodata"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>

          <div className='content grid'>
            {/* {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
            })} */}

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src='./imgprojects/im1.png' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Dapp Reactjs site</span>

              </div>
              <div className='title'>
                  <h2>This website for integrate with Blockchain contract using React js,Web3.js</h2>
                <a href='https://mirasociety.com/' className='eye'>
                  <i class='fas fa-eye'></i>
                </a>
              </div>
            </div>

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src='./imgprojects/im5.png' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Front-end Site React JS</span>

              </div>
              <div className='title'>
                  <h2>My website was made by React Js and styled-component</h2>
                  <a href='https://github.com/Emanmohamedawad/securSite-reactjs' className='eye'>
                  <i class='fas fa-eye'></i>
                </a>
              </div>
            </div>

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src='./imgprojects/im3.png' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Front-end Site React JS</span>

              </div>
              <div className='title'>
                  <h2>My website was made by React Js and styled-component with animation js</h2>
                  <a href='https://github.com/Emanmohamedawad/earthuim-site-reactjs' className='eye'>
                  <i class='fas fa-eye'></i>
                </a>
              </div>
            </div>

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src='./imgprojects/im2.jpg' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Front-end Site React JS</span>
 
              </div>
              <div className='title'>
                  <h2>My website was made by React Js and styled-component</h2>
                  <a href='https://galaxy-site-travel.netlify.app/' className='eye'>
                  <i class='fas fa-eye'></i>
                </a>
              </div>
            </div>

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src='./imgprojects/im4.png' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>UI/UX WEB DESIGN</span>
  
              </div>
              <div className='title'>
                  <h2>Designe web page ui-ux by using XD</h2>
                  <a href='https://www.behance.net/gallery/123121775/Travel-Website' className='eye'>
                  <i class='fas fa-eye'></i>
                </a>
              </div>
            </div>

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src='./imgprojects/im6.png' alt='' />
              </div>
              <div className='category d_flex'>
                  <span>UI/UX Mobile Application</span>

              </div>
              <div className='title'>
                  <h2>Designe App screens ui-ux by using XD</h2>
                  <a href='https://www.behance.net/gallery/131641613/Makeup-Artist-App' className='eye'>
                  <i class='fas fa-eye'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio