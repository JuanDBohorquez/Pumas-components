import { css } from "lit-element";

export default css `

body { 
    margin: 0; 
    font-family: Arial, Helvetica, sans-serif; 
    height: 100dvh;
    background-repeat: no-repeat;
    background-size: 500% ;
  } 
  
  .gray-box {
    background-color: #ccc;
    padding: 10px;
    border-radius: 10px;
    margin-top: 30px;
    margin-left: 15px;
    max-width: 270px;
  }
  
  .list {
    list-style-type:none;
    padding: 0;
  }
  
  .list li {
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    color: rgb(79, 81, 83);
    font-weight: bold;
  }
  
  
  .list img {
    height: 15px;
    margin-right: 10px; 
  }
  
  header { 
    background-color: red; 
    display: flex; 
    align-items: center; 
    padding: 20px; 
    width: 25%; 
    border-bottom-right-radius: 60px; 
  } 
  .lg{ 
    background-color: aliceblue; 
    padding: 1px; 
    width: 88%; 
    border-bottom-right-radius: 24px; 
    border-top-left-radius: 10%; 
    border-bottom-left-radius: 10%; 
  
  } 
  
  .logo { 
    height: 60px; 
    display: flex; 
    justify-content: center;    
    margin-right: 10px; 
    border-radius: 200%; 
  } 
  
  .logo img{ 
    margin-top: -10px; 
    margin-left: -10px; 
    height: 80px; 
  
  border-radius: 100%; 
  
  
  } 
  
  
  .row3 {
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
    max-width: 897px;
    margin-top: -530px;
    margin-left: 345px;
  }
  
  
  .card {
    flex: 1;
    width: 300px;
    max-height: 200px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 7px 8px 20px rgba(0, 0, 0, 0.7);
    margin-right: 40px;
    font-family: "Helvetica Neue", sans-serif;
    font-size: 16px;
    display: flex; 
    position: relative;
    z-index: 1; 
  }
  
  
  .card img {
    max-width: 47px; 
    height: 50px;
    margin-right: 10px; 
  }
  
  
  .card h2 {
    font-size: 18px;
    margin: 10px 0 10px 20px; 
    color:#5a5a5a;
    position: relative; 
    top: 10px; 
    right: 32px;
  }
  
  .card h2::after {
    content: "";
    display: block;
    width: 147%; 
    border-bottom: 2px solid #afadad; 
    position: absolute;
    left: 3%; 
  }
  
  .card img:nth-child(3) {
    position: absolute;
    top:45%;
    left: 215px;
    transform: translateY(-50%);
    width: 30px; 
    height: auto; 
  }
  .solicitud h1{
  font-size: 33px;
    color: #5a5a5a;
    position: relative;
    top: 2.5pc;
    left: 42pc;
    text-align: center;
    border-bottom: 1px solid silver;
    max-width: 271px;
  }
  
  .solicitud h3{
  
  font-size: 18px;
  color: #353434;
  position: relative;
  top: 3pc;
  left: -9pc;
  text-align: center;
  font-family: Arial light;
  }
  
  #opci{
  width: 350px;
  height: 40px;
  font-size: 16px;
  position: absolute;
  right: 58pc;
  top: 26pc;
  border-radius: 10px;
  }
  
  
  #opciones {
    width: 265px; 
    height: 31px; 
    font-size: 16px; 
    position: absolute; 
    right: 25pc; 
    top: 24pc; 
    border-radius: 10px;
  }
  
  .contorno {
  width: 75pc;
  height: 17pc;
  border: 2px solid #afadad;
  border-radius: 20px;
  background-color: #ffffff;
  position: absolute;
  top: 57%;
  left: 20%;
  }
  
  .elemento {
    position: absolute;
    top: 27px;
    left: 40px;
    padding: 10px;
    background-color: #ffffff;
  }
  
  .elemento input[type="text"] {
    width: 180%;
    height: 20px;
    margin: 5px 0;
    padding: 5px;
    border-radius: 5px;
  }
  
  
  
  .valor{
    position: absolute;
    top: 27px;
    left: 29pc;
    padding: 10px;
    background-color: #ffffff;
  }
  
  .valor input[type="text"] {
    width: 180%;
    height: 20px;
    margin: 5px 0;
    padding: 5px;
    border-radius: 5px;
  }
  
  .unidades {
    position: absolute;
    right: 87px;
    top: -293px;
  }
  
  .unidades #opciones {
    width: 343px;
    height: 34px;
    font-size: 16px;
    border-radius: 5px;
    color: #c0c0c0;
  }
  
  .fecha{
    position: absolute;
    top: 76px;
    left: 29pc;
    padding: 10px;
    background-color: #ffffff;
  }
  
  .fecha input[type="text"] {
    width: 180%;
    height: 20px;
    margin: 5px 0;
    padding: 5px;
    border-radius: 5px;
  }
  
  .descripcion{
    position: absolute;
    top: 135px;
    left: 40px;
    padding: 10px;
    background-color: #ffffff;
  }
  
  .descripcion input[type="text"] {
    width: 300%;
    height: 85px;
    margin: 5px 0;
    padding: 5px;
    border-radius: 13px;
  }
  
  button {
    background-color: #ff0000;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    top: 181px; 
    left: 41.7pc;
    width: 150px;
  }

`