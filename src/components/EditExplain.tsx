import React, { useState } from 'react'
// Importing the React library and the useState hook for state management.

import { updateApplication } from '../lib/controller'
// Importing the updateApplication function from the controller module, which presumably updates an application in the database.

import { useNavigate } from "react-router-dom"
// Importing the useNavigate hook from react-router-dom to programmatically navigate the user to different routes.

interface IProps {
    editNewValue: boolean
    setEditNewValue: React.Dispatch<React.SetStateAction<boolean>>
    id?: string
}
// Defining a TypeScript interface for the component props:
// - editNewValue: a boolean value indicating if the edit mode is active.
// - setEditNewValue: a function to update the editNewValue state.
// - id: an optional string representing the ID of the application to be edited.

function Edit({ editNewValue, setEditNewValue, id }: IProps) {
    // Defining the Edit component which takes props adhering to the IProps interface.

    const [newValue, setNewValue] = useState("")
    // Declaring a state variable 'newValue' to hold the new value for the application data, initialized to an empty string.
    // setNewValue is the function to update the newValue state.

    const navigate = useNavigate()
    // Using the useNavigate hook to get a navigate function for programmatically navigating the user to different routes.

    const handleUpdate = () => {
        // Defining the handleUpdate function which will be called when the user clicks the update button.

        updateApplication(id, { planType: newValue })
        // Calling the updateApplication function to update the application with the specified id.
        // The updated field is 'planType' with the new value from newValue.

        setEditNewValue(!editNewValue)
        // Toggling the editNewValue state to exit the edit mode.

        navigate("/")
        // Navigating the user back to the home page ("/").
    }

    return (
        // Returning JSX to render the component.

        <div className="edit">
            {/* A div container with the class name "edit" for styling purposes.*/}

            <label>Please enter the new value:</label>
            {/* A label for the text area input.*/}

            <textarea
                required
                name="description"
                id="description"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                // A text area input for the new value.
                // The value attribute is bound to the newValue state.
                // The onChange event handler updates the newValue state with the current input value.
            />
            <button className="update-button" onClick={handleUpdate}>Update</button>
            {/*A button to trigger the handleUpdate function when clicked.*/}
            {/*The button has the class name "update-button" for styling purposes.*/}
            
        </div>
    )
}

export default Edit
// Exporting the Edit component as the default export from this module.
