import { makeStyles, Container, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";
const useStyles = makeStyles(() => ({
  bannerContent: {
    height: 300,
    display: "flex",
    flexDirection: "column",
    marginTop: 60,
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              marginTop: 90,
              fontFamily: "montserrat",
              color: "#E2FF00",
              background:
                "-webkit-linear-gradient(45deg, #E2FF00  , #86FF7D 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CryptoVerse
          </Typography>

          <Typography
            variant="subtitle2"
            style={{
              fontWeight: "bold",
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Track prices and get all the Info regarding your favorite Crypto
          </Typography>
          <Carousel />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
