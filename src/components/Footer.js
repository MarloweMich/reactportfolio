import React from 'react';
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer' id="contact">
          <ul className='footer'>
            <li>
              <a href="https://github.com/MarloweMich">
                  <img src="Assets/Images/github.png" alt="github" width="55px"/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/michael-marlowe-3ab43764/">
              <img src="Assets/Images/linkedin.png" alt="linkedin" width="50px"/>
              </a>
            </li>
            {/* <li>
            <a href="https://docs.google.com/document/d/1ddvoxYDuy5imlTmZ9Pai7hS04sY8GP-yLhSj9M94xvQ/edit?usp=sharing">
              <img src="Assets/Images/resume.png" alt="Resume" width="70px"/>
            </a>
            </li> */}
          </ul>
        </div>
    )
}