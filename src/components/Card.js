import React from "react";

const Card = ({ name, email, id }) => {
 return (
  // these classNames are from tachyons CSS
  <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shoadow-5'> 
   <img src={`https://robohash.org/${id}?100x100`} alt=''/>
   <div>
    <h2>{name}</h2>
    <p>{email}</p>
   </div>
  </div>
 )
}

export default Card; 