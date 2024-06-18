import React, { useState } from 'react'
import { updateApplication } from '../lib/controller';
import { useNavigate } from "react-router-dom";



interface IProps {
    editNewValue: boolean
    setEditNewValue: React.Dispatch<React.SetStateAction<boolean>>
    id?: string
    
  }




function Edit({editNewValue, setEditNewValue, id}: IProps) {
    const [newValue, setNewValue] = useState("")  //updating changes (should these have a better name than newValue and setNew Value, like 'NewApplicationDataValue'?)


    const navigate = useNavigate()



    const handleUpdate = () => {

        // this will update application
        updateApplication(id, { planType: newValue })   //looks like this is what connects to what value you want change, its for 'planType' the now
        setEditNewValue(!editNewValue)

        // navigate back to landing or homepage
        navigate("/")

    }




  return (
    <div className="edit">
        <label>Please enter the new value:</label>
        <textarea
        required
        name="description"
        id="description"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)} // this is setting the new value to whatever gets type in the input form or the new 'state' of it.
      />
      <button className="update-button" onClick={() => handleUpdate()}>Update</button>
      
    </div>
  )
}

export default Edit
