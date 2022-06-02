import React from 'react';
import './NavTabs.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">

      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#project"
          onClick={() => handlePageChange('Project')}
          className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>

    </ul>
  );
}

export default NavTabs;