import { useState, Fragment } from "react";
import {
  SmallContainer,
  Percentaje,
  PercentajeContainer,
  Likes,
} from "./styles";
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import youtube from "../../assets/icon-youtube.svg";
import twitter from "../../assets/icon-twitter.svg";
import up from "../../assets/icon-up.svg";
import down from "../../assets/icon-down.svg";

const SmallCard = (props) => {
  const [photos] = useState({
    1: facebook,
    2: twitter,
    3: instagram,
    4: youtube,
    5: up,
    6: down,
  });

  return props.data.social_media_dashboard.social_media.map((obj) => {
    return (
      <Fragment key={obj.id}>
        <SmallContainer isDark = {props.isDark}>
          <div>
            <Likes>{obj.media_key}</Likes>
            <h2>{obj.number}</h2>
          </div>
          <div>
            <Likes>
              <img src={photos[obj.media]} alt={obj.media}></img>
            </Likes>
            <PercentajeContainer>
              <img
                src={obj.media_key_value > 0 ? photos[5] : photos[6]}
                alt={obj.media}
              />
              <Percentaje info={obj}> {obj.media_key_value}</Percentaje>
            </PercentajeContainer>
          </div>
        </SmallContainer>
        <SmallContainer isDark = {props.isDark}>
          <div>
            <Likes>Likes</Likes>
            <h2>{obj.likes}</h2>
          </div>
          <div>
            <Likes>
              <img src={photos[obj.media]} alt={obj.media}></img>
            </Likes>
            <PercentajeContainer>
              <img
                src={obj.percentage_likes > 0 ? photos[5] : photos[6]}
                alt={obj.percentage_likes}
              />{" "}
              <Percentaje info={obj}> {obj.percentage_likes}</Percentaje>
            </PercentajeContainer>
          </div>
        </SmallContainer>
      </Fragment>
    );
  });
};

export default SmallCard;
