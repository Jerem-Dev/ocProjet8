import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Carousel from "../../components/Carousel/Carousel";

export default function Housingsheet() {
  const { id } = useParams();

  const housing = logements.find((housing) => housing.id === id);

  if (!housing) {
    return <p>Logement non trouvé</p>;
  }

  return (
    <main className="housing-sheet">
      <Carousel imgUrl={housing.pictures} />
      <p>Housing</p>
    </main>
  );
}
