import Head from "next/head";
// import { Pages } from "@mui/icons-material";
import { Box, Container, Grid } from "@mui/material";
import { Layout } from "../../components/layout";
import Post from "../../views/post";
function Page() {
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
            {[
              1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
              25, 26,
            ].map((i) => {
              return (
                <Grid key={i} item xs={12} md={6} lg={4} sx={{ alignItems: "start" }}>
                  <Post />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <Layout>{page}</Layout>;
export default Page;
