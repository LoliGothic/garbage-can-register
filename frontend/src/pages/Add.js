import axios from 'axios';
import { useState } from 'react';

export default function Add() {
  const [image,setImage] = useState();

  function postData() {
    var formData = new FormData();
    formData.append("lat", 2.23);
    formData.append("lng", 2.532);
    formData.append("image", image[0])
    formData.append("comment", "test")


    axios
      .post("http://localhost:8000/garbage/garbage/", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      })
  }

  return (
    <>
      <input type="file" name="file" accept="image/png, image/jpeg" onChange={event => setImage(event.target.files)} />
      <input type="button" value="test" onClick={postData} />
    </>
  )
}