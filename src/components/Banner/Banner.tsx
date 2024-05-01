interface BannerProps {
  title?: string;
  imageUrl: string;
}

export default function Banner(props: BannerProps) {
  return (
    <div className="banner">
      <style>
        {`
          .banner__container::before {
            background-image: url("${props.imageUrl}");
          }
        `}
      </style>
      <div className="banner__container">
        <div className="banner__title">{<h2>{props.title}</h2>}</div>
      </div>
    </div>
  );
}
