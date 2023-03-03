import { GoogleMap, LoadScript, Marker, MarkerF } from "@react-google-maps/api";
import Modal from "@mui/material/Modal";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import styles from "../styles/Detail.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 400,
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Detail(props) {
  const [garbageInfo, setGarbageInfo] = useState(null);
  const [stars, setStars] = useState(null);
  const [stars_avg, setStars_avg] = useState(0);
  const [stars_comments, setStars_comments] = useState(null);
  const [open, setOpen] = useState(false);
  const [cordinate, setCordinate] = useState({lat: 35.69575, lng: 139.77521})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    
    axios
      .get("http://localhost:8000/garbage/stars/")
      .then((res) => {
        const allstars = [];
        res.data.forEach((s) => {
          allstars.push({
            id: s.id,
            garbage_id: s.garbage_id,
            stars: s.stars,
            comment: s.comment,
          });
        });
        setStars(allstars);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:8000/garbage/garbage/")
      .then((res) => {
        const allGarbage = [];
        res.data.forEach((garbage) => {
          allGarbage.push({
            id: garbage.id,
            lat: garbage.lat,
            lng: garbage.lng,
            image: garbage.image,
            comment: garbage.comment,
            visible: false,
          });
        });
        setGarbageInfo(allGarbage);
        console.log("tes");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.toggle]);

  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  function successCallback(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    setCordinate({lat: latitude, lng: longitude});
};

function errorCallback(error){
    alert("位置情報が取得できませんでした");
};

  function handleOpen(id) {
    starsAverage(id);
    set_stars_comments(id);
    const allGarbage = [];
    garbageInfo.forEach((garbage) => {
      if (garbage.id === id) {
        allGarbage.push({
          id: garbage.id,
          lat: garbage.lat,
          lng: garbage.lng,
          image: garbage.image,
          comment: garbage.comment,
          visible: true,
        });
      } else {
        allGarbage.push({
          id: garbage.id,
          lat: garbage.lat,
          lng: garbage.lng,
          image: garbage.image,
          comment: garbage.comment,
          visible: false,
        });
      }
    });
    setGarbageInfo(allGarbage);
    setOpen(true);
    console.log(garbageInfo);
  }

  function handleClose() {
    const allGarbage = [];
    garbageInfo.forEach((garbage) => {
      allGarbage.push({
        id: garbage.id,
        lat: garbage.lat,
        lng: garbage.lng,
        image: garbage.image,
        comment: garbage.comment,
        visible: false,
      });
    });
    setGarbageInfo(allGarbage);
    setOpen(false);
    console.log(garbageInfo);
  }

  // 評価の平均
  function starsAverage(id){
    let count = 0;
    let stars_sum = 0;
    //console.log(stars.length)
    for (let i = 0; i < stars.length; i++){
      if (stars[i].garbage_id == id){
        count++;
        console.log(count);
        stars_sum += stars[i].stars;
      }
    }
    //console.log(stars_sum / count)
    setStars_avg(stars_sum / count);
  }

  // 入力されたガベージidのコメントを抜き出す
  function set_stars_comments(id){
    const s_c = [];
    for (let i = 0; i < stars.length; i++){
      if (stars[i].garbage_id == id && stars[i].comment != null){
        let text = "";
        for (let j = 0; j < stars[i].stars; j++){
          text += "★"
        }
        for (let j = 0; j < 5 - stars[i].stars; j++){
          text += "☆"
        }
        s_c.push(<div>
          {text}：
          {stars[i].comment}
        </div>
        )
      }
    }
    setStars_comments(s_c);
  }

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={{lat: cordinate.lat, lng: cordinate.lng}} zoom={17}>
        {garbageInfo &&
          garbageInfo.map((garbage, index) => {
            if (garbage.visible == false) {
              return (
                <div key={index}>
                  <MarkerF
                    onClick={handleOpen.bind(this, garbage.id)}
                    position={{ lat: garbage.lat, lng: garbage.lng }}
                  />
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <MarkerF
                    onClick={handleOpen.bind(this, garbage.id)}
                    position={{ lat: garbage.lat, lng: garbage.lng }}
                  />
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <div className={styles.img}>
                        <img
                          src={`${garbage.image}`}
                          width="300"
                          height="200"
                        ></img>
                      </div>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {garbage.comment}
                      </Typography>
                      <div style={{marginTop: '20px'}}>平均評価：★×{stars_avg}</div>
                      <div style={{marginTop: '20px'}}>その他のコメント</div>
                      <div>{stars_comments}</div>
                    </Box>
                  </Modal>
                </div>
              );
            }
          })}
      </GoogleMap>
    </LoadScript>
  );
}
