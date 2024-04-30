import { useState } from "react";

interface DropdownProps {
  title: string;
  children?: React.ReactNode | string;
}

export default function Dropdown(props: DropdownProps) {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className="dropdown">
      <button className="dropdown__btn" onClick={handleToggle}>
        <p>{props.title}</p>
        <img
          src="/img/Chevron.svg"
          className={`${toggle ? "chevron-open" : "chevron-close"}`}
          alt="chevron up and down"
        />
      </button>
      <div
        className={`dropdown__content ${
          toggle ? "content-open" : "content-close"
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
