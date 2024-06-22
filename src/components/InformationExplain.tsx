import React, { useState } from 'react'
// Importing the React library and the useState hook for state management.

import { NewApplication } from '../types/application'
// Importing the NewApplication type from the types/application module.

import { Link } from 'react-router-dom'
// Importing the Link component from react-router-dom to create links for navigation.

import Edit from './Edit'
// Importing the Edit component which allows editing of application data.

interface IProps {
    application: NewApplication
    detailsPage?: boolean
}
// Defining a TypeScript interface for the component props:
// - application: an object adhering to the NewApplication type.
// - detailsPage: an optional boolean indicating if the component is displayed on a details page.

function Information({ application, detailsPage }: IProps) {
    // Defining the Information component which takes props adhering to the IProps interface.

    const [editNewValue, setEditNewValue] = useState(false)
    // Declaring a state variable 'editNewValue' to manage the edit mode, initialized to false.
    // setEditNewValue is the function to update the editNewValue state.

    // Replace 'Edit' with a pencil symbol for editing
    // Will I need to put a cancel button or back button for user who changes mind on editing?

    // This part below will display search results?
    // Put into a table format for the results?
    
    return (
        // Returning JSX to render the component.

        <div className="hotel-preview">
            {/*A div container with the class name "hotel-preview" for styling purposes.*/}

            <div className='description'>
                { /*A div container with the class name "description" for styling purposes.*/}

                {detailsPage ? (
                    // Conditional rendering based on the detailsPage prop.

                    <p>
                        Plan Type: {application.planType}{" "}
                        {/* Displaying the plan type of the application.*/}

                        <strong className='edit-text' onClick={() => setEditNewValue(!editNewValue)}>
                            Edit
                        </strong>
                        {/*A strong element with the class name "edit-text" which toggles the editNewValue state when clicked.*/}
                        {/*This allows the user to enter edit mode.*/}

                        {editNewValue ? (
                            // Conditional rendering based on the editNewValue state.

                            <Edit
                                editNewValue={editNewValue}
                                setEditNewValue={setEditNewValue}
                                id={application.id}
                            />
                            // Rendering the Edit component if editNewValue is true.
                            // Passing the editNewValue state, setEditNewValue function, and application ID as props.

                        ) : null}
                        {/* Rendering nothing (null) if editNewValue is false.*/}

                    </p>
                ) : (
                    // If detailsPage is false, render the following block.

                    <Link to={`/applications/${application.id}`}>
                        {/*Creating a link to the application's details page using the application ID.*/}

                        <p>Application: 123456</p>
                        {/* Displaying a placeholder text for the application.*/}

                        <button className="moreinfo-btn">View More Information</button>
                        { /*A button with the class name "moreinfo-btn" to view more information about the application. */}
                    </Link>
                )}

            </div>
        </div>
    )
}

export default Information
// Exporting the Information component as the default export from this module.
