interface ImageSrcProps {
    imageSrc: string;
  }
  
  const SharedImage = ({ imageSrc }: ImageSrcProps) => {
    return (
      <div>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Display image"
            className="object-cover"
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
    );
  };
  
  export default SharedImage