import Banner from "../../components/Banner/Banner";
import GalleryCard from "../../components/GalleryCard/GalleryCard";

export default function Home() {
  return (
    <main className="home">
      <Banner />
      <div className="home__housings-list">
        <GalleryCard />
      </div>
    </main>
  );
}
