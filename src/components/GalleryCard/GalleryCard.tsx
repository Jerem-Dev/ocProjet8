interface GalleryCardProps {
  title?: string;
  imageUrl: string;
  alt?: string;
}

export default function GalleryCard(props: GalleryCardProps) {
  return (
    <div className="gallery-card">
      <div className="gallery-card__img">
        <img src={props.imageUrl} alt={props.alt} />
      </div>
      <div className="gallery-card__title">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}
