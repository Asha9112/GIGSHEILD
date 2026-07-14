import { useEffect, useRef, useState } from "react";
import {
  FaCamera,
  FaRedo,
  FaUpload,
  FaCheck,
} from "react-icons/fa";

function CameraCapture({ onImageCapture }) {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraOpen, setCameraOpen] = useState(false);

useEffect(() => {

  if (
    cameraOpen &&
    stream &&
    videoRef.current
  ) {

    videoRef.current.srcObject = stream;

  }

}, [cameraOpen, stream]);



  const openCamera = async () => {

    try {

      const mediaStream =
        await navigator.mediaDevices.getUserMedia({

          video: {

            facingMode: "environment",

          },

        });

      setStream(mediaStream);

      setCameraOpen(true);

      if (videoRef.current) {

        videoRef.current.srcObject = mediaStream;

      }

    }

    catch (error) {

      alert("Unable to access camera.");

      console.error(error);

    }

  };



  const capturePhoto = () => {

    const canvas = canvasRef.current;

    const video = videoRef.current;

    canvas.width = video.videoWidth;

    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");

    context.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const image = canvas.toDataURL("image/png");

    setCapturedImage(image);

    if (onImageCapture) {

      onImageCapture(image);

    }

    stream.getTracks().forEach(track => track.stop());

    setCameraOpen(false);

  };



  const retakePhoto = () => {

    setCapturedImage(null);

    openCamera();

  };



  const uploadImage = (event) => {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {

      setCapturedImage(reader.result);

      if (onImageCapture) {

        onImageCapture(reader.result);

      }

    };

    reader.readAsDataURL(file);

  };



  return (

    <div className="camera-card">

      <div className="camera-header">

        <FaCamera />

        <h3>

          Live Incident Photo

        </h3>

      </div>

      <p>

        Capture a live photo or upload an existing image.

      </p>


      {

        !cameraOpen &&
        !capturedImage && (

          <div className="camera-actions">

            <button
              type="button"
              className="camera-btn"
              onClick={openCamera}
            >

              <FaCamera />

              Open Camera

            </button>


            <button
              type="button"
              className="upload-btn"
              onClick={() => fileInputRef.current.click()}
            >

              <FaUpload />

              Upload Photo

            </button>

          </div>

        )

      }



      {

        cameraOpen && (

          <div className="camera-live">

            <video

              ref={videoRef}

              autoPlay

              playsInline

            />

            <button

              type="button"

              className="camera-btn"

              onClick={capturePhoto}

            >

              <FaCheck />

              Capture

            </button>

          </div>

        )

      }



      {

        capturedImage && (

          <div className="camera-preview">

            <img

              src={capturedImage}

              alt="Captured"

            />

            <button

              type="button"

              className="remove-photo-btn"

              onClick={retakePhoto}

            >

              <FaRedo />

              Retake Photo

            </button>

          </div>

        )

      }



      <canvas

        ref={canvasRef}

        hidden

      />



      <input

        ref={fileInputRef}

        type="file"

        accept="image/*"

        hidden

        onChange={uploadImage}

      />

    </div>

  );

}


export default CameraCapture;