import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Default container style for the map
const containerStyle = {
  width: "100%",
  height: "400px", // Ensure there's a height for the map to render
};

const MyComponent = () => {
  const [center, setCenter] = useState({
    lat: 37.7749, // Default to San Francisco
    lng: -122.4194,
  });

  const [addressInput, setAddressInput] = useState("San Francisco");

  // Handle input change
  const handleAddressChange = (event) => {
    setAddressInput(event.target.value);
  };

  // Find location (for simplicity, we hardcode locations here)
  const handleFindLocation = () => {
    if (addressInput === "San Francisco") {
      setCenter({ lat: 37.7749, lng: -122.4194 });
    } else if (addressInput === "Mountain View") {
      setCenter({ lat: 37.4236, lng: -122.0840 });
    } else {
      alert("Address not recognized. Please try again.");
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {/* Left Side: Content (Address) */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Enter Address
            </Typography>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              value={addressInput}
              onChange={handleAddressChange}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={handleFindLocation}
            >
              Find Location
            </Button>
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="h6">Address:</Typography>
              <Typography variant="body1">{addressInput}</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Side: Google Map */}
        <Grid item xs={12} md={6}>
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyComponent;
