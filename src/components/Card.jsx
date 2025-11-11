import React from 'react'

const Card = ({ img, name, price }) => (
    <div className='bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center'>
      <center>  
         <img src={img} alt={name} className="w-40 h-40 object-cover rounded-xl mb-3"/>
          <h3 className="font-semibold text-lg ">{name}</h3>
          <p className="text-blue-600 font-medium mt-1">{price}</p>
        </center>
    </div>

)

export default Card