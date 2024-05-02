import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Carousel from "../../components/Carousel/Carousel";
import Dropdown from "../../components/Dropdown/Dropdown";
import TagButton from "../../components/TagButton/Tagbutton";

export default function Housingsheet() {
  const { id } = useParams();

  const housing = logements.find((housing) => housing.id === id);

  if (!housing) {
    return <p>Logement non trouvé</p>;
  }

  return (
    <main className="housing-sheet">
      <Carousel imgUrl={housing.pictures} />
      <div className="housing-sheet__header">
        <h3 className="housing-name">{housing.title}</h3>
        <p>{housing.location}</p>
        <div className="housing-sheet__tags">
          {housing.tags.map((tag) => (
            <TagButton key={tag}>{tag}</TagButton>
          ))}
        </div>
      </div>
      <div className="housing-sheet__owner-rating"></div>
      <div className="housing-sheet__dropdown">
        {" "}
        <Dropdown title="Description">
          <p>{housing.description}</p>
        </Dropdown>
        <Dropdown title="Équipements">
          <ul>
            {housing.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </main>
  );
}
