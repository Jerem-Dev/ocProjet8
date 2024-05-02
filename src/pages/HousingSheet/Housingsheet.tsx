import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";

export default function Housingsheet() {
  const { id } = useParams();

  const housing = logements.find((housing) => housing.id === id);
  return (
    <main className="housing-sheet">
      <p>Housing</p>
      <img src={housing?.cover} alt="" />
    </main>
  );
}
