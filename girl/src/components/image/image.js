import Girl from "./girl.jpg";
import "./image.scss";

class Image {
  render() {
    const img = document.createElement("img");
    img.src = Girl;
    img.alt = "Girl";
    img.classList.add("image");

    document.querySelector("body").appendChild(img);
  }
}

export default Image;
