import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import { styled } from '@mui/material/styles';
import { Box, Grid2 as Grid, Paper } from "@mui/material";

const BorderBox = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '50px',
    alignItems: 'center',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '50%',          
    fontSize: '15px',
             
    display: 'flex', 
    marginTop: '20px',
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

 

const AboutMe = () => {
    return (
            <Box sx={{display: 'flex', justifyContent: 'center' }}>
                <BorderBox id={"aboutme"} >
                    <Paragraph/>
                </BorderBox> 
            </Box>
            
            
);
}


export default AboutMe