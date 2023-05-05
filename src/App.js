import React, { useState } from 'react';
import Header from './components/Header'; //Importing components
import Nav from './components/Nav';
import Page from './components/Page';
import Footer from './components/Footer';

function App() {

  const [pages] = useState([ //Using stage for specific pages
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" }
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return ( //Returning headed and footer on every page
    <div>
      <Header>
        <Nav pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </Header>

      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;