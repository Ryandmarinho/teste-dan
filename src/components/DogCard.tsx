import type { Dog } from "../types";
import { formatPrice } from "../utils";

interface Props {
  dog: Dog;
  inCart: boolean;
  onToggle: (id: number) => void;
}

export default function DogCard({ dog, inCart, onToggle }: Props) {
  return (
    <article className="card">
      <div className="card-img" style={{ background: dog.color }}>
        <span>{dog.emoji}</span>
      </div>
      <div className="card-body">
        <h3>{dog.name}</h3>
        <p className="tags">
          <span>{dog.size}</span>
          <span>{dog.coat}</span>
          <span>{dog.ageMonths} meses</span>
        </p>
        <p className="desc">{dog.description}</p>
        <p className="city">📍 {dog.city}</p>
        <div className="card-footer">
          <strong>{formatPrice(dog.price)}</strong>
          <button className={inCart ? "btn secondary" : "btn"} onClick={() => onToggle(dog.id)}>
            {inCart ? "Remover" : "Adicionar"}
          </button>
        </div>
      </div>
    </article>
  );
}
