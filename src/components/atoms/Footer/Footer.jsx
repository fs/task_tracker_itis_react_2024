// eslint-disable-next-line import/no-extraneous-dependencies
// import React from "react";
// import { Typography } from "@mui/material";
// import { Wrapper, StyledLink } from './styled';
//
// const Footer = () => {
//   return (
//     <Wrapper>
//
//       <footer className="footer" style={{
//         marginTop: '20px',
//         backgroundColor: '#171517',
//         color: '#FFFFFF',
//         padding: '20px 0',
//         textAlign: 'center'
//       }}>
//         <Typography variant="body2">
//           Footer content here
//         </Typography>
//
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Typography } from '@mui/material';
import "src/components/styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer" style={{ marginTop: '20px', backgroundColor: '#7593cc', color: '#FFFFFF', padding: '20px 0', textAlign: 'center' }}>
      <Typography variant="body2">
        © 2024 Stackers team
      </Typography>
    </footer>
  );
};
export default Footer;