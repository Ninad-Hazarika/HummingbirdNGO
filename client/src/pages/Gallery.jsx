import { useEffect, useState } from "react";
import api from "../services/api";
import GalleryCard from "../components/GalleryCard";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await api.get("/gallery");

        setImages(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>

      {images.map((image) => (
        <GalleryCard
          key={image._id}
          image={image}
          />
      ))}
    </div>
  );
}
export default Gallery;
