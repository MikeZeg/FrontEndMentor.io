import React from 'react';
import ReactDOM from 'react-dom/client';
import logoImage from './assets/images/illustration-article.svg';
import userLogo from './assets/images/image-avatar.webp'

// Root Css
// const rootStyle = {
//   backgroundColor: 'hsl(47, 88%, 63%)',
//   fontSize: '1rem',
// }
const user = {
  firstName: 'Greg',
  lastName: 'Hooper',
}

const MainCard = () => {
  const styleCard={
    display: 'grid',
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',

    border: '1px hsl(0,0%,7%) solid',

    backgroundColor: 'hsl(0,0%,100%)',
    minWidth: '380px',
    maxWidth: '20%',
    minHeight: '520px',
    maxHeing: '35%',

    boxShadow: '15px 15px 1px 1px black',
    borderRadius: '25px',
    shadowColor: 'hsl(0,0%,7%)'
  }

  const figStyle = {
    margin: '25px 20px auto 20px',
    padding: '0',
    borderRadius:'10px',

    backgroundImage: `url(${logoImage})`,
    width:'90%',
    height:'200px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  const contentStyle = {
    margin:'0 auto auto 25px',

  }
  const blogInfoStyle = {
    margin:'0 auto auto 25px',

  }
  const  userInfoStyle = {
    border: '1px blue solid',
    margin:'0',
    
    width: '300px',
    height: '50px',


    marginLeft: '25px',
    marginRight: 'auto',
    display: 'inline-block',

   }
   const figUserImg = {
      border: '1px red solid',
      display: 'inline-block',
      margin: '0',

      backgroundImage: `url(${userLogo})`,
      width: '30px',
      height: '30px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
   }
   const inlineStyle = {
    display: 'inline',
    width: '100px',
    height: '50px',
   }

  return (
    <main style={styleCard}>

      <figure style={figStyle}>
        {/* <img src={logoImage} alt='blog_logo' style={styleImg}></img> */}
        <figcaption></figcaption>
      </figure>

    <section style={blogInfoStyle}>
      <h1>Learning</h1>
      <time><p>Published:</p> 21 Dec 2023</time>
    </section>

    <section style={contentStyle}>    
      <article>
        <h1> HTML & CSS fundations</h1>
        <h2>These languages are the backbone of every website, defining structure, content and presentation.</h2>
      </article>
    </section>

    <section style = {userInfoStyle}>
      <figure style={figUserImg}></figure><h1 style={inlineStyle}>{user.firstName} {user.lastName}</h1>
    </section>

    </main>
  )
}


const root = ReactDOM.createRoot(
  document.getElementById('root'));

  root.render(
    
    <MainCard/>
    
);
