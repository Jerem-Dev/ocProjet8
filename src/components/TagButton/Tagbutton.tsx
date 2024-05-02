interface TagButtonProps {
  children: string;
}

export default function TagButton(props: TagButtonProps) {
  return <button className="tag-btn">{props.children}</button>;
}
