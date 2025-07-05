import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Manas Kumar
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              CEO & Chief Facilitator
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              "I am blessed that my love for people and passion to help is what I do for a living. 
              Actually, in any way that one looks at it, that should be the primary agenda of every 
              business and professional. To motivate, to inspire, to lead, is what drives me because 
              I sincerely believe that there is a far better future that we can make, even when we 
              believe that we are doing our best."
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Phone: +91 9967734215
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Email: manas@manas-kumar.com
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Address: Placeholder address
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Stay Connected
            </Typography>
            <Box sx={{ mb: 2 }}>
              <IconButton color="primary" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" aria-label="YouTube">
                <YouTubeIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Follow us on social media for the latest updates and inspirational content.
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'divider' }}>
          <Grid container spacing={2} justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                © 2025 Copyrights Manas Kumar. All rights reserved.
              </Typography>
            </Grid>
            <Grid item>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link href="#" color="inherit" underline="hover">
                  Privacy Policy
                </Link>
                <Link href="#" color="inherit" underline="hover">
                  Contact Us
                </Link>
                <Link href="#" color="inherit" underline="hover">
                  Terms and Conditions
                </Link>
                <Link href="#" color="inherit" underline="hover">
                  Books
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 