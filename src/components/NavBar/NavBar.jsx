import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid2 as Grid, Paper } from "@mui/material";




const StyledNav = styled(Box)(() => ({
    cursor: "grab",
    fontFamily: 'Aladin',
    fontWeight: '800',
    fontSize: '30px',
    color: '#87CEEB',
    justifyContent: 'center',
    display: 'flex',
    padding: '10px 20px',
    textAlign: 'center',  
    transition: 'color 0.3s ease',  
    '&:hover': {
        color: '#808080'
    }
}));

const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        margin: '10px',
        textAlign: 'center',
        color: theme.palette.text.secondary,          
        display: 'flex',          
        alignItems: 'center',    
        justifyContent: 'center',
        borderRadius: 0,          
        boxShadow: 'none', 
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
      }));



const NavBar = () => {
        return (<Box sx={{ flexGrow: 1, width: '100%', styled: 'Paper'}}>
                                <Grid container spacing= {0}  columns={{ xs: 4, sm: 8, md: 12 }} sx={{marginTop: "20px", marginBottom: "20px", width: '100%', justifyContent: 'center'}}>
                                        <Item>
                                                <StyledNav color="primary" onClick={() => { const element = document.getElementById('skillsbox'); element?.scrollIntoView({behavior: 'smooth'})}}>skills</StyledNav>
                                        </Item>
                                        <Item>
                                                <StyledNav color="primary" onClick={() => { const element = document.getElementById('aboutme'); element?.scrollIntoView({behavior: 'smooth'})}}>about me</StyledNav>
                                        </Item>
                                        <Item>
                                                <StyledNav color="primary" onClick={() => { const element = document.getElementById('footerbar'); element?.scrollIntoView({behavior: 'smooth'})}}>contact</StyledNav>  
                                        </Item>
                                </Grid>
                </Box>
        )
}

export default NavBar;