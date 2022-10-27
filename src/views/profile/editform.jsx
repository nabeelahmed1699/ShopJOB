import { Box, Button, Grid, InputLabel, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const EditForm = () => {
  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Stack
            direction={{ sm: "row" }}
            spacing={2}
            sx={{ justifyContent: "flex-end", alignItems: "center" }}
          >
            <Typography
              component="span"
              sx={{ fontSize: "1rem", color: "ActiveBorder", order: { xs: 2, sm: 1 } }}
            >
              Update profile picture
            </Typography>
            <Button variant="contained" component="label" sx={{ order: 1 }}>
              Upload File
              <input type="file" hidden />
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ alignSelf: "center" }}>
              <InputLabel for="firstname" sx={{ fontSize: "20px" }}>
                First Name
              </InputLabel>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField fullWidth id="firstname" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ alignSelf: "center" }}>
              <InputLabel for="lastname" sx={{ fontSize: "20px" }}>
                Last Name
              </InputLabel>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField fullWidth id="lastname" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ alignSelf: "center" }}>
              <InputLabel for="phone" sx={{ fontSize: "20px" }}>
                Phone Number
              </InputLabel>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField fullWidth id="phone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ alignSelf: "center" }}>
              <InputLabel for="email" sx={{ fontSize: "20px" }}>
                Email
              </InputLabel>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField fullWidth id="email" type="email" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ alignSelf: "center" }}>
              <InputLabel for="location" sx={{ fontSize: "20px" }}>
                Location
              </InputLabel>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField fullWidth id="location" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ alignSelf: "start" }}>
              <InputLabel for="bio" sx={{ fontSize: "20px" }}>
                Your Bio
              </InputLabel>
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField fullWidth multiline id="bio" rows={6} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} sx={{ justifyContent: "flex-end" }}>
            <Button variant="outlined">Cancel</Button>
            <Button variant="contained">Save</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditForm;
