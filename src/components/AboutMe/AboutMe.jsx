import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import { styled } from '@mui/material/styles';
import { Box, Grid2 as Grid, Paper } from "@mui/material";

const BorderBox = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    justifyContent: 'center',
    padding: theme.spacing(2),
    alignItems: 'center',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '50%',          
    fontSize: '15px',
    height: '100px',           
    display: 'flex',                    
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

 

const AboutMe = () => {
    return (
            <Box id={"aboutme"} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', marginTop: '20px'}}>
                <BorderBox> 
                    <Paragraph>    
                        Hi, I’m Tom! 
                        I’m a highly motivated self-taught web-developer. I’ve been learning to code since June 2024 and have gained proficiencies in React, Python, JavaScript, GDScript, and HTML and CSS.
                        I always welcome new challenges and enjoy creating innovative solutions. My adaptability and attention to detail lend themselves well to problem-solving and debugging. As well as my technical skills I value working collaboratively and have developed excellent communication skills to convey ideas, updates and analysis.
                    </Paragraph> 
                </BorderBox>   
            </Box>
);
}


export default AboutMe