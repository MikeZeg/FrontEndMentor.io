import React from 'react';
import ReactDOM from 'react-dom/client';

// Root Css
const rootStyle = {
  backgroundColor: 'hsl(47, 88%, 63%)',
  fontSize: '1rem',
}


const MainCard = () => {
  const styleCard={
    display: 'flex',
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',

    border: '3px blue solid',

    backgroundColor: 'hsl(0,0%,100%)',
    minWidth: '320px',
    maxWidth: '20%',
    minHeight: '520px',
    maxHeing: '35%',

    boxShadow: '10px 10px 1px 1px black',
    borderRadius: '35px',
    shadowColor: 'hsl(0,0%,7%)'
  }
  return (
    <main style={styleCard}>

    </main>
  )

}


const root = ReactDOM.createRoot(
  document.getElementById('root'));

  root.render(
    
    <MainCard/>
    
);
