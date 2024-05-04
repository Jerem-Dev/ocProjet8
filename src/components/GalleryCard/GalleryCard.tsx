import { Link } from "react-router-dom";

interface GalleryCardProps {
  title: string;
  imageUrl: string;
  alt: string;
  id: string;
}

export default function GalleryCard(props: GalleryCardProps) {
  return (
    <div className="gallery-card">
      <Link key={props.id} to={`/housing/${props.id}`}>
        <div className="gallery-card__img">
          <img src={props.imageUrl} alt={props.alt} />
        </div>
        <div className="gallery-card__title">
          <h2>{props.title}</h2>
        </div>
      </Link>
    </div>
  );
}
