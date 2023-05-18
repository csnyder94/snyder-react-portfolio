import React from 'react';
import Project from './Project';
const searches = require('./images/simultaneous-searches2.png')
const blood = require('./images/blood-donation.png')
const password = require('./images/password.png')
const scheduler = require('./images/scheduler.png')
const weather = require('./images/weather.png')
const vitality = require('./images/vitality-vault.png')

const Portfolio = () => {
  const projects = [
    {
      title: 'Simultaneous Searches',
      image: searches,
      repo: 'https://github.com/csnyder94/simultaneous-searches',
      deploy: 'https://csnyder94.github.io/simultaneous-searches/'
    },
    {
      title: 'Blood Donation Association',
      image: blood,
      repo: 'https://github.com/csnyder94/blood-donation-association',
      deploy: 'https://cryptic-depths-18999.herokuapp.com/'
    },
    {
      title: 'Vitality Vault',
      image: vitality,
      repo: 'https://github.com/csnyder94/vitality-vault',
      deploy: 'https://vitality-vault.herokuapp.com/'
    },
    {
      title: 'Day Scheduler',
      image: scheduler,
      repo: 'https://github.com/csnyder94/busy-day-scheduler',
      deploy: 'https://csnyder94.github.io/busy-day-scheduler/'
    },
    {
      title: 'Weather Dashboard Project',
      image: weather,
      repo: 'https://github.com/csnyder94/weather-dashboard',
      deploy: 'https://csnyder94.github.io/weather-dashboard/'
    },
    {
      title: 'Password Generator',
      image: password,
      repo: 'https://github.com/csnyder94/password-generator',
      deploy: 'https://csnyder94.github.io/password-generator/'
    },

  ];


  return ( // Returning a section containing a container element with some margin
    <section className="container my-5">

      <div className="row"> {/* Rendering a row of project components */}

        {/* Mapping over an array of 'projects' and rendering a 'Project' component for each */}
        {projects.map((project, index) => (
          <Project project={project} key={"project" + index} />
        ))}

      </div>
    </section>
  )
};

export default Portfolio;