import React from "react";
import Image from "./Image";

export default class ImageList extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { images } = this.props;
    const nextImages = nextProps.images;
    // Check if images have changed
    if (images.length !== nextImages.length) {
      return true;
    }
    for (let i = 0; i < images.length; i++) {
      if (images[i] !== nextImages[i]) {
        return true;
      }
    }
    return false;
  }

  render() {
    const { images } = this.props;
    return (
      <div className="image-list">
        {images.map((image, index) => {
          return <Image key={index} image={image} />;
        })}
      </div>
    );
  }
}
