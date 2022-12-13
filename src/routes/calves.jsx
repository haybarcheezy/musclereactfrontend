import CalvesHero from "../components/CalvesHero";
import axios from "axios";

const baseURL = "https://muscleapi.herokuapp.com/muscles/8/";

export default function Calves() {
  axios.get(baseURL).then((response) => {
    console.log(response.data);
  });

  return (
    <div>
      <CalvesHero />
    </div>
  );
}
