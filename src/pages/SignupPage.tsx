import { useState } from "react";
import "./SignupPage.css";

export default function SignupPage() {
  const [accountType, setAccountType] = useState<"buyer" | "seller">("buyer");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="signup-container">
      <header className="signup-header">
        <a href="/" className="signup-logo">
          <svg width="34" height="22" viewBox="0 0 34 22" fill="none" aria-hidden="true">
            <rect x="2" y="6" width="26" height="10" rx="5" fill="#E9A06B" />
            <path d="M28 9c2-4 5-4 5-1s-2 4-5 3" fill="#E9A06B" />
            <path d="M3 11h24" stroke="#FFF3E0" strokeWidth="1.5" strokeDasharray="3 2" />
          </svg>
          Salsicha Market
        </a>
        <a href="/" className="signup-back-link">
          Voltar à loja
        </a>
      </header>

      <main className="signup-main">
        <section className="signup-brand">
          <div className="signup-hero-art">
            <svg width="300" height="170" viewBox="0 0 300 170" fill="none" aria-hidden="true">
              <ellipse cx="150" cy="150" rx="120" ry="10" fill="#B9DB78" />
              <rect x="60" y="70" width="170" height="56" rx="28" fill="#C9772F" />
              <rect x="80" y="112" width="14" height="36" rx="7" fill="#A85E22" />
              <rect x="104" y="112" width="14" height="36" rx="7" fill="#B8692A" />
              <rect x="178" y="112" width="14" height="36" rx="7" fill="#A85E22" />
              <rect x="202" y="112" width="14" height="36" rx="7" fill="#B8692A" />
              <path
                d="M60 92c-14-6-24-14-26-26"
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
                d="M262 96c4 10 10 12 14 6"
                stroke="#E2557A"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <rect x="196" y="88" width="30" height="8" rx="4" fill="#3B82F6" />
            </svg>
          </div>

          <div className="signup-brand-text">
            <h1>Crie sua conta e encontre seu salsicha.</h1>
            <p>Leva menos de um minuto. Depois é só filtrar por porte, pelagem e cidade.</p>
          </div>

          <ol className="signup-steps">
            <li>
              <span>1</span>
              Preencha seus dados
            </li>
            <li>
              <span>2</span>
              Confirme seu e-mail
            </li>
            <li>
              <span>3</span>
              Salve favoritos e fale com criadores
            </li>
          </ol>
        </section>

        <section className="signup-form-section">
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="signup-form-header">
              <h2>Criar conta</h2>
              <p>Escolha como você vai usar o Salsicha Market.</p>
            </div>

            <div className="signup-account-type">
              <button
                type="button"
                className={`signup-type-btn ${accountType === "buyer" ? "active" : ""}`}
                onClick={() => setAccountType("buyer")}
              >
                Quero comprar
              </button>
              <button
                type="button"
                className={`signup-type-btn ${accountType === "seller" ? "active" : ""}`}
                onClick={() => setAccountType("seller")}
              >
                Quero vender
              </button>
            </div>

            <div className="signup-form-group">
              <label htmlFor="sg-nome">Nome completo</label>
              <input
                id="sg-nome"
                type="text"
                placeholder="Como devemos te chamar?"
                autoComplete="name"
              />
            </div>

            {accountType === "seller" && (
              <div className="signup-form-group">
                <label htmlFor="sg-canil">Nome do canil ou criador</label>
                <input
                  id="sg-canil"
                  type="text"
                  placeholder="Ex.: Canil Pão de Ló"
                  autoComplete="off"
                />
              </div>
            )}

            <div className="signup-form-row">
              <div className="signup-form-group">
                <label htmlFor="sg-email">E-mail</label>
                <input
                  id="sg-email"
                  type="email"
                  placeholder="voce@email.com"
                  autoComplete="email"
                />
              </div>
              <div className="signup-form-group">
                <label htmlFor="sg-cel">Celular</label>
                <input
                  id="sg-cel"
                  type="tel"
                  placeholder="(27) 90000-0000"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="signup-form-row signup-form-row-city">
              <div className="signup-form-group">
                <label htmlFor="sg-cidade">Cidade</label>
                <input
                  id="sg-cidade"
                  type="text"
                  placeholder="Sua cidade"
                  autoComplete="address-level2"
                />
              </div>
              <div className="signup-form-group">
                <label htmlFor="sg-uf">UF</label>
                <select id="sg-uf" autoComplete="address-level1">
                  <option>UF</option>
                  <option>ES</option>
                  <option>SP</option>
                  <option>RJ</option>
                  <option>MG</option>
                  <option>PR</option>
                  <option>RS</option>
                  <option>BA</option>
                </select>
              </div>
            </div>

            <div className="signup-form-row">
              <div className="signup-form-group">
                <label htmlFor="sg-pass">Senha</label>
                <input
                  id="sg-pass"
                  type="password"
                  placeholder="Mínimo 8 caracteres"
                  autoComplete="new-password"
                />
              </div>
              <div className="signup-form-group">
                <label htmlFor="sg-pass2">Confirmar senha</label>
                <input
                  id="sg-pass2"
                  type="password"
                  placeholder="Repita a senha"
                  autoComplete="new-password"
                />
              </div>
            </div>

            <label className="signup-checkbox">
              <input type="checkbox" />
              <span>
                Li e aceito os <a href="#">Termos de uso</a> e a{" "}
                <a href="#">Política de privacidade</a>.
              </span>
            </label>

            <button type="submit" className="signup-submit-btn">
              Criar conta
            </button>

            <div className="signup-divider">
              <span />
              ou
              <span />
            </div>

            <button type="button" className="signup-google-btn">
              Cadastrar com Google
            </button>

            <p className="signup-login-link">
              Já tem conta? <a href="/login">Entrar</a>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
