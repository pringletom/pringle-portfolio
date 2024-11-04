import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid2 as Grid, Grow } from "@mui/material";



const StyledNav = styled(Box)(() => ({
    cursor: "grab",
    fontFamily: 'Aladin',
    fontWeight: '800',
    fontSize: '30px',
    color: '#87CEEB',
    justifyContent: 'center',
    display: 'flex',
    margin: '5px',
    padding: '10px 20px',
    float: 'left',
    textAlign: 'center',
   
   
    
}));

const NavBar = () => {
        return (<Box sx={{ flexGrow: 1, width: '100%', backgroundColor: 'navy' }}>
                    <Grid container spacing={{ xs: 4, md: 6 }}  columns={{ xs: 4, sm: 8, md: 12 }} sx={{marginTop: "20px", marginBottom: "20px", width: '100%', justifyContent: 'center'}}>
                            <StyledNav color="primary" onClick={() => { const element = document.getElementById('skillsbox'); element?.scrollIntoView({behavior: 'smooth'})}}>skills</StyledNav>
                            <StyledNav color="primary" onClick={() => { const element = document.getElementById('skillsbox'); element?.scrollIntoView({behavior: 'smooth'})}}>about me</StyledNav>
                            <StyledNav color="primary" onClick={() => { const element = document.getElementById('footerbar'); element?.scrollIntoView({behavior: 'smooth'})}}>contact</StyledNav>
                    </Grid>
                </Box>
        )
}

export default NavBar;