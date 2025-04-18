import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider, IconButton } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Close } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#fff5dc', mt: 5, pt: 5 }}>
      <Container>
        <Grid container spacing={11}>
          {/* FACILITIES */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" fontWeight="bold">FACILITIES</Typography>
            {[
              'MRI Scan', 'CT Scan', '3D/4D Ultrasound', 'Digital X-Ray', 'CT Coronary Angiography',
              'Mammography', 'Dental Imaging', 'Pathology Laboratory', 'Nuclear Imaging'
            ].map((item, index) => (
              <Typography key={index} variant="body2" sx={{ mt: 1 }}>{item}</Typography>
            ))}
            <Typography variant="body2" sx={{ mt: 1, fontWeight: 'bold' }}>View more…</Typography>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" fontWeight="bold">QUICK LINKS</Typography>
            {['Give Feedback', 'Bio-waste', 'Media coverage', 'News'].map((item, index) => (
              <Typography key={index} variant="body2" sx={{ mt: 1 }}>{item}</Typography>
            ))}
          </Grid>

          {/* ABOUT US */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" fontWeight="bold">ABOUT US</Typography>
            {['About us', 'Our Team', 'Quality Assurance', 'CSR', 'Awards & Accreditations'].map((item, index) => (
              <Typography key={index} variant="body2" sx={{ mt: 1 }}>{item}</Typography>
            ))}
          </Grid>

          {/* CONTACT US */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" fontWeight="bold">CONTACT US</Typography>
            {['Corporate Health Enquiry', 'Clinical Research', 'Contact Us', 'Locate Us', 'Become Franchise'].map((item, index) => (
              <Typography key={index} variant="body2" sx={{ mt: 1 }}>{item}</Typography>
            ))}
          </Grid>

          {/* OTHER LINKS */}
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography variant="subtitle1" fontWeight="bold">OTHER LINKS</Typography>
            {['Covid 19', 'Free Home Sample Collection', 'Health Package', 'Blogs', 'Careers'].map((item, index) => (
              <Typography key={index} variant="body2" sx={{ mt: 1 }}>{item}</Typography>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Bottom Text & Links */}
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" pb={3}>
          <Typography variant="body2" color="textSecondary">
            © 2024 City X-Ray & Scan Clinic Pvt. Ltd. All Rights Reserved!
          </Typography>

          <Box display="flex" alignItems="center" gap={2} mt={{ xs: 2, md: 0 }}>
            <IconButton><Instagram /></IconButton>
            <IconButton><Close /></IconButton>
            <IconButton><Facebook /></IconButton>
            <IconButton><LinkedIn /></IconButton>
          </Box>
        </Box>

        {/* Terms & Policies */}
        <Box display="flex" flexWrap="wrap" justifyContent={{ xs: 'center', md: 'flex-start' }} gap={2} pb={4}>
          {['Terms & Conditions', 'Privacy Policy', 'Disclaimer', 'Refund & Cancellation Policy'].map((text, index) => (
            <Link key={index} href="#" underline="hover" color="inherit" sx={{ fontSize: '0.875rem' }}>
              {text}
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
