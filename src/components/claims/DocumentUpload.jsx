import { useRef, useState } from "react";
import {
  FaUpload,
  FaFilePdf,
  FaFileImage,
  FaTrash,
} from "react-icons/fa";

function DocumentUpload({ onFilesChange }) {
  const inputRef = useRef(null);

  const [files, setFiles] = useState([]);

  const handleFiles = (event) => {
    const selectedFiles = Array.from(event.target.files);

    const updatedFiles = [...files, ...selectedFiles];

    setFiles(updatedFiles);

    if (onFilesChange) {
      onFilesChange(updatedFiles);
    }
  };

  const removeFile = (index) => {
    const updatedFiles = files.filter(
      (_, currentIndex) => currentIndex !== index
    );

    setFiles(updatedFiles);

    if (onFilesChange) {
      onFilesChange(updatedFiles);
    }
  };

  return (
    <div className="document-upload-card">

      <div className="document-header">

        <FaUpload />

        <h3>
          Supporting Documents
        </h3>

      </div>

      <p>
        Upload Medical Bills, Hospital Reports,
        FIR, Prescription or any supporting evidence.
      </p>

      <button
        type="button"
        className="upload-btn"
        onClick={() => inputRef.current.click()}
      >
        <FaUpload />
        Browse Documents
      </button>

      <input
        ref={inputRef}
        type="file"
        multiple
        hidden
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFiles}
      />

      {files.length > 0 && (

        <div className="uploaded-files">

          {files.map((file, index) => (

            <div
              className="uploaded-file"
              key={index}
            >

              <div className="file-info">

                {file.type.includes("pdf")
                  ? <FaFilePdf />
                  : <FaFileImage />
                }

                <span>
                  {file.name}
                </span>

              </div>

              <button
                type="button"
                onClick={() => removeFile(index)}
              >
                <FaTrash />
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default DocumentUpload;