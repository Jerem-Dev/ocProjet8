import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Carousel from "../../components/Carousel/Carousel";
import Dropdown from "../../components/Dropdown/Dropdown";
import TagButton from "../../components/TagButton/Tagbutton";
import Error from "../Error/Error";

export default function Housingsheet() {
  const { id } = useParams();
  const housing = logements.find((housing) => housing.id === id);
  if (!housing) {
    return <Error />;
  }
  const ratingRange = [1, 2, 3, 4, 5];
  const rating = parseInt(housing.rating);

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
      <div className="housing-sheet__owner-rating">
        <div className="rating">
          {" "}
          {ratingRange.map((star) =>
            rating >= star ? (
              <img key={star} src="/public/img/redstar.svg" alt="active star" />
            ) : (
              <img
                key={star}
                src="/public/img/greystar.svg"
                alt="inactive star"
              />
            )
          )}
        </div>
        <div className="owner">
          <p>{housing.host.name}</p>
          <img src={housing.host.picture} alt="owner" />
        </div>
      </div>
      <div className="housing-sheet__dropdown">
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
