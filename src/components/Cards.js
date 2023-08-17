import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/system/Unstable_Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LuxuryIcon from "./LuxuryIcon";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Cards() {

  
  return (
    <>
      <Box
        sx={{
          width: "800PX",
          height: "600",
        }}
      >
        {/* Grid container inside the Box*/}
        <Grid container spacing={0.5} >
          {/* Grid one */}
          <Grid
            xs={4} 
            sx={{
              backgroundColor: "hsl(31, 77%, 52%)",
              color: "white",
              padding: "2rem",
            }}
          >
            {/* Grid Item */}
            <LuxuryIcon /> {/* SVG SEDANS ICON */}
            {/* TITLE */}
            <Typography lineHeight={2} level="h1" fontWeight={"bold"}>
              SEDANS
            </Typography>
            {/* PARAGRAPH */}
            <Typography mt={"1rem"} sx={{color:"hsla(0, 0%, 100%, 0.75)"}}>
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </Typography>
            {/* BUTTON */}
            <Button
              variant="solid"
              sx={{
                backgroundColor: "white",
                color: "hsl(31, 77%, 52%)",
                borderRadius: "30px",
                marginTop: "5rem",
              }}
            >
              Learn More
            </Button>
          </Grid>

          {/* Grid Two */}
          <Grid
            xs={4}
            sx={{
              backgroundColor: "hsl(184, 100%, 22%)",
              color: "white",
              padding: "2rem",
            }}
          >
            {/* Grid Item */}
            <LuxuryIcon /> {/* SVG SUVS ICON */}
            {/* TITLE */}
            <Typography lineHeight={2} level="h1" fontWeight={"bold"}>
              SUVS
            </Typography>
            {/* PARAGRAPH */}
            <Typography mt={"1rem"} sx={{color:"hsla(0, 0%, 100%, 0.75)"}}>
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </Typography>
            {/* BUTTON */}
            <Button
              variant="solid"
              sx={{
                backgroundColor: "white",
                color: "hsl(184, 100%, 22%)",
                borderRadius: "30px",
                marginTop: "5rem",
              }}
            >
              Learn More
            </Button>
          </Grid>

          {/* Grid Three */}
          <Grid
            xs={4}
            sx={{
              backgroundColor: "hsl(179, 100%, 13%)",
              color: "white",
              padding: "2rem",
            }}
          >
            {/* Grid item */}
            <LuxuryIcon /> {/* SVG LUXURY ICON */}
            {/* TITLE */}
            <Typography lineHeight={2} level="h1" fontWeight={"bold"}>
              Luxury
            </Typography>
            {/* PARAGRAPH */}
            <Typography mt={"1rem"} sx={{color:"hsla(0, 0%, 100%, 0.75)"}}>
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </Typography>
            {/* BUTTON */}
            <Button
              variant="solid"
              sx={{
                backgroundColor: "white",
                color: "hsl(179, 100%, 13%)",
                borderRadius: "30px",
                marginTop: "5rem"
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
