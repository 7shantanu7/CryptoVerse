import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { headers } from "../config/api";
import { News } from "../config/api";
import { LinearProgress, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import logo from "../assets/logo.svg";

const NewsPage = () => {
  const [news, setNews] = useState();
  const fetchNews = async () => {
    const { data } = await axios.get(News(), { headers });
    setNews(data);
  };

  const all = news?.value;

  useEffect(() => {
    fetchNews();
  }, []);

  if (!news?.value)
    return <LinearProgress style={{ backgroundColor: "#E2FF00" }} />;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        margin: 50,
      }}
    >
      {all.map((i) => (
        <a href={i.url}>
          <div style={{ padding: 20 }}>
            <Box
              border={1}
              borderColor="#E2FF00"
              height={220}
              width={390}
              style={{
                display: "flex",
                borderRadius: 20,
                alignItems: "center",
                backgroundColor: "#000000ff",
                boxShadow: "0px 0px 17px -4px rgba(225,255,0,1)",
              }}
            >
              <img
                src={i.image?.thumbnail.contentUrl || logo}
                alt=""
                style={{ padding: 10, borderRadius: 20, height: 140 }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  style={{
                    padding: 10,
                    paddingRight: 10,
                    fontFamily: "montserrat",
                    fontWeight: "600",
                    color: "#E2FF00",
                  }}
                >
                  {i.name.substring(0, 110)}...
                </Typography>
                <Typography
                  style={{
                    padding: 10,
                    paddingRight: 10,
                    fontFamily: "montserrat",
                    color: "darkgrey",
                    fontSize: "small",
                  }}
                >
                  {i.description.substring(0, 60)}
                  ...
                </Typography>
              </div>
            </Box>
          </div>
        </a>
      ))}
    </div>
  );
};

export default NewsPage;
