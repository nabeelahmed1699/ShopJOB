import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  IconButton,
} from "@mui/material";

// Icons
import CloseIcon from "@mui/icons-material/Close";

const Filters = () => {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card>
      <CardHeader title="Filter Jobs" sx={{ pb: 0 }} />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5.7}>
            <TextField id="outlined-basic" label="Search Location" variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={12} md={5.7}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Categories"
                onChange={handleChange}
              >
                <MenuItem value={10}>Plumber</MenuItem>
                <MenuItem value={20}>Electrition</MenuItem>
                <MenuItem value={30}>Milk man</MenuItem>
                <MenuItem value={30}>General store helper</MenuItem>
                <MenuItem value={30}>Bike Mechanic</MenuItem>
                <MenuItem value={30}>Car Mechanic</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={0.6} sx={{ alignSelf: "center", justifyContent: "center" }}>
            <IconButton sx={{ ml: { xs: 0, md: "auto" } }}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Filters;
