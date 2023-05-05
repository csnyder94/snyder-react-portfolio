import React, { useEffect } from "react"; // Importing React library and useEffect hook

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props; // Destructuring props to get pages, setCurrentPage and currentPage

  useEffect(() => {
    document.title = currentPage.name; // Updating the document title when the currentPage changes
  }, [currentPage]); // Setting the dependency array to [currentPage] so that the effect only runs when the currentPage changes

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark"> {/* Rendering the navigation bar */}
      <div className="container-fluid">
        <ul className="navbar-nav ms-auto mb-2 mb-md-0"> {/* Rendering the unordered list for navigation links */}
          {pages.map((Page) => ( // Mapping through the pages array to render navigation links
            <li
              className={`nav-item ${currentPage.name === Page.name && "active"
                }`} // Setting the active class on the navigation link if the currentPage matches the current page in the iteration
              key={Page.name} // Setting the key for the navigation link
            >
              <span
                className="nav-link"
                onClick={() => setCurrentPage(Page)} // Setting the current page when the navigation link is clicked
              >
                {Page.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav; // Exporting the 'Nav' component as the default export
