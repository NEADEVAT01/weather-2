import React from 'react';
import '../styles/Loading.css';
const Loading = () => {    
    return (
      <div className="loading">
          <h1>
            Loading
            <div className="spinner-border mx-3" role="status">              
            </div>
          </h1>
          <img src='https://c.tenor.com/lD4ehjqMEmcAAAAi/polarbear-bear.gif' alt='loading_gif'/>      
      </div>
    );
}

export default Loading;