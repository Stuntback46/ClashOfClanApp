import React from 'react';

const FormErrors=({formErrors}) => {

let error=false;
return(

	<div className='formErrors overflow-hidden'>

    {
    	
    	Object.keys(formErrors).map((fieldName, i) => {
    		
      if(formErrors[fieldName].length > 0 && error===false){
      	error=true;
      	
        return (
          <p key={i}>{formErrors[fieldName]}</p>

        ) 
           
      } else {
        return '';
      }
    })

    }
  </div>
  )
}
 
 
export default FormErrors;