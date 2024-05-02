import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import logementsData from "../../data/logements.json";
import { Link } from "react-router-dom";

export interface Logement {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

export default function Home() {
  const [logements, setLogements] = useState([] as Logement[]);

  useEffect(() => {
    setLogements(logementsData as Logement[]);
  }, []);

  return (
    <main className="home">
      <Banner
        title="Chez vous, partout et ailleurs"
        imageUrl="/public/img/home-banner.png"
      />
      <div className="home__housings-list">
        {logements.map((logement) => (
          <Link key={logement.id} to={`/housing/${logement.id}`}>
            <GalleryCard
              key={logement.id}
              title={logement.title}
              imageUrl={logement.cover}
              alt={logement.title}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
