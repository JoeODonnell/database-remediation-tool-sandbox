// In this file is were you will be doing the Create, Read, Update and Delete to the databse
import {collection, doc, getFirestore, setDoc} from 'firebase/firestore' //find out what the equiviliant of these imports are in Oracle?
import { app } from "./Firebase"



export const firestore = getFirestore(app)




//Applications collection
export const applicationsCollection = collection(firestore, 'applications') // < So this is accessing Firestore cloud which is in Firebase and second path is the title of the collection you want to grab data from, which is a called applications 





// EDIT A DOCUMENT (but only the 'Plan Type', look back on tutorial for how to update the other fields)

export const updateApplication = async (id: string | undefined, docData: any) =>  {


    const getApplication = doc(firestore, `applications/${id}`)
    await setDoc(getApplication, docData, { merge: true })      // This line here, lets you only edit the files you want to edit instead of passing in all details once again and creating a new document or replacing it
    console.log("The value has been written to the database")
}