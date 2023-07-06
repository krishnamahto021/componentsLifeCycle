import React from "react";
import ImageList from "./components/ImageList";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      imageUrl: ""
    };
  }

  componentDidMount() {
    const images = this.getImagesFromLS();
    this.setState({ images });
  }

  addImageToLS = () => {
    const { images, imageUrl } = this.state;
    const trimmedUrl = imageUrl.trim();
    if (trimmedUrl && trimmedUrl.length >= 5) {
      const updatedImages = [...images, trimmedUrl];
      localStorage.setItem("images", JSON.stringify(updatedImages));
      return updatedImages;
    }
    return images;
  };

  getImagesFromLS = () => {
    const images = localStorage.getItem("images");
    if (!images) {
      localStorage.setItem("images", JSON.stringify([]));
      return [];
    }
    return JSON.parse(images);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.images !== this.state.images) {
      const images = this.addImageToLS();
      if (images !== this.state.images) {
        this.setState({ images });
      }
    }
  }

  onAddImage = (e) => {
    e.preventDefault();
    const images = this.addImageToLS();
    if (images !== this.state.images) {
      this.setState({ images, imageUrl: "" });
    }
  };

  onImageUrlChange = (e) => {
    this.setState({ imageUrl: e.target.value });
  };

  render() {
    const { images, imageUrl } = this.state;
    return (
      <>
        <form onSubmit={this.onAddImage}>
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={this.onImageUrlChange}
          />
          <button>Add Image</button>
        </form>
        <ImageList images={images} />
      </>
    );
  }
}
