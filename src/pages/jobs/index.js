import React, { useState } from "react";
import Head from "next/head";

// import { Pages } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
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
// Custom Imports
import { Layout } from "../../components/layout";
import Post from "../../views/post";
function Page() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Head>
        <title>ShopJOB | Find New Job</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Filter Jobs" sx={{ pb: 0 }} />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={5.7}>
                      <TextField
                        id="outlined-basic"
                        label="Search Location"
                        variant="outlined"
                        fullWidth
                      />
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
                    <Grid
                      item
                      xs={12}
                      md={0.6}
                      sx={{ alignSelf: "center", justifyContent: "center" }}
                    >
                      <IconButton sx={{ ml: { xs: 0, md: "auto" } }}>
                        <CloseIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {[
                  1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
                  24, 25, 26,
                ].map((i) => {
                  return (
                    <Grid key={i} item xs={12} md={6} lg={4} sx={{ alignItems: "start" }}>
                      <Post />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <Layout>{page}</Layout>;
export default Page;
