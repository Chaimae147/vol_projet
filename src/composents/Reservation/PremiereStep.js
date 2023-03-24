import React from 'react'

export default function PremiereStep() {
  return (
    <div className='row justify-content-center'>
     <form action="" method="post" class="w-50">
          <div class="form-group mb-3 w-50">
            <label htmlFor="depart"></label>
          <input type="text" class="form-control" id="depart" placeholder="DEPART" name="depart" />
          </div>
        <div class="form-group mb-3 w-50">
            <label htmlFor="destination"></label>
        <input type="text" class="form-control" id="destination" placeholder="DESTINATION" name="destination"/>
        
        </div>
        <div class="btnnlog w-50 ">
          <button type="submit" name="submit" class=" form-control form-control-lg shadow-sm btn btn-primary " >Suivant</button>
        </div>
        
        </form>
    </div>
  )
}
