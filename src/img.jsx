import { useState } from "react";
import Draggable from "react-draggable";
import "./css/img.scss";

function Img() {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null); // Track the selected image index

  // Handle file input
  const handleInputChange = (event) => {
    const files = event.target.files;
    const newImages = Array.from(files).map((file) => ({
      filename: file.name,
      src: URL.createObjectURL(file),
      size: [Math.random() * 300, Math.random() * 300],
      rotation: 0, // Initial rotation value
    }));
    setImages([...images, ...newImages]);
  };

  // Handle file drop
  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const newImages = Array.from(files).map((file) => ({
      filename: file.name,
      src: URL.createObjectURL(file),
      size: [Math.random() * 100, Math.random() * 100],
      rotation: 0, // Initial rotation value
    }));
    setImages([...images, ...newImages]);
  };

  // Prevent default dragover behavior
  const handleDragOver = (event) => event.preventDefault();

  // Handle delete
  const handleDelete = () => {
    if (selectedIndex !== null) {
      const updatedImages = images.filter((_, index) => index !== selectedIndex);
      setImages(updatedImages);
      setSelectedIndex(null);
    } else if (images.length > 0) {
      setImages(images.slice(0, -1)); // Remove the last image
    }
  };

  // Handle rotate
  const handleRotate = () => {
    if (selectedIndex !== null) {
      setImages((prevImages) =>
        prevImages.map((image, index) =>
          index === selectedIndex
            ? { ...image, rotation: image.rotation + 90 }
            : image
        )
      );
    }
  };

  return (
    <div className="img-con" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div>
        <input type="file" onChange={handleInputChange} multiple />
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleRotate}>Rotate 90°</button>
      </div>
      <div className="drag-con" style={{ position: "relative" }}>
        {images.map((image, index) => (
          <Draggable
            key={index}
            bounds="parent"
            onStart={() => setSelectedIndex(index)} // Set selected index on drag start
          >
            <div
              style={{
                position: "absolute",
                top: image.size[1],
                left: image.size[0],
              }}
              onClick={() => setSelectedIndex(index)} // Set selected index on click
            >
              <img
                className={selectedIndex === index ? "red" : "meh"}
                src={image.src}
                alt={image.filename}
                draggable="false"
                style={{
                  
                  maxWidth: "200px",
                  maxHeight: "200px",
                  transform: `rotate(${image.rotation}deg)`, // Apply rotation
                  transition: "transform 0.3s", // Smooth rotation
                }}
              />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
}

export default Img;
