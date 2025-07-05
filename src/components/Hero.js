import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

const Hero = ({ content }) => {
  const {
    title = 'THE GENIUS CODE',
    subtitle = 'Internationally acclaimed motivational speaker with 30 years of experience',
    cta = 'BOOK NOW',
    image = 'https://source.unsplash.com/random?motivational',
  } = content || {};

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${image})`,
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Increase the priority of the hero background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
          }}
        >
          <Typography variant="h2" color="inherit" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" color="inherit" paragraph>
            {subtitle}
          </Typography>
          <Button variant="contained" size="large" sx={{ mt: 2 }}>
            {cta}
          </Button>
        </Box>
      </Container>
    </Paper>
  );
};

export default Hero; 