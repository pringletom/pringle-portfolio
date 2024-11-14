import React from "react";
import {LinkedIn, GitHub, Email} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Box } from "@mui/material";
import {Grid2 as Grid} from "@mui/material"

const StyledLinkedIn = styled(LinkedIn)(({ theme }) => ({
    cursor: "grab"
    
  }));
const StyledGitHub = styled(GitHub)(({ theme }) => ({
    cursor: "grab"
  
  }));
const StyledEmail = styled(Email)(({ theme }) => ({
    cursor: "grab"
  
  }));


const FooterBar = () => {
    const mailTo = () => {
        window.location.href = "mailto:pringletom0@gmail.com";
    }
    
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };
    return (<Box id={"footerbar"} sx={{ flexGrow: 1, alignItems: "center", justifyContent: "center", display: "flex" }}>
                <Grid container spacing={{ xs: 2, md: 3 }}  columns={{ xs: 4, sm: 8, md: 12 }} sx={{marginTop: "90px", marginBottom: "20px"}} maxHeight={20} maxWidth={90}>
                    <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                        <StyledLinkedIn color="primary" onClick={() => openInNewTab("https://www.linkedin.com/in/thomas-pringle-9b0942167/")}/>
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                        <StyledGitHub onClick={() => openInNewTab("https://github.com/pringletom")}/>
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                        <StyledEmail onClick={() => mailTo()}/>
                    </Grid>
                </Grid>
            </Box>
    )
}



export default FooterBar;