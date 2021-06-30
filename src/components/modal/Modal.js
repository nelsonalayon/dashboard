import ReactDOM from "react-dom";
import { useState } from "react";


import {
  ModalBackground,
  ModalContainer,
  User,
  Resume,
  Item,
  RegGreenText1,
  RegGreenText2,
} from "./styles";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  Legend,
  LineChart,
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
      name: "4",
      uv: 3,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "5",
      uv: 2,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "6",
      uv: 6,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "7",
      uv: 8,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "8",
      uv: 9,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "9",
      uv: 10,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "10",
      uv: 12,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "11",
      uv: 12,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "12",
      uv: 14,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "13",
      uv: 12,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  

  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalBackground>
      <ModalContainer isDark={props.isDark}>
        <h2>{props.name} {console.log(props.dataMedia)}Followers</h2>      
        <User>
          <img src={photos[props.dataMedia.media]} alt={props.dataMedia.media} />{" "}
          <h4>{props.dataMedia.user}</h4>
        </User>
        <Resume>
          <Item>
            <div>
              <h1>{props.dataMedia.followers}</h1>
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
                src={props.dataMedia.number_media_key > 0 ? photos[5] : photos[6]}
                alt={props.dataMedia.number_media_key}
              />
              <RegGreenText1 data={props.dataMedia.number_media_key}>
                {Math.abs(props.dataMedia.number_media_key)}
              </RegGreenText1>
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
                src={props.dataMedia.today > 0 ? photos[5] : photos[6]}
                alt={props.dataMedia.today}
              />
              <RegGreenText2 data={props.dataMedia.today}>
                {Math.abs(props.dataMedia.today)}
              </RegGreenText2>
            </div>
            <h4>
              New folowers <br /> TODAY
            </h4>
          </Item>
        </Resume>
        <h3>May 4 - May 13</h3>

        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis name="days" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#928fc6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </ModalContainer>
    </ModalBackground>,
    document.getElementById("modal")
  );
};

export default Modal;
