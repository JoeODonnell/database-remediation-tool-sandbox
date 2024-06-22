import React, { useState, useEffect } from 'react'
// Importing the React library and specific hooks: useState (for state management) and useEffect (for side effects).

import { useParams } from 'react-router-dom'
// Importing useParams from react-router-dom to extract URL parameters.

import { firestore } from '../lib/controller'
// Importing the Firestore instance from the controller module, which provides access to the Firestore database.

import { doc, getDoc } from "firebase/firestore"
// Importing Firestore functions from the Firebase library: doc (to reference a specific document) and getDoc (to fetch document data).

import Information from './Information'
// Importing the Information component, which will be used to display the fetched application data.


// This file or class will fetch the data for a specific application.

function Details() {
    // Defining the Details component.

    const { id } = useParams()
    // Extracting the 'id' parameter from the URL using useParams.

    // Fetch a single application
    const getApplication = doc(firestore, `applications/${id}`)
    // Creating a reference to the specific application document in Firestore using the 'id' parameter.

    const [isLoading, setIsLoading] = useState(false)
    // Declaring a state variable 'isLoading' to manage the loading state, initialized to false.
    // setIsLoading is the function to update the loading state.

    const [application, setApplication] = useState({})
    // Declaring a state variable 'application' to hold the fetched application data, initialized to an empty object.
    // setApplication is the function to update the application state.

    useEffect(() => {
        // useEffect hook to perform side effects (fetching data) when the component mounts.

        const fetchApplicationData = async () => {
            // Defining an asynchronous function to fetch the application data.

            setIsLoading(true)
            // Setting the loading state to true to indicate data fetching.

            const docSnap = await getDoc(getApplication)
            // Fetching the application document from Firestore using getDoc and the document reference.

            if (docSnap.exists()) {
                // Checking if the document exists.

                const newApplicationObj = {
                    id: docSnap.id,
                    // Extracting the document ID.

                    ...docSnap.data(),
                    // Spreading the document data (all fields in the document) into the new object.
                }
                setApplication(newApplicationObj)
                // Updating the application state with the fetched data.

                setIsLoading(false)
                // Setting the loading state to false after data is fetched and state is updated.
            } else {
                // If the document does not exist.

                console.log("No such document")
                // Logging a message indicating that the document was not found.
            }
        }

        fetchApplicationData()
        // Calling the fetchApplicationData function to fetch the data.

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // Empty dependency array ensures this effect runs only once when the component mounts.
    // The comment disables the eslint warning about missing dependencies in the effect.

    if (isLoading) return <div className="loading" />
    // If the loading state is true, return a div with the class "loading" (this could be a spinner or a loading indicator).

    return (
        // Returning JSX to render the component.

        <div className="hotel-details">
        // A div container with the class "hotel-details" for styling purposes.

            {Object.keys(application) && Object.keys(application).length ? (
                // Checking if the application object has any keys (i.e., it is not empty).

                <Information application={application} detailsPage />
                // If the application object is not empty, render the Information component.
                // Pass the application object as a prop and set the detailsPage prop to true.

            ) : null}
            // If the application object is empty, render nothing (null).
        </div>
    )
}

export default Details
// Exporting the Details component as the default export from this module.
