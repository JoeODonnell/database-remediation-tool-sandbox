
import React, {useState} from 'react'
import { NewApplication } from '../types/application'
import { Link } from 'react-router-dom'
import Edit from './Edit'


interface IProps {

    application: NewApplication
    detailsPage?: boolean
}




function Information({ application, detailsPage }: IProps) {
    const [editNewValue, setEditNewValue] = useState(false)





            //Replace 'Edit' with a pencil symbol for editing
            // Will I need to put a cancel button or back button for user who changes mind on editing?


    // this part below will display seacrch results?
    // Put into a table format for the results?
  return (
    <div className="hotel-preview">
        <div className='description'>
            

            
           
            {detailsPage ? (
                <p> Plan Type:{application.planType}{" "} <strong className='edit-text' 
                    onClick={() => setEditNewValue
                    (!editNewValue)}> Edit 
                </strong>
                {editNewValue ? (
                    <Edit  
                        editNewValue={editNewValue} 
                        setEditNewValue={setEditNewValue}
                        id={application.id}
                    />
                )   : null}
                </p>
               
                
                   

            ): ( 
                <Link to={`/applications/${application.id}`}>
                    <p>Application: 123456</p>
                    <button className="moreinfo-btn">View More Information</button>
                </Link> 
            )}

        
            
        </div> 
        
    </div>
  )
}

export default Information
