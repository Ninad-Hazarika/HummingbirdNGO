function GalleryCard({ image }) {
  return (
    <div>
      <img
        src={image.image}
        alt={image.caption}
        width="300"
      />

      <p>{image.caption}</p>
    </div>
  );
}

export default GalleryCard;
