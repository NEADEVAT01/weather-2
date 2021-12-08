import React from 'react';
import '../styles/FactModal.css';
const FactModal = (props) => {      
    
    return (      
      <div className={props.active ? 'modal' : 'not_active' } >
        <div className='w-75 mx-auto my-4 main_modal bg-dark '>
        <button className='btn float-end close_button text-white'  onClick={() => props.setActive(false)}>✖</button>    
          <h1 className="text-center py-3 text-center">{props.title}</h1>
          <img src={props.url} alt="fact_image" className='mx-auto d-block' /> 
          <p className='p-2'>{props.text}</p>
        </div>
      </div>
      
    );
}

export default FactModal; 