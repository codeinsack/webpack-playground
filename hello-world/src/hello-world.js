import Button from "./components/button/button";
import Heading from "./components/heading/heading";
import _ from "lodash";

const heading = new Heading();
const button = new Button();
heading.render(_.upperFirst("hello world"));
button.render();

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development mode");
}
