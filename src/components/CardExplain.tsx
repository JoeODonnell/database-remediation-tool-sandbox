// in this file is were I want the search results to be displayed when application id is searched and return back here
// Application id and along to the left of it a view and edit button?



import React, { useEffect, useState} from 'react' // Importing the React library and specific hooks: useEffect (for side effects) and useState (for state management)
import { applicationsCollection } from '../lib/controller'  // Importing the applicationsCollection from the controller module, which is presumably a reference to a Firestore collection



// Find out what the equivilant of this is for Oracle? Google what its for and ask. The Snapshot function does Oracle have this?
// Importing Firestore types and functions from the Firebase library: DocumentData (a type for Firestore documents), onSnapshot (to listen for real-time updates), and QuerySnapshot (a type for query results)
import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore" // Find out what the equivilant of this is for Oracle? Google what its for and ask. The Snapshot function does Oracle have this?
import { NewApplication } from '../types/application'   // Importing a custom type NewApplication, which describes the structure of an application object
import Information from './Information' // Importing the Information component, which will be used to display each application or hotel


function Card() {


    // Declaring a state variable 'applications' to hold an array of NewApplication objects, initialized to an empty array
    // setApplications is the function to update the state
    const [applications, setApplications] = useState<NewApplication[]>([])











    // This useEffect() is collecting all the data for the application from Firebase database

     // This whole part here is like the path you can see in the console on dev tools, it goes into documents (doc) > then to map each data in array . Basically the path to grab all the data for associated collection name and id and then returning it to the front end. Working with applcations collection in the controller file


    // useEffect hook to perform a side effect (setting up a real-time listener) when the component mounts



  useEffect(() => onSnapshot(applicationsCollection, (snapshot:  QuerySnapshot<DocumentData>) => { 
    
        // onSnapshot sets up a real-time listener on the applicationsCollection
        // Whenever the data in the collection changes, the provided callback function is executed
        // The callback receives a QuerySnapshot object representing the current state of the collection



        setApplications (
            // Updating the state with the new data from the snapshot
            snapshot.docs.map((doc) => {
                // Mapping over each document in the snapshot
            return {
             id: doc.id,
             // Extracting the document ID
             ...doc.data(),
             // Spreading the document data (all fields in the document) into the new object
            }
         })
        )

        }),
    []) 

    // Empty dependency array ensures this effect runs only once when the component mounts
    // Returning the unsubscribe function from onSnapshot to clean up the listener when the component unmounts




        // So here I think is what you want the display of the search results to be like
        // taking the application id and displaying (mapping the data) the results in a table format to the front end. Like he has done for hotels
    
    return (
        <div className= "card">
            <h2 className="title">Search results</h2> 

            {/* // This down here is how we're taking the collected data above ^ for applications from firebase and mapping it to the front-end. */}
            {applications && applications.length ? (
             // Checking if the applications array exists and has any elements.
            // If true, it renders the following block:

            <div>
            {/* A div container to hold the list of applications*/}
                {
                    applications?.map((application) => (

                    // Iterating over the applications array using the map function.
                    // For each application, the following block is rendered:


                        <Information key={application.id} application={application} />

                        // Rendering an Information component for each application.
                        // The key prop is set to the application id, which helps React optimize rendering.
                        // The application prop passes the application data to the Information component.
                    ))
                }
            </div>
            ) : (
                <h2 className='no-applications'>There are no applications. please add one</h2>
            )}
        </div>
    )
}

export default Card
