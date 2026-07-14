import { useRef, useState } from "react";
import { FaCamera, FaTrash } from "react-icons/fa";

function CameraCapture({ onImageCapture }) {
  const fileInputRef = useRef(null);

  const [preview, setPreview] = useState("");

  const handleCapture = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);

    if (onImageCapture) {
      onImageCapture(file);
    }
  };

  const removeImage = () => {
    setPreview("");

    if (onImageCapture) {
      onImageCapture(null);
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="camera-card">

      <div className="camera-header">
        <FaCamera />
        <h3>Live Incident Photo</h3>
      </div>

      <p>
        Capture a live photo of the incident for faster claim verification.
      </p>

      {preview ? (
        <div className="camera-preview">

          <img
            src={preview}
            alt="Incident"
          />

          <button
            type="button"
            className="remove-photo-btn"
            onClick={removeImage}
          >
            <FaTrash />
            Remove Photo
          </button>

        </div>
      ) : (
        <button
          type="button"
          className="camera-btn"
          onClick={() => fileInputRef.current.click()}
        >
          <FaCamera />
          Capture Photo
        </button>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        hidden
        onChange={handleCapture}
      />

    </div>
  );
}

export default CameraCapture;