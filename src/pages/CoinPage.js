import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import CoinInfo from "../components/CoinInfo";
import { numberWithCommas } from "../components/CoinsTable";
import { CryptoState } from "../CryptoCurrency";
import { makeStyles, Typography } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";
import { Box } from "@material-ui/core";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      width: "28%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        borderRight: "0px",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      marginBottom: 25,
      borderRight: "2px solid #E2FF00",
    },
    heading: {
      fontFamily: "montserrat",
      color: "white",
    },
    title: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "montserrat",
      color: "#E2FF00",
      background: "-webkit-linear-gradient(45deg, #E2FF00  , #86FF7D 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    description: {
      width: "100%",
      fontFamily: "montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      marginBottom: 20,
      textAlign: "justify",
    },
    marketData: {
      alignSelf: "start",
      color: "#E2FF00",
      padding: 20,
      width: "100%",
    },
  }));

  const classes = useStyles();

  if (!coin) return <LinearProgress style={{ backgroundColor: "#E2FF00" }} />;

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20, marginTop: 40 }}
        ></img>
        <Typography variant="h3" className={classes.title}>
          {coin?.name}
        </Typography>

        <Typography variant="subtitle1" className={classes.description}>
          <div
            dangerouslySetInnerHTML={{
              __html: coin?.description.en.split(". ")[0],
            }}
          />
        </Typography>
        <Box
          border={1}
          borderColor="#E2FF00"
          style={{
            display: "flex",
            borderRadius: 20,
            alignItems: "center",
            boxShadow: "0px 0px 17px -4px rgba(225,255,0,1)",
          }}
        >
          <div className={classes.marketData}>
            <span style={{ display: "flex" }}>
              <Typography variant="h6" className={classes.heading}>
                Rank:
              </Typography>
              &nbsp; &nbsp;
              <Typography variant="h6" style={{ fontFamily: "montserrat" }}>
                {coin?.market_cap_rank}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography variant="h6" className={classes.heading}>
                Current Price:
              </Typography>
              &nbsp; &nbsp;
              <Typography variant="h6" style={{ fontFamily: "montserrat" }}>
                {symbol}
                {numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography variant="h6" className={classes.heading}>
                Market Cap:
              </Typography>
              &nbsp; &nbsp;
              <Typography variant="h6" style={{ fontFamily: "montserrat" }}>
                {symbol}
                {numberWithCommas(
                  coin?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                )}
                M
              </Typography>
            </span>
          </div>
        </Box>
      </div>
      <CoinInfo coin={coin} />
    </div>
  );
};

export default CoinPage;
