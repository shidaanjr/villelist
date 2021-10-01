import React from 'react'
import Button from './Button';
export const City = ({name, img}) => {
    return (
     <div>   
     <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">

     <div className="mr-1">
     <img className="rounded" src={img} width={200} alt=""/>

     </div>
     <div className="d-flex flex-column align-items-center product-details">
             {name}
     </div>
     <Button/>
</div>
    

  
  </div>
        
    )
}

export default City;