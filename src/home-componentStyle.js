import { css } from "lit-element";

export default css `

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: sans-serif;
  }

  .container { 
    display: flex; 
    padding: 15px; 
    min-height: 90vh; 
    box-sizing: border-box; 
  } 
  
  .header {
    background-color: red;
    height: 135px;
    display: flex;
    align-items: center;
    width: 35%;
    top: 0;
    left: 0;
    padding: 20px;
    border-bottom-right-radius: 70px;
  }
  
  .nav {
    background: white;
    display: flex;
    justify-content: center;
    border-bottom-right-radius: 50px;
    width: 450px;
    margin-bottom: 7px;
    margin-top: 7px;
    margin-left: 7px;
  }

  .menu-hamburger{
    display: flex;
    cursor: pointer;
    margin-left: 1150px;
    max-width: 90px;
    max-height: 90px;
  }

  .menu-hamburger .nav-toggle{
    margin: 100px;
    height: 50px;
    width: 40px;
    margin: auto;
    background-color: white;


  }

  .nav img{
    border-radius: 100%;
    height: 70px;
    width: 70px;
    display: flex;
    margin: 5px;
    margin-left: -1px;

   
  }
 
  .nav-link {
    color: black;
    text-decoration: none;
    display: flex;
    justify-content: center;
  }
  
  .logo {
    font-size: 30px;
    font-weight: bold;
    padding: 7px 90px;
    line-height: 20px;
    width: 200px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 90px;
    margin-left: 30px;

  }

/* Nav-Bar*/

.nav-bar{
  background: #9F9F9F;
  padding: 15px;
  border-radius: 20px;
  flex: 0.5;
  display: flex;
  max-width: 290px;
  flex-direction: column;
  margin-bottom: auto;
}

.items{
  background: white;
  padding: 20px 20px;
  border-radius: 20px;
  margin-top: 15px;
  margin-left: 22px;
  margin-right: 22px;
  margin-bottom: 20px;
  list-style: none;
  height: 60px;
  width: 200px;
}


.navbar-text{
  text-decoration: none;
  color: black;
  margin-left: 15px;
}


/*Cuadricula*/

h1 { 
  margin: 0; 
} 

.menu { 
  flex: 0.5; 
  display: flex; 
  flex-direction: column; 
  padding: 10px; 
  background-color: rgba(199, 199, 199, 0.645); 
  border-radius: 20px; 
  align-items: center; 
  margin-bottom: auto; 
} 

.menu button { 
  width: 100%; 
  background-color: aliceblue; 
  border: none; 
  padding: 10px; 
  border-radius: 5px; 
  margin-bottom: 55px;
} 

.modules { 
  flex: 4; 
  display: grid; 
  grid-template-columns: repeat(3, 2fr); 
  gap: 20px; 
  justify-content: space-around; 
  align-items: center; 
  justify-items: center; 
} 

.module { 
  width: 81%; 
  height: 70%; 
  text-align: center; 
  border: 1px solid black; 
  border-radius: 17px; 
  padding: 10px; 
} 

.module h2 { 
  margin-top: 0; 
  align-items: center; 
} 

.module img { 
  max-width: 100%; 
  height: auto; 
  margin-bottom: 10px; 
} 

.module-content { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
} 

button { 
  background-color: red; 
  border-radius: 20px; 
  margin: 8px;

} 

.a { 
  color: aliceblue; 
  font-size: 35px;
  margin: 6px;
  text-decoration: none;
  font-family: inherit;
}

.img-cuadricula{
  max-width: 100px;
  max-height: 150px;
  margin: 15px;
}

`