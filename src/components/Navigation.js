import React from 'react';
import { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Resume from './pages/Resume';

const projects = [
  {
    id: 1,
    img: "Assets/Images/planetplanters.png",
    title: 'Planet Planters',
    deployedLink: "https://planetplanters.herokuapp.com/",
    githubLink: "github link",
    techs: "JavaScript, node.js, express.js, MySQL, Sequelize, Handlebars, SASS, HTML, CSS"
  },
  {
    id: 2,
    img: "Assets/Images/techblog.png",
    title: 'Tech Blog',
    deployedLink: "http://marlowetechblog.herokuapp.com/",
    githubLink: "github link",
    techs: "Sequelize, Handlebars, MySQL, express.js, node.js, JavaScript, HTML, CSS"
  },
  {
    id: 3,
    img: "Assets/Images/teamprofile.png",
    title: 'Team Profile Generator',
    deployedLink: "https://www.youtube.com/watch?v=3XKDs9cyHrc&t=78s",
    githubLink: "https://github.com/MarloweMich/team-profile-generator",
    techs: "JavaScript, JEST, HTML, CSS, node.js, inquirer"
  },
  {
    id: 4,
    img: "Assets/Images/bougiefoodieimg.png",
    title: 'BougieFoodie',
    deployedLink: "https://marlowemich.github.io/BougieFoodie/",
    githubLink: "github link",
    techs: "HTML, CSS, JavaScript"
  },
  {
    id: 5,
    img: "Assets/Images/weatherdashboard.png",
    title: 'Weather Dashboard',
    deployedLink: "https://marlowemich.github.io/weatherdashboard/",
    githubLink: "github link",
    techs: "HTML, CSS, JavaScript"
  },
  {
    id: 6,
    img: "Assets/Images/workday.png",
    title: 'Workday Scheduler',
    deployedLink: "https://marlowemich.github.io/workdayscheduler/",
    githubLink: "github link",
    techs: "HTML, CSS, JavaScript"
  }
]

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Project') {
      return <Project projects={projects} />;
    }
    else {
      return <Resume />;
    }
  };
  
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}