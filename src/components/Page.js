import React from 'react'; // Importing components
import Content from "./Content"; 
import About from './About'; 
import Portfolio from './Portfolio'; 
import Contact from './Contact';
import Resume from './Resume'; 

function Page({ currentPage }) {
  const renderPage = () => { //Function that returns a component based on the currentPage
    switch (currentPage.name) { 
      case 'About': 
        return <About />; 
      case 'Portfolio': 
        return <Portfolio />; 
      case 'Contact': 
        return <Contact />; 
      case 'Resume': 
        return <Resume />; 
      default: 
        return <About />; 
    }
  };
  return (
    <section>
      <h2>{currentPage.name}</h2> {/* Rendering the name of the currentPage */}
      <Content>{renderPage()}</Content> {/* Rendering the component returned by the 'renderPage' function */}
    </section>
  )
}
export default Page; // Exporting the 'Page' component as the default export
