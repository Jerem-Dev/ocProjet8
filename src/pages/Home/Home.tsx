import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import logementsData from "../../data/logements.json";

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

  //CORS ERROR
  // useEffect(() => {
  //   fetch(
  //     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setLogements(data));
  // }, []);

  useEffect(() => {
    setLogements(logementsData as Logement[]);
  }, []);

  return (
    <main className="home">
      <Banner
        title="Chez vous, partout et ailleurs"
        imageUrl="/img/home-banner.png"
      />
      <div className="home__housings-list">
        {logements.map((logement) => (
          <GalleryCard
            id={logement.id}
            key={logement.id}
            title={logement.title}
            imageUrl={logement.cover}
            alt={logement.title}
          />
        ))}
      </div>
    </main>
  );
}
