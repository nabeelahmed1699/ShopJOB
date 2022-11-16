import React, { useState, useEffect } from "react";
import { Axios } from "axios";
import Head from "next/head";

// import { Pages } from "@mui/icons-material";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
// Icons
import CloseIcon from "@mui/icons-material/Close";
// Custom Imports
import { Layout } from "../../components/layout";
import Post from "../../views/jobs/post";
import Filters from "../../views/jobs/filters";
function Page() {
  const JWTtoken = window.localStorage.getItem("JWTtoken");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getAllPosts() {
    try {
      const response = await fetch("http://localhost:5000/posts", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        // headers: {
        //   "Content-Type": "application/json",
        //   bearertoken: JWTtoken,
        // },
        headers: new Headers({
          Authorization: JWTtoken,
          "Content-Type": "application/json",
        }),
        redirect: "follow",
        referrerPolicy: "no-referrer",
      });

      const data = await response.json();
      setIsProcessing(false);
      console.log("DATA", data);
      router.push("/jobs");
    } catch (error) {}
  }
  useEffect(() => {
    getAllPosts();
  });
  return (
    <>
      <Head>
        <title>ShopJOB | Find Jobs</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          {loading ? (
            <Box
              sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Filters />
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
          )}
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <Layout>{page}</Layout>;
export default Page;
