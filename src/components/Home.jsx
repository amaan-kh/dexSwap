import React from 'react'
import vg from "../assets/bl.png"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
import Calc from "./Calc"

const Home = () => {
  return (
    <>
    <div className="home" id="home" >
    <main>
        <h1>
          DexSwap
        </h1>
        <p>"Empowering Global Exchange: Revolutionizing Crossborder Transactions with Blockchain"</p>
    </main>


    </div>
    <div className="home2">
      <img src={vg} alt="Graphics"/>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sunt rerum, repellat sint quis, numquam excepturi tempora nesciunt laboriosam reprehenderit blanditiis vel atque at dolorum quisquam cupiditate, culpa modi dolor.
        </p>
      </div>
    </div>
    <div className="home3" id='about'>
      <div>
        <h1>WHo we are?</h1>
        <p>
          Lorem ipsum dolor sit amet, 
          consectetur adipisicing elit.
           Necessitatibus expedita, aperiam soluta exercitationem itaque possimus distinctio s
           it blanditiis dolores nesciunt recusandae adipisci quia in minima consecte
           tur saepe veritatis maxime repellendus!
        </p>
      </div>
    </div>


    
    <Calc />

    {/* <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.3s",
          }}>
          <AiFillGoogleCircle />
          <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.5s",
          }}>
          <AiFillAmazonCircle />
          <p>Amazon</p>
          </div>
          <div style={{
            animationDelay:"0.7s",
          }}>
          <AiFillYoutube />
          <p>Youtube</p>
          </div>
          <div style={{
            animationDelay:"0.9s",
          }}>
          <AiFillInstagram />
          <p>Instagram</p>
          </div>
          
        </article>
      </div>
    </div> */}
    </>
  )
}

export default Home