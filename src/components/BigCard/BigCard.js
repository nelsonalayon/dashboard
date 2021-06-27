import { Container, User, Followers, Today } from "./styles";

import React, { useState } from "react";
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import youtube from "../../assets/icon-youtube.svg";
import twitter from "../../assets/icon-twitter.svg";
import up from "../../assets/icon-up.svg"
import down from "../../assets/icon-down.svg"


const BigCard = (props) => {
  const [photos] = useState({
    1: facebook,
    2: twitter,
    3: instagram,
    4: youtube,
    5:up,
    6:down
  });

  return props.data.social_media_dashboard.social_media.map((big) => {
    return (
      <Container info={big} key = {big.id} isDark = {props.isDark}>
        <User>
          <img src={photos[big.media]} alt={big.media} /> <h4>{big.user}</h4>
        </User>
        <Followers>
          <h1>{big.followers}</h1>
          <h4>FOLLOWERS</h4>
        </Followers>
        <Today info={big} >
        <img src={big.today > 0 ? photos[5] : photos[6] } alt={big.media} /> <h4>{big.today} today</h4>
        </Today>
      </Container>
    );
  });
};

export default BigCard;
