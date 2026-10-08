import { useMemo, useState } from "react";
import { dogs } from "./data/dogs";
import DogCard from "./components/DogCard";
import Cart from "./components/Cart";
import LoginPage from "./pages/LoginPage";
import type { Coat, Size } from "./types";

type Sort = "relevance" | "price-asc" | "price-desc";

function StorePage() {
  const [search, setSearch] = useState("");
  const [size, setSize] = useState<Size | "">("");
  const [coat, setCoat] = useState<Coat | "">("");
  const [sort, setSort] = useState<Sort>("relevance");
  const [cart, setCart] = useState<number[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const result = dogs.filter(
      (d) =>
        (!q || d.name.toLowerCase().includes(q) || d.city.toLowerCase().includes(q)) &&
        (!size || d.size === size) &&
        (!coat || d.coat === coat)
    );
    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    return result;
  }, [search, size, coat, sort]);

  const toggle = (id: number) =>
    setCart((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));

  return (
    <>
      <header className="header">
        <h1>🌭 Salsicha Market</h1>
        <div className="header-buttons">
          <a href="/login" className="btn">
            Entrar
          </a>
          <button className="btn" onClick={() => setCartOpen(true)}>
            Carrinho ({cart.length})
          </button>
        </div>
      </header>

      <main className="container">
        <section className="filters">
          <input
            type="search"
            placeholder="Buscar por nome ou cidade..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={size} onChange={(e) => setSize(e.target.value as Size | "")}>
            <option value="">Todos os portes</option>
            <option value="Standard">Standard</option>
            <option value="Miniatura">Miniatura</option>
          </select>
          <select value={coat} onChange={(e) => setCoat(e.target.value as Coat | "")}>
            <option value="">Todos os pelos</option>
            <option value="Pelo curto">Pelo curto</option>
            <option value="Pelo longo">Pelo longo</option>
            <option value="Pelo duro">Pelo duro</option>
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)}>
            <option value="relevance">Ordenar</option>
            <option value="price-asc">Menor preço</option>
            <option value="price-desc">Maior preço</option>
          </select>
        </section>

        {filtered.length === 0 ? (
          <p className="empty">Nenhum salsicha encontrado 😢</p>
        ) : (
          <section className="grid">
            {filtered.map((d) => (
              <DogCard key={d.id} dog={d} inCart={cart.includes(d.id)} onToggle={toggle} />
            ))}
          </section>
        )}
      </main>

      {cartOpen && (
        <>
          <div className="overlay" onClick={() => setCartOpen(false)} />
          <Cart
            items={dogs.filter((d) => cart.includes(d.id))}
            onRemove={toggle}
            onClose={() => setCartOpen(false)}
          />
        </>
      )}
    </>
  );
}

export default function App() {
  const path = window.location.pathname;

  if (path === "/login") {
    return <LoginPage />;
  }

  return <StorePage />;
}
