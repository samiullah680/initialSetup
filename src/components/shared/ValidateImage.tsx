const ValidateImage = ({ src }: any) => {
  // This function is triggered if an error occurs while loading an image
  const placeholder = "https://dummyimage.com/250x250/000/fff";
  const imageOnErrorHandler = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = placeholder;
  };
  return <img src={src} alt="" onError={imageOnErrorHandler} />;
};
export default ValidateImage;
