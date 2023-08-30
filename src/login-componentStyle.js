import { css } from "lit-element";

export default css `

:root{
    --green: hsl(0, 49%, 57%);
    --lead: hsl(0, 69%, 37%);
    --blue: hsl(220, 85%, 57%);
    --violet: hsl(272, 92%, 32%);
    --tex-red: hsl(0, 92%, 36%);
    --text-light-gray: hsl(0, 0%, 90%);
    --body-bg-color: hsla(200, 54%, 12%);
    --glass-bg-color:hsla(0, 0%, 100%, 0.05);
    --border-color: hsla(0, 0%, 3%, 0.25);
    --blur: blur(10px);
    --button-hover-color: hsla(0, 0%, 0%, 0.3);
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: url("./src/img/fondo.jpg") no-repeat center top;
    font-family: sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.5;
    overflow-x: hidden;
    background-size: cover;
    
}

a{
    text-decoration: none;
    font-weight: 500;
    display: inline-block;
    
}

.gradient-text{
    background: black;
    color: black;
    -webkit-background-clip: text;
    background-clip: text;
    margin: 25px;
}

.form-main{
    min-height: 100vh;
    padding: 60px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-content{
    max-height: 600px;
    width: 100%;
    max-width: 600px;
    position: relative;
    z-index: 1;
}

.form-content .box{
    border-color: var(--glass-bg-color);
    border: 1px solid var(--border-color);
    padding: 0px 0px;
    border-radius: 20px;
    backdrop-filter: var(--blur);
    box-shadow: -1em 1em 25px -5px #4B4F4E;
}

.form-content h3{
    background: red;
    font-size: 28px;
    text-align: center;
    line-height: 1.2;
    color: white;
    font-weight: 500;
    padding-block: 23px;
    border-top-left-radius: 20px 20px;
    border-top-right-radius: 20px 20px;


}

.form-content form{
    margin: 25px 60px 20px;
    
}

.form-content .input-box{
    margin: 35px;
    border-bottom: 1px solid red;
}

.form-content ::placeholder{
    color: inherit;
    opacity: 1;
}

.form-content .input-control{
    display: block;
    height: 45px;
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--border-color);
    color: inherit;
    font-weight: inherit;
    font-family: inherit;
    font-size: 16px;
}

.form-content .input-control:focus{
    outline: none;
}


.form-content .btn{
    height: 45px;
    width: 50%;
    color: white;
    font-size: 26px;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    border-radius: 20px 20px;
    background-color: red;
    margin: 0 117px;
}


.form-content p{
    text-align: center;
    color: black;
}

`