// Importing functions from Firebase Firestore to interact with the database.
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore'
// Importing the Firebase app configuration.
import { app } from "./Firebase"

// Initializing Firestore instance using the Firebase app.
export const firestore = getFirestore(app)

// Accessing the 'applications' collection in Firestore.
export const applicationsCollection = collection(firestore, 'applications')
// This creates a reference to the 'applications' collection in the Firestore database.

// Function to update a document in the 'applications' collection.
export const updateApplication = async (id: string | undefined, docData: any) => {
    // Creating a reference to a specific document within the 'applications' collection by ID.
    const getApplication = doc(firestore, `applications/${id}`)
    // Updating the document with new data. The { merge: true } option ensures that only the specified fields are updated.
    await setDoc(getApplication, docData, { merge: true })
    console.log("The value has been written to the database")
}
