import ReactDOM from "react-dom";
import { useState } from "react";

import { ModalBackground, ModalContainer, User, Resume, Item, RegGreenText1, RegGreenText2 } from "./styles";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import youtube from "../../assets/icon-youtube.svg";
import twitter from "../../assets/icon-twitter.svg";
import up from "../../assets/icon-up.svg";
import down from "../../assets/icon-down.svg";

const Modal = (props) => {
  const [photos] = useState({
    1: facebook,
    2: twitter,
    3: instagram,
    4: youtube,
    5: up,
    6: down,
  });
  const data = [
    {
      name: "3",
      
      pv: 3,
      amt: 2400,
    },
    {
        name: "4",
        
        pv: 2,
        amt: 2400,
      },
    {
      name: "5",
      
      pv: 6,
      amt: 2210,
    },
    {
      name: "6",
      
      pv: 8,
      amt: 2290,
    },
    {
      name: "7",
      
      pv: 9,
      amt: 2000,
    },
    {
      name: "8",
      
      pv: 10,
      amt: 2181,
    },
    {
      name: "9",
      
      pv: 12,
      amt: 2500,
    },
    {
      name: "10",
      
      pv: 12,
      amt: 2100,
    },
  ];

  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalBackground>
      <ModalContainer isDark={props.isDark}>
        <h2>{props.data.name} Followers</h2>
        <User>
          <img src={photos[props.data.media]} alt={props.data.media} />{" "}
          <h4>{props.data.user}</h4>
        </User>
        <Resume>
          <Item>
            <div>
              <h1>{props.data.followers}</h1>
            </div>
            <div>
              <h4>
                Total <br />
                Followers
              </h4>
            </div>
          </Item>
          <Item>
            <div>
              <img
                src={props.data.number_media_key > 0 ? photos[5] : photos[6]}
                alt={props.data.number_media_key}
              />
              <RegGreenText1 data = {props.data.number_media_key}>{Math.abs(props.data.number_media_key)}</RegGreenText1>
            </div>
            <div>
              <h4>
                New followers in <br />
                the past 10 days
              </h4>
            </div>
          </Item>
          <Item>
            <div>
              <img
                src={props.data.today > 0 ? photos[5] : photos[6]}
                alt={props.data.today}
              />
              <RegGreenText2 data = {props.data.today}>{Math.abs(props.data.today)}</RegGreenText2>
            </div>
            <h4>
              New folowers <br /> TODAY
            </h4>
          </Item>
        </Resume>
        <h3>May 4 - May 13</h3>
        <LineChart
          width={1000}
          height={300}
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ModalContainer>
    </ModalBackground>,
    document.getElementById("modal")
  );
};

export default Modal;
