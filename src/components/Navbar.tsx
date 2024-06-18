// In here going to have search bar sit. Find out how?



import React from 'react'
import { Link } from 'react-router-dom' // Here either import link from Storybook or use React router dom, there will be a reason for react router dome

function Navbar() {
  return (
    <nav className='navbar'>
      <h1>Database Remediation Tool</h1>



        {/* Search bar below here, you'll need to tweak it to find applications*/}

      {/* <div className="search">
        <input
          type="text"
          className="inputsearch"
          placeholder="Enter application id ref. (e.g. 123456)"
          //   value={search}
          //   onChange={(e) => setSearch(e.target.value)}
          
        />
        <button>Search</button>
      </div> */}
      
      
      <div className="links">            {/*This is whats styling and doing those two links in the home/landing page.*/}
        <Link to= '/' 
              style= {{
                color: 'rgb(77, 77, 77)'

        }}> All Applications</Link>






        <Link to= '/create'                 /*<<< With this part here, this is where clicking on those buttons is taking you to page were you can create new application*/
              style={{                      /*    I noticed with this Nav component step, that when yopu click these links the whole page dosent change, but the the nav stays there the same and only the 
                                                  landing page changes underneath, so you can put searchbar here in the nav which is sepearated in the index.tsx file, so there would be a link in the search input bit whick taketo 'application/id'                                                                         */
                color: "white",
                backgroundColor: "rgb(77, 77, 77)",
                borderRadius: "8px",
              }}       
        > Create New Applications</Link>

      </div>
    </nav>
  )
}

export default Navbar
