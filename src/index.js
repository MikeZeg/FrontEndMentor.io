import React from 'react';
import ReactDOM from 'react-dom/client';
import logoImage from './assets/images/illustration-article.svg';
import userLogo from './assets/images/image-avatar.webp'

const user = {
  firstName: 'Greg',
  lastName: 'Hooper',
}
// Hover actions
function onHover(event) {
  event.target.style.color = 'yellow';
  
 }
 function offHover(event) {
  event.target.style.color = 'hsl(0, 0%, 7%)';
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

// Figure - Style -
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

// Content - Style -
const contentStyle = {
    margin:'0 auto auto 25px',
  }
const contentStyle__article = {

}
const contentStyle__article__h1 = {
  fontSize: '25px',
  margin: '10px auto 15px auto',
  // marginTop: '10px',
}
const contentStyle__article__h2 = {
  fontSize: '18px',
  fontWeight: '300',
  color: 'hsl(0,0%,50%)',

}

// User - Info - Style -
   const  userInfoStyle = {
    margin:'0',
    
    width: '80%',
    height: '30px',

    marginLeft: '25px',
    marginRight: '25px',
    display: 'flex',
   }
   const userInfoStyle__Img = {
    display: 'inline-block',
    margin: '0',

    backgroundImage: `url(${userLogo})`,
    width: '30px',
    height: '30px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
 }
  const userInfoStyle__h1 = {
    display: 'inline',
    margin: 'auto auto auto 10px',
    fontSize: '14px',
 }

// Blog - style -
   const blogInfoStyle = {
    margin:'0 auto auto 25px',
  }
   const blogInfoStyle__boxYellow = {
    margin: '20px 0 20px 0',
    width: '50%',

    backgroundColor: 'hsl(47,88%,63%)',
    borderRadius: '5px',
    height:'30px',
    fontSize: '14px',
   }
   const blogInfoStyle__boxYellow__text = {
      margin: 0,
      height: '100%',
      width: '100%',
      display: 'flex',
    
      alignItems: 'center',
      justifyContent: 'center',
   }

// InLine - Style -
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
      <h1 style={blogInfoStyle__boxYellow}> <p style={blogInfoStyle__boxYellow__text}>Learning</p></h1>
      <time style={inlineStyle}><p style={inlineStyle}>Published:</p> 21 Dec 2023</time>
    </section>

    <section style={contentStyle}>    
      <article style={contentStyle__article}>
        <h1 style={contentStyle__article__h1} onMouseLeave={offHover} onMouseOver={onHover}> HTML & CSS fundations</h1>
        <h2 style={contentStyle__article__h2}>These languages are the backbone of every website, defining structure, content and presentation.</h2>
      </article>
    </section>

    <section style = {userInfoStyle}>
      <figure style={userInfoStyle__Img}></figure><h1 style={userInfoStyle__h1}>{user.firstName} {user.lastName}</h1>
    </section>

    </main>
  )
}

const Footer = () => {
  const footerStyle = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    textDecoration: 'inherit',
  }
  const footerStyle__div = {
    color: 'hsl(0,0%,7%)',
  }
  const footerStyle__a__frontEnd = {
    textDecoration: 'inherit',
    color: 'hsl(0,0%,7%)',
  }
  const footerStyle__a__mikeZeg = {
    textDecoration: 'inherit',
    color: 'hsl(0,0%,7%)',
  }
  return (
    <footer style={footerStyle}>
      <div style={footerStyle__div}> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" style={footerStyle__a__frontEnd} onMouseLeave={offHover} onMouseOver={onHover}> Frontend Mentor</a>. 
        Coded by <a href="https://github.com/MikeZeg" target="_blank" style={footerStyle__a__mikeZeg } onMouseOver={onHover} onMouseLeave={offHover}> MikeZeg</a>.
      </div>
  </footer>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root'));

  root.render(
    <div>
    <MainCard/>
    <Footer/>
    </div>
);