import { GoogleMap, LoadScript, Marker, MarkerF } from "@react-google-maps/api";
import Modal from '@mui/material/Modal';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 400,
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Detail() {

    useEffect(() => {
        console.log("test");
        axios
          .get("http://localhost:8000/garbage/garbage/")
          .then((res) => {
            console.log(JSONstringify.comment);
          })
          .catch((err) => {
            console.log(err);
          })
          
    },[])
    const containerStyle = {
        width: "100%",
        height: "100vh",
    };

    const center = {
        lat: 35.69575,
        lng: 139.77521,
    };

    const positionAkiba = {
        lat: 35.69731,
        lng: 139.7747,
    };

    const positionIwamotocho = {
        lat: 35.69397,
        lng: 139.7762,
    };

    function handleOpen() {
        setOpen(true);
    }
    const [open, setOpen] = useState(false);

    function handleClose() {

        setOpen(false);
    }

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={17}>
                <MarkerF onClick={handleOpen} position={positionAkiba} />
                <MarkerF onClick={handleOpen} position={positionIwamotocho} />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>


                        <img class="fit-picture"
                            src="https://media.loom-app.com/bi/dist/images/2022/12/01/20221126_123654-1.jpg?w=1280"
                            alt="Grapefruit slice atop a pile of other slices"
                            width="300" height="200">
                        </img>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            dytdydrdydytdytdtrdtdytydhgchggfcycycfycycy7c
                        </Typography>
                    </Box>
                </Modal>
            </GoogleMap>
        </LoadScript>


    );

}