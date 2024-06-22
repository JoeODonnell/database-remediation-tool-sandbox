// in this file is were I want the search results to be displayed when application id is searched and return back here
// Application id and along to the left of it a view and edit button?



import React, { useEffect, useState} from 'react'
import { applicationsCollection } from '../lib/controller'
import { DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore" // Find out what the equivilant of this is for Oracle? Google what its for and ask. The Snapshot function does Oracle have this?
import { NewApplication } from '../types/application'
import Information from './Information'


function Card() {
    const [applications, setApplications] = useState<NewApplication[]>([])



    // This useEffect() is collecting all the data for the application from Firebase database

     // This whole part here is like the path you can see in the console on dev tools, it goes into documents (doc) > then to map each data in array . Basically the path to grab all the data for associated collection name and id and then returning it to the front end. Working with applcations collection in the controller file

  useEffect(() => onSnapshot(applicationsCollection, (snapshot:  QuerySnapshot<DocumentData>) => { 
    
        setApplications (
            snapshot.docs.map((doc) => {
            return {
             id: doc.id,
             ...doc.data(),
            }
         })
        )

        }),
    []) 




        // So here I think is what you want the display of the search results to be like
        // taking the application id and displaying (mapping the data) the results in a table format to the front end. Like he has done for hotels
    
    return (
        <div className= "card">
            <h2 className="title">Search</h2> 

            {/* // This down here is how we're taking the collected data above ^ for applications from firebase and mapping it to the front-end. */}
            {applications && applications.length ? (
            <div>
                {
                    applications?.map((application) => (
                        <Information key={application.id} application={application} />
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
