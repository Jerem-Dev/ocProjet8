import logements from "../../data/logements.json";

export default function Housingsheet() {
  const housing = logements.find((housing) => housing.id === "c67ab8a7");
  return (
    <main className="housing-sheet">
      <p>Housing</p>
      <img src={housing?.cover} alt="" />
    </main>
  );
}
