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
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const JWTtoken = window.localStorage.getItem("JWTtoken");

  async function getAllPosts() {
    try {
      const response = await fetch("http://localhost:5000/posts", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: new Headers({
          Authorization: "Bearer " + JWTtoken,
          "Content-Type": "application/json",
        }),
        redirect: "follow",
        referrerPolicy: "no-referrer",
      });
      if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        console.log("DATA", data);
        setJobs(data.AllPosts);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllPosts();
  }, []);
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
                  {loading ? (
                    <Grid item xs={12}>
                      <CircularProgress />
                    </Grid>
                  ) : (
                    jobs.map((job) => {
                      const { _id } = job;
                      return (
                        <Grid key={_id} item xs={12} md={6} lg={4} sx={{ alignItems: "start" }}>
                          <Post post={job} />
                        </Grid>
                      );
                    })
                  )}
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
