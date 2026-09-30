* {
  box-sizing: border-box;
}

:root {
  --bg-1: #0b1020;
  --bg-2: #121b2e;
  --panel: rgba(18, 24, 39, 0.72);
  --panel-strong: rgba(24, 31, 49, 0.96);
  --line: rgba(168, 178, 209, 0.2);
  --text: #edf2ff;
  --muted: #b9c3d9;
  --accent: #7c6bff;
  --accent-2: #ff4db8;
  --accent-3: #25d0a6;
  --warn: #ffb84d;
  --danger: #ff5a7d;
  --success: #43d39e;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 107, 255, 0.4), transparent 30%),
    radial-gradient(circle at top right, rgba(255, 77, 184, 0.3), transparent 28%),
    linear-gradient(135deg, var(--bg-1), var(--bg-2));
  color: var(--text);
  min-height: 100vh;
}

.page-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 20px 60px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 6px 30px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  display: grid;
  place-items: center;
  font-weight: 800;
  color: white;
  box-shadow: 0 12px 30px rgba(124, 107, 255, 0.45);
}

.brand-name {
  font-weight: 800;
  letter-spacing: -0.04em;
  font-size: 1.05rem;
}

.brand-tag {
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.topbar-badge {
  color: var(--text);
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 999px;
  padding: 9px 14px;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 28px;
}

.hero-panel,
.analysis-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 28px;
  backdrop-filter: blur(20px);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
}

.hero-panel {
  padding: 38px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.eyebrow {
  font-size: 0.76rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent-3);
  margin-bottom: 18px;
  font-weight: 700;
}

.hero-panel h1 {
  margin: 0 0 12px;
  font-size: clamp(2.2rem, 3vw, 3.5rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
}

.hero-panel p {
  color: var(--muted);
  font-size: 1.02rem;
  line-height: 1.7;
  margin: 0;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(110px, 1fr));
  gap: 16px;
  margin-top: 30px;
}

.hero-stats div {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px 16px;
}

.hero-stats strong {
  display: block;
  font-size: 1.7rem;
  line-height: 1;
  margin-bottom: 6px;
}

.hero-stats span {
  color: var(--muted);
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.analysis-panel {
  padding: 28px;
}

.analysis-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.field-row {
  display: grid;
  gap: 18px;
}

.two-up {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 600;
}

input,
textarea,
select,
button {
  font: inherit;
}

input,
textarea,
select {
  width: 100%;
  border: 1px solid var(--line);
  background: rgba(9, 18, 32, 0.7);
  color: var(--text);
  border-radius: 14px;
  padding: 13px 14px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: rgba(124, 107, 255, 0.8);
  box-shadow: 0 0 0 4px rgba(124, 107, 255, 0.15);
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.upload-box {
  border: 1px dashed rgba(124, 107, 255, 0.6);
  background: rgba(124, 107, 255, 0.08);
  border-radius: 14px;
  padding: 16px;
}

.upload-box input {
  padding: 10px 0 0;
  border: none;
  background: transparent;
}

.primary-button {
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: white;
  font-weight: 700;
  letter-spacing: -0.02em;
  padding: 15px 18px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 14px 34px rgba(124, 107, 255, 0.35);
}

.primary-button:hover {
  transform: translateY(-1px);
}

.loading-state,
.results-panel {
  margin-top: 28px;
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(8, 16, 29, 0.75);
}

.loading-state {
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--muted);
}

.spinner {
  width: 18px;
  height: 18px;
  border: 3px solid rgba(255, 255, 255, 0.12);
  border-top-color: var(--accent-3);
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.hidden {
  display: none;
}

.score-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;
}

.score-label {
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.72rem;
  margin-bottom: 6px;
}

.score-value {
  font-size: clamp(2.8rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.08em;
  line-height: 1;
}

.score-badge {
  min-width: 74px;
  height: 74px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--accent-3), var(--accent));
  font-size: 1.7rem;
  font-weight: 800;
}

.score-summary {
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 18px;
}

.metric-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.metric-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 14px 12px;
}

.metric-card span {
  display: block;
  color: var(--muted);
  font-size: 0.72rem;
  margin-bottom: 8px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.metric-card strong {
  font-size: 1.4rem;
}

.comparison-box,
.suggestions-box {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
}

.comparison-box h3,
.suggestions-box h3 {
  margin: 0 0 12px;
  font-size: 1.05rem;
}

#benchmarkDetail {
  color: var(--muted);
  line-height: 1.7;
}

#suggestionsList {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  display: grid;
  gap: 10px;
  line-height: 1.6;
}

@media (max-width: 980px) {
  .layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .two-up,
  .metric-grid,
  .hero-stats {
    grid-template-columns: 1fr;
  }

  .analysis-panel,
  .hero-panel {
    padding: 20px 18px;
  }
}
