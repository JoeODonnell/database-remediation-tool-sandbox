import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from '../lib/controller'
import { doc, getDoc } from "firebase/firestore"
import Information from './Information'



//This file or class will fetch the data for a specific application.

function Details() {
    const { id } = useParams()

    // Fetch a single application
    const getApplication = doc(firestore, `applications/${id}`)

    

    const [isLoading, setIsLoading] = useState(false) // for spinner loader
    const [application, setApplication] = useState({})



    useEffect(() => {
        const fetchApplicationData = async () => {
          setIsLoading(true)
          const docSnap = await getDoc(getApplication)
          if (docSnap.exists()) {
            const newApplicationObj = {
              id: docSnap.id,
              ...docSnap.data(),
            }
            setApplication(newApplicationObj);
        setIsLoading(false);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document");
      }
    }
    fetchApplicationData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



    if (isLoading) return <div className="loading" />
    return (
       <div className="hotel-details">
        {Object.keys(application) && Object.keys(application).length ? (
          <Information application={application} detailsPage />
        ): null}
      </div>
    )
  
}

export default Details
