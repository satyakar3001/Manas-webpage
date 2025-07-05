import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

const About = ({ content }) => {
  const {
    title = 'About Manas',
    paragraphs = [
      'Manas Kumar is an internationally acclaimed motivational speaker with 30 years of corporate training experience.',
      'He has worked with over 2000 multinational corporations in 51 countries, impacting over 3 million people through his workshops and books.',
      'As the first Indian author to win 46 international book awards, Manas has written 17 inspirational books, translated into 11 languages with #1 bestseller status worldwide.',
      'He received the Good Karma Award as India\'s best inspirational author, and the French media has compared him to Paulo Coelho. Additionally, Manas is India\'s first certified fire walk instructor, having conducted over 2000 fire walks globally.'
    ],
    quote = 'I am blessed that my love for people and passion to help is what I do for a living. Actually, in any way that one looks at it, that should be the primary agenda of every business and professional. To motivate, to inspire, to lead, is what drives me because I sincerely believe that there is a far better future that we can make, even when we believe that we are doing our best.',
    name = 'Manas Kumar',
    role = 'CEO & Chief Facilitator',
    avatar = 'MK',
  } = content || {};

  return (
    <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          {title}
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            {paragraphs.map((text, idx) => (
              <Typography variant="body1" paragraph key={idx}>
                {text}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ width: 56, height: 56, mr: 2 }}>
                    {avatar}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {role}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" paragraph>
                  "{quote}"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 