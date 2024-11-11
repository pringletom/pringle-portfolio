import React from "react";
import {Grid2 as Grid} from "@mui/material"
import {Box} from "@mui/material"
import CardFlip from "../CardFlip/CardFlip";
import PythonTransparent  from '../../assets/PythonTransparent.png';
import JSTransparent from '../../assets/JSTransparent.webp';
import reactTransparent from '../../assets/reactTransparent.png'
import godotTransparent from '../../assets/godotTransparent.png';
import htmlTransparent from '../../assets/htmlTransparent.png';
import cssTransparent from '../../assets/cssTransparent.png';


const SkillsBox = () => {
  const skillsArray = [
   [PythonTransparent, "Fluent in Python fundamentals and have a strong foundation with variables, data types, control flow (if-else, loops), and functions. Can write understandable, reusable code and I enjoy working collaboratively on projects, as highlighted on my GitHub."],
   [reactTransparent, "This website is made with React! I have consolidated my knowledge of JavaScript, HTML and CSS and developed a fluency with React, familiarising myself with XML, functional components, props, and the React Router. Additionally, I have gained a solid understanding of Node Package Manager and Yarn as storage for dependencies. ", ["https://github.com/pringletom/pringle-portfolio", "This page has been developed in React."]],
   [godotTransparent, "Using knowledge gained from Python I have developed skills in GDScript. I have gained a strong understanding of Godot’s node-based scene structure and can manage game logic with signals and timers. This is exemplified in tutorials such as Dodge The Creeps wherein I played with the tutorial to edit the interface. For example, I was able to increase the speed of the sprite and the ferocity of the mobs. I have also helped migrate a 2D browser based JavaScript game to the Godot platform for a small indie company."],
    [cssTransparent, "Proficient in CSS styling, including accurate use of selectors, fonts and colour schemes. Can utilise CSS elements such as grid and flex box to ensure optimum organisation of website layout. Capable of using pseudo-classes to style elements interactively."],
    [htmlTransparent, "Proficient in writing well structured and semantic HTML documents. Able to accurately format text using appropriate tags to promote website accessibility. Can build interactive forms with event listeners and handlers to manage state."],
    [JSTransparent, "Learnt fundamentals of JavaScript and OOP, developing strong foundational knowledge before learning frameworks such as ReactJS. Able to create single page dynamic web applications with reusable components, utilising test driven development principles."]];
  return ( 
    // Box is the parent container
      <Box id={"skillsbox"} sx={{ flexGrow: 1 }}>
        {/* Grid is the container for our rows & columns to hold our cards */}
        <Grid container spacing={{ xs: 2, md: 3 }} marginTop= {{xs: '20px'}} columns={{ xs: 4, sm: 8, md: 12 }}>
        {/* We create a new box for each skills in the skills array using map function
        map does a for each in skills array and returns the skillData - image and text, url and the index of the Item */}
            {skillsArray.map((skillData, index) => {
              // index [0] =  [pythontransparent, "blah blah text"]
              // skillData [0] = Image skillData[1] = paragraph text skillData[2] = repoUrl
            // map returns 1 box with a card that has the image, text, url and index then goes to the next array item in skillsArray
            return (
            <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <CardFlip cardImage={skillData[0]} cardText={skillData[1]} repoUrl={skillData[2]}/>
            </Grid>
            )})}
        </Grid>
      </Box>

  );
};


export default SkillsBox;