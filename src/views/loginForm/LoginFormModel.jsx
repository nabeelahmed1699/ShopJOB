import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Grow from "@mui/material/Grow";
import Typography from "@mui/material/Typography";
import { TextField, Grid, Button, Stack } from "@mui/material";
import Link from "@mui/material/Link";
import NextLink from "next/link";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "rgba(255,255,255,0.8)",
  backdropFilter: "blur(4px)",
  width: "85%",
  maxWidth: "450px",
  overflowY: "auto",
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
};

export default function LoginFormModal({ open, handleClose }) {
  const [jobType, setJobType] = useState("");
  const handleChange = (event) => {
    setJobType(event.target.value);
  };
  return (
    <>
      <Modal
        aria-labelledby="Job-title"
        aria-describedby="job-inputs"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* <Grow direction="bottom" in={open} mountOnEnter unmountOnExit> */}
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h5" component="h2">
            Login
          </Typography>
          <Typography>Please Login to explore the opportunities to get hired.</Typography>
          <Box sx={{ my: 6 }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField id="outlined-basic" label="Email: " variant="standard" fullWidth />
              </Grid>

              <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  id="outlined-basic"
                  label="Password: "
                  type="password"
                  variant="standard"
                  fullWidth
                />
                <Link
                  href="#"
                  underline="hover"
                  sx={{ alignSelf: "flex-end", fontSize: { xs: "0.9rem", sm: "1rem" } }}
                >
                  Forget Password
                </Link>
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Log In
                </Button>
                <Stack sx={{ alignItems: "center" }}>
                  <Typography variant="body2">Don&apos;t have an account?</Typography>
                  <NextLink href="/register" passHref>
                    <Link underline="hover">Register here</Link>
                  </NextLink>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* </Grow> */}
      </Modal>
    </>
  );
}
