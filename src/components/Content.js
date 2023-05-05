import React from "react"; // Importing React library

function Content(props) { 
    return (
        <div>
            {props.children} {/* Displaying the children of the 'Content' component */}
        </div>
    )
}

export default Content; // Exporting the 'Content' component as the default export
