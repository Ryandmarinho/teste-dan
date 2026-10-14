import { useState } from "react";
import "./LoginPage.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Por enquanto não faz nada, apenas previne recarregar a página
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <a href="/" className="login-logo">
          <svg width="34" height="22" viewBox="0 0 34 22" fill="none" aria-hidden="true">
            <rect x="2" y="6" width="26" height="10" rx="5" fill="#E9A06B" />
            <path d="M28 9c2-4 5-4 5-1s-2 4-5 3" fill="#E9A06B" />
            <path d="M3 11h24" stroke="#FFF3E0" strokeWidth="1.5" strokeDasharray="3 2" />
          </svg>
          Salsicha Market
        </a>
        <a href="/" className="login-back-link">
          Voltar à loja
        </a>
      </header>

      <main className="login-main">
        <section className="login-brand">
          <div className="login-hero-art">
            <svg width="300" height="170" viewBox="0 0 300 170" fill="none" aria-hidden="true">
              <ellipse cx="150" cy="150" rx="120" ry="10" fill="#E6C66A" />
              <rect x="60" y="70" width="170" height="56" rx="28" fill="#C9772F" />
              <rect x="80" y="112" width="14" height="36" rx="7" fill="#A85E22" />
              <rect x="104" y="112" width="14" height="36" rx="7" fill="#B8692A" />
              <rect x="178" y="112" width="14" height="36" rx="7" fill="#A85E22" />
              <rect x="202" y="112" width="14" height="36" rx="7" fill="#B8692A" />
              <path
                d="M60 92c-14-6-24-2-30 6"
                stroke="#C9772F"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <circle cx="238" cy="72" r="30" fill="#C9772F" />
              <ellipse cx="272" cy="82" rx="18" ry="13" fill="#D58A45" />
              <circle cx="287" cy="80" r="5" fill="#2B1A0E" />
              <circle cx="246" cy="64" r="4" fill="#2B1A0E" />
              <path d="M222 52c-14 4-20 22-12 40 8-6 14-20 12-40z" fill="#8B4513" />
              <path
                d="M120 76c20 6 40 6 60 0"
                stroke="#E9A06B"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="login-brand-text">
            <h1>Seu próximo salsicha está a um login de distância.</h1>
            <p>
              Entre para salvar favoritos, acompanhar seu carrinho e falar com criadores de todo o
              Brasil.
            </p>
          </div>

          <ul className="login-perks">
            <li>Miniatura e Standard</li>
            <li>Pelo curto, longo e duro</li>
            <li>Filtre por cidade</li>
          </ul>
        </section>

        <section className="login-form-section">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-form-header">
              <h2>Entrar</h2>
              <p>Bem-vindo de volta ao Salsicha Market.</p>
            </div>

            <div className="login-form-group">
              <label htmlFor="lg-email">E-mail</label>
              <input
                id="lg-email"
                type="email"
                placeholder="voce@email.com"
                autoComplete="email"
              />
            </div>

            <div className="login-form-group">
              <div className="login-form-group-header">
                <label htmlFor="lg-pass">Senha</label>
                <a href="#" className="login-forgot-link">
                  Esqueci minha senha
                </a>
              </div>
              <div className="login-password-wrapper">
                <input
                  id="lg-pass"
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="login-password-toggle"
                  aria-label="Mostrar ou ocultar senha"
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            <label className="login-checkbox">
              <input type="checkbox" />
              Lembrar de mim
            </label>

            <button type="submit" className="login-submit-btn">
              Entrar
            </button>

            <div className="login-divider">
              <span />
              ou
              <span />
            </div>

            <button type="button" className="login-google-btn">
              Continuar com Google
            </button>

            <p className="login-signup">
              Ainda não tem conta? <a href="#">Criar conta</a>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
