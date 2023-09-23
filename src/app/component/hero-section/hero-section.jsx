import React from "react";
import './hero-section.css'
import Imagone from '../IMAGES/image 1.svg'
import Image from "next/image";
import Iimg from '../IMAGES/Rectangle 4.svg'
import Img from '..//IMAGES/Rectangle 5.svg'
import IMag from '..//IMAGES/Arrow 1.svg'
import Imge from '..//IMAGES/Line 2.svg'
import Clas from '..//IMAGES/Star.svg'
import Imgee from '..//IMAGES/Ellipse 2.svg'
import IImagee from '..//IMAGES/Ellipse 1.svg'
import Imago from '..//IMAGES/Ellipse 3.svg'

const Herosection = () => {
  return (

    <div class="bg-cOlorc mt-5 ">
      <div class="container">
        <div class="row d-flex align-item-center">
          <div class="col-md-6  mt-5 py-5  ">
            <Image src={Imgee} className="clo" />
            <Image src={IImagee} className="colr" />
            <h1 className=" text-white fw-bold"> Be one of the first <span className="sghadow">3</span><br />
              people to buy this <br />
              <span className="colorr"> NFT  </span>

              <Image src={Clas} className="picc " />

              <Image src={Imago} className="picct mx-5" />
              <Image src={Imago} className="picct mx-5" />

            </h1>
            <p className="coloor"> and get a 10$ bonus along with the<br />
              purchase</p>

            <div>
              <h4 className="text-white ">
                the price of</h4>
              <div className=" d-flex text-white">
                <h4 className="">
                  this NFT :<span className=""> 23 $ <Image src={Imge} className="text" /></span> <Image src={IMag} /> 18 $</h4>
                <div className=" butn">
                  <div class=" double-border-button">

                    <button class="hom ">Buy Now</button>

                  </div>

                </div>

              </div>
              <div className=" mt-5 card-color px-3 py-3 text-white">

                <div className="d-flex justify-content-between py-1">
                  <h4 >Collections</h4 >
                  <h4  >Artist</h4 >
                  <h4 >Communlty</h4 >
                </div>
                <div className="d-flex justify-content-between py-3">
                  <h3 className="fw-bold">450K+</h3>
                  <h3 className="fw-bold">320K+</h3 >

                  <h3 className="fw-bold">15K+</h3 >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">

            <Image src={Iimg}
              alt="Logo"
              className="eng"

            />
            <Image src={Imagone} className=" lef " />
            <Image src={Img} className="imag  " /> </div>
        </div>

        <div>



        </div>

      </div></div>
  )
}
export default Herosection;
