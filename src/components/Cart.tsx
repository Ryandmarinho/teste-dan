import type { Dog } from "../types";
import { formatPrice } from "../utils";

interface Props {
  items: Dog[];
  onRemove: (id: number) => void;
  onClose: () => void;
}

export default function Cart({ items, onRemove, onClose }: Props) {
  const total = items.reduce((sum, d) => sum + d.price, 0);

  return (
    <aside className="cart">
      <div className="cart-header">
        <h2>Carrinho</h2>
        <button className="icon-btn" onClick={onClose} aria-label="Fechar">✕</button>
      </div>
      {items.length === 0 ? (
        <p className="empty">Nenhum salsicha por aqui ainda 🌭</p>
      ) : (
        <ul>
          {items.map((d) => (
            <li key={d.id}>
              <span>{d.emoji} {d.name}</span>
              <span>{formatPrice(d.price)}</span>
              <button className="icon-btn" onClick={() => onRemove(d.id)} aria-label={`Remover ${d.name}`}>✕</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <span>Total</span>
        <strong>{formatPrice(total)}</strong>
      </div>
      <button className="btn" disabled={items.length === 0} onClick={() => alert("Compra simulada! 🎉 (projeto de teste)")}>
        Finalizar compra
      </button>
    </aside>
  );
}
