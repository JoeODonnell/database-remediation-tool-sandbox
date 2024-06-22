import React from 'react'
// Importing the React library.

import { Link } from 'react-router-dom'
// Importing the Link component from react-router-dom for navigation.

function Navbar() {
    // Defining the Navbar component.
  
    return (
        // Returning JSX to render the component.

        <nav className='navbar'>
            {/* A nav element with the class name "navbar" for styling purposes.*/}

            <h1>Database Remediation Tool</h1>
            {/* Heading for the navigation bar.*/}

            {/* Search bar below here, you'll need to tweak it to find applications */}
            <div className="search">
                {/* A div container with the class name "search" for styling purposes. */}

                <input
                    type="text"
                    className="inputsearch"
                    placeholder="Enter application id ref. (e.g. 123456)"
                    // Input field for the search bar.
                    // type: "text" specifies that the input is a text field.
                    // className: "inputsearch" for styling purposes.
                    // placeholder: Text displayed when the input is empty.
                    // value and onChange handlers are commented out, which are needed for handling the input state.
                />
                <button>Search</button>
                {/* Button to trigger the search action.*/}
            </div>

            <div className="links">
                {/* A div container with the class name "links" for styling purposes.*/}

                <Link to='/' 
                    style={{
                        color: 'rgb(77, 77, 77)'
                    }}>
                    {/* Link to the home page displaying all applications.*/}
                    All Applications
                </Link>

                <Link to='/create'
                    style={{
                        color: "white",
                        backgroundColor: "rgb(77, 77, 77)",
                        borderRadius: "8px",
                    }}>
                    {/* Link to the page for creating new applications.*/}
                    Create New Applications
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
// Exporting the Navbar component as the default export from this module.
