import puppy from "./assets/img/puppy.jpg";
import "./assets/styles/img.scss";

class ImageComponent {
  render() {
    const img = document.createElement("img");
    img.alt = "Puppy";
    img.title = "A cute puppy";
    img.src = puppy;
    img.className = "thumbnail";
    document.querySelector("body").appendChild(img);
  }
}

export default ImageComponent;
