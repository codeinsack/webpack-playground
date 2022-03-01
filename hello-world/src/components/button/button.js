import "./button.scss";

class Button {
  buttonCssClass = "button-text";

  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello World";
    button.onclick = () => {
      const p = document.createElement("p");
      p.classList.add(this.buttonCssClass);
      p.innerHTML = "Hello World";
      body.appendChild(p);
    };
    const body = document.querySelector("body");
    body.appendChild(button);
  }
}

export default Button;
