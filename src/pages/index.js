import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
// import { Budget } from '../components/dashboard/budget';
// import { LatestOrders } from '../components/dashboard/latest-orders';
// import { LatestProducts } from '../components/dashboard/latest-products';
// import { Sales } from '../components/dashboard/sales';
// import { TasksProgress } from '../components/dashboard/tasks-progress';
// import { TotalCustomers } from '../components/dashboard/total-customers';
// import { TotalProfit } from '../components/dashboard/total-profit';
// import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { Layout } from "../components/layout";
import Post from "../views/post/post";
const Page = () => (
  <>
    <Head>
      <title>ShopJOB | Find your Job</title>
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
            1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
            26,
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

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
