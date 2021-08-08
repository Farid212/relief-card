import Card from "./Cards";
import myPic from "../images/me.png";

const App = () => (
  <Card
    image={myPic}
    imageName="my image"
    cardTitle="Farid Hammouten"
    subTitle="Web Developer"
    medias={{
      twitter: "https://twitter.com/Faridh212",
      github: "https://github.com/Farid212",
      medium: "https://medium.com/@farid212",
      external: "https://www.farid212.dev/",
    }}
  />
);

export default App;
