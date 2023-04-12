import { Typography} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Layout from '../Layout'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
   <>
   <Box sx={{ bgcolor:"black", color: "white", p:3 }}>
    <Box className="icons">
        {/* icon */}
        <InstagramIcon/>
        < GitHubIcon />
        <LinkedInIcon/>
        <FacebookIcon/>
    </Box>
    <Typography >All Right Reserved &copy; coder Himanshi </Typography>
   </Box>
   </>
   
 
  )
}

export default Footer



