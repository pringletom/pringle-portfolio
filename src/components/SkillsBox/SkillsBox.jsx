import React from "react";
import {Grid2 as Grid} from "@mui/material"
import {Box} from "@mui/material"
import CardFlip from "../CardFlip/CardFlip";
import PythonTransparent  from '../../assets/PythonTransparent.png';
import JavasTransparent from '../../assets/JavasTransparent.webp';
import reactTransparent from '../../assets/reactTransparent.png'
import godotTransparent from '../../assets/godotTransparent.png';
import htmlTransparent from '../../assets/htmlTransparent.png';
import cssTransparent from '../../assets/cssTransparent.png';


const SkillsBox = () => {
  const skillsArray = [
    [PythonTransparent, "Text about python"],
    [reactTransparent, "Text about react"],
    [godotTransparent, "Text about godot"],
    [cssTransparent, "Text about css"],
    [htmlTransparent, "Text about html"],
    [JavasTransparent, "Text about JS"]
  ];
  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {skillsArray.map((skillData, index) => (
            <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
              <CardFlip cardImage={skillData[0]} cardText={skillData[1]} />
            </Grid>
          ))}
        </Grid>
      </Box>

  );
};


export default SkillsBox;