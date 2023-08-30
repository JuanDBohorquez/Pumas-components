import { css } from "lit-element";

export default css `

body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  
  
  
  header { 
    background-color: red; 
    display: flex; 
    align-items: center; 
    padding: 20px; 
    width: 25%; 
    border-bottom-right-radius: 60px; 
  } 
  .xd{ 
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
  
  label {
    position: absolute;
    left: 70px;
    color: rgb(114, 116, 117);
    font-size: 16px;
    pointer-events: none;
    font-weight: bold;
  }
  
  .circle {
    background-color: white;
    border-radius: 50%;
    width: 85px;
    height: 85px;
    position: absolute;
    top: -20px;
    left: -22px;
    background-size: cover;
    background-position: center;
    background-image: url("../img/logo.png");
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
  
  
  .list img {
    height: 15px;
    margin-right: 10px; 
  }
  
  
  .row1 {
    display: flex;
    align-items: flex-end; 
    margin-bottom: 10px;
    max-width: 900px;
    margin-top: -530px ;
    margin-left: 400px;
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
  
  
  .dropdown {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 55px;
  }
  
  .menu-icon {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    cursor: pointer;
    font-size: 30px;
    padding: 8px;
    background-color: #5a5a5a;
    border-radius: 5px;
    color: #ffffff;
  
  }
  
  
  .menu {
    display: none;
    position: absolute;
    background-color: #ffffff;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 8px;
    min-width: 150px;
    right: 20px;
    top: 20px;
    z-index: 2;
  }
  
  .menu li {
    list-style: none;
  }
  
  .menu a {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
    color: #333;
  }
  
  .menu-icon:hover + .menu,
  .menu:hover {
  display: block;
  }
  
  .acta h1{
    font-size: 33px;
    color:#5a5a5a;
    position: relative; 
    top: 1.5pc;
    left: 42pc;
    text-align: center;
    border-bottom: 1px solid silver;
    max-width: 271px;
  }
  
  
  
  .acta h3 {
    font-size: 18px;
    color: #353434;
    position: relative;
    top: 2pc;
    left: -10pc;
    text-align: center;
    font-family: Arial light;
  }
  
  #opciones {
    width: 265px;
    height: 31px;
    font-size: 16px;
    position: absolute;
    left: 33pc;
    top: 26pc;
    border-radius: 10px;
  }
  
  .acta2 h3 {
    font-size: 18px;
    color: #353434;
    position: absolute;
    top: 22pc;
    left: 55pc;
    text-align: center;
    font-family: Arial light;
  }
  
  #opciones2 {
    width: 265px;
    height: 31px;
    font-size: 16px;
    position: absolute;
    left: 55pc;
    top: 26pc;
    border-radius: 10px;
  }
  
  
  .contorno {
    width: 900px;
    height: 240px;
    border: 2px solid #afadad;
    border-radius: 20px;
    background-color: #ffffff;
    position: absolute;
    top: 59%;
    left: 24%;
    overflow: hidden;
    padding: 10px;
  }
  
  table{
    border-collapse: collapse;
    width: 100%;
    height: 100%;
    position: relative; 
    color: #ffffff;
    border-radius: 15px; 
  }
  
  .table-container {
    border-radius: 15px; 
    overflow: hidden; 
  }
  
  th, td {
    border: 1px solid #aaa2a2;
    padding: 14px;
    text-align: center;
  }
  
  th.narrow-column {
    width: 90px; 
  }
  
  th:not(.narrow-column), td:not(.narrow-column) {
    width: 120px; 
  }
  
  th {
    background-color: #504e4e;
  }
  
  tr:nth-child(n+2) {
    background-color: #ffffff;
  }

`