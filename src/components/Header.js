import React from 'react'; // Importing React library


function Header(props) { 
  return (
    <header>
      <h1>Christopher Snyder</h1>
      {props.children} {/* Displaying the children of the 'Content' component */}
    </header>
  );
}

export default Header;  //Exporting the 'Content' component as the default export