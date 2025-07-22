import React from 'react'
import Navbar from './components/Navbar'
import { BiDetail } from 'react-icons/bi';
import { FaFacebook, FaGithub, FaLinkedinIn, FaRegEnvelope, FaTwitter, FaUser } from 'react-icons/fa';
import { IoBriefcaseOutline, IoHome } from "react-icons/io5";

const App = () => {
  return (
    <div className=' h-[100%] '>
      {/* navbar  */}

      <nav className="nav fixed bottom-[2rem] left-[50%] w-[40rem] rounded-[5rem] z-[100] ">
        <ul className="nav-list flex justify-evenly">
          <li className='relative flex text-[3rem] cursor-pointer active'>
            <IoHome />
            <span className='tooltip absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]'>Home</span>
          </li>
          <li className='relative flex text-[3rem] cursor-pointer'>
            <FaUser />
            <span className='tooltip  absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]'>About</span>
          </li>
          <li className='relative flex text-[3rem] cursor-pointer'>
            <BiDetail />
            <span className='tooltip  absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]'>Resume</span>
          </li>
          <li className='relative flex text-[3rem] cursor-pointer'>
            <IoBriefcaseOutline />
            <span className='tooltip  absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]'>Portfolio</span>
          </li>
          <li className='relative flex text-[3rem] cursor-pointer'>
            <FaRegEnvelope />
            <span className='tooltip  absolute top-[-4rem] left-[50%] rounded-[.4rem] text-[1.6rem]'>Contact</span>
          </li>
        </ul>
      </nav>

      <div className="container  h-[100vh] ">
        <div className="box h-[100vh]  w-[100vw]">
          
          <section className="section home ">
            <div className="home-info">
              <h3>Hello I'm</h3>
              <h1>Kishan</h1>
              <h3>Full Stack Developer</h3>
              <p className='desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet tempore minus pariatur blanditiis deleniti voluptate magnam, maxime neque totam ipsum. 
              </p>
              <div className="btn-sci  ">
                <a href="#" className='btn  '>Download CV </a>
                <div className="sci ">
                  <a href="#">
                    <FaGithub className='icon' />
                  </a>
                  <a href="#">
                    <FaLinkedinIn className='icon' />
                  </a>
                  <a href="#">
                    <FaTwitter className='icon' />
                  </a>
                  <a href="#">
                    <FaFacebook className='icon' />
                  </a>
                </div>
              </div>
            </div>

            <div className="img-wrapper">
              <div className="img-box home-img">
                <img src="image\my image.png" alt="" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App