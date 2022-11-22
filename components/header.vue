<template>
    <header>
      <ul class="nav">
        <li><a href="index.html" class="navbar">Home</a></li>
        <li><a href="login.html" class="navbar">Login</a></li>
        <li><a href="addPost.html" class="navbar">Add a post</a></li>
        <a class="navbar-brand" href="res/images/favicon.ico"> </a>
      
      </ul>
      <div class="hor_spacer"></div>
      <div style="display: flex; justify-content: flex-end; padding-right: 6.5em;">
      <div class="dropdown">
        <img class = "icon dropbtn" id="profile_pic" src="res/images/me.png" alt="profile picture" onclick="myFunction()">
        <div id="myDropdown" class="dropdown-content">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      </div>
    </header>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    name: "header",
    
};
</script>

<style>
body{
    background-color: #FEFAE0;
    display:block; 
}

header {
    width: 100%;
    padding-bottom: 50px;
    display: inline-block;
}

.playerOne{
    margin-left: 0;
 }

.playerTwo{
  margin-right: 0;
}
ul {
    list-style-type: none;
    margin: 0 ;
    padding: 0;
    overflow: hidden;
    background-color: #606C38;
    position: fixed;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
    top:0;
    width: 100%;
    right:0px;
    padding-top: .6em;
    padding-bottom: .6em;
}

li {
    float: left;
    padding-left: 10;
    padding-right: 15;
}

button{
    padding: 10px;
    margin: auto;
    background-color: #DDA15E;
    color: #FEFAE0;
    border: 3px solid #FEFAE0;
    border-radius: 5px;
    font-weight: bold;
}
button:hover {
    color: #606C38;
    border-color: #283618;
}

li a{
    display: block;
    text-transform: uppercase;
    text-align: center;
    font-size: .99em;
    text-decoration: none;
    border: 3px solid #FEFAE0;
    background-color: #DDA15E;
    width: 110%;
    margin:auto;
    color: #FEFAE0;
    font-weight: bold;
    border-radius: 5px;
}
</style>