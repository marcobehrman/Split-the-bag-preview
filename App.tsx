import React, { useState } from "react";

type Page = "home" | "marketplace" | "project" | "platinum" | "affiliate";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: 24,
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      <header style={{ marginBottom: 32 }}>
        <h1>Split The Bag</h1>
        <p>
          <strong>Artists keep 51%+. Fans share digital revenue.</strong>
        </p>

        <nav
          style={{ marginTop: 12, display: "flex", gap: 12, flexWrap: "wrap" }}
        >
          <NavButton label="Home" onClick={() => setPage("home")} />
          <NavButton
            label="Marketplace"
            onClick={() => setPage("marketplace")}
          />
          <NavButton label="Platinum" onClick={() => setPage("platinum")} />
          <NavButton label="Affiliate" onClick={() => setPage("affiliate")} />
        </nav>
      </header>

      {page === "home" && <Home />}
      {page === "marketplace" && (
        <Marketplace openProject={() => setPage("project")} />
      )}
      {page === "project" && <Project back={() => setPage("marketplace")} />}
      {page === "platinum" && <Platinum />}
      {page === "affiliate" && <Affiliate />}

      <footer
        style={{
          marginTop: 64,
          fontSize: 12,
          borderTop: "1px solid #ddd",
          paddingTop: 16,
        }}
      >
        <p>© {new Date().getFullYear()} Split The Bag — Demo</p>
        <p>
          Demo only. No guaranteed returns. Digital music revenue only.
          Withdrawals available once earned (minimum $20).
        </p>
      </footer>
    </div>
  );
}

function NavButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 12px",
        cursor: "pointer",
        border: "1px solid #333",
        background: "#fff",
      }}
    >
      {label}
    </button>
  );
}

function Home() {
  return (
    <>
      <h2>How Split The Bag Works</h2>
      <ol>
        <li>Artists upload music through Split The Bag</li>
        <li>
          Fans participate in <strong>digital music revenue only</strong>
        </li>
        <li>Revenue is split automatically and transparently</li>
        <li>Artists unlock funds after a set threshold</li>
      </ol>

      <h3>Core Rules</h3>
      <ul>
        <li>
          Artists always keep at least <strong>51%</strong>
        </li>
        <li>Merchandise & live shows are excluded</li>
        <li>No guaranteed returns</li>
        <li>Withdraw anytime (minimum $20)</li>
      </ul>
    </>
  );
}

function Marketplace({ openProject }: { openProject: () => void }) {
  return (
    <>
      <h2>Marketplace (Demo Projects)</h2>

      <div style={{ border: "1px solid #ccc", padding: 16, marginBottom: 16 }}>
        <h3>Demo Artist One — Promo Release</h3>
        <p>Artist: 51% | Investors: 44% | Platform: 5%</p>
        <p>Funding goal: $25,000</p>
        <button onClick={openProject}>View Project</button>
      </div>

      <div style={{ border: "1px solid #ccc", padding: 16 }}>
        <h3>Demo Artist Two — Indie Launch</h3>
        <p>Artist: 51% | Investors: 44% | Platform: 5%</p>
        <p>Funding goal: $10,000</p>
        <button onClick={openProject}>View Project</button>
      </div>
    </>
  );
}

function Project({ back }: { back: () => void }) {
  return (
    <>
      <button onClick={back}>← Back to Marketplace</button>

      <h2>Demo Artist One — Project Details</h2>

      <h3>Revenue Split</h3>
      <ul>
        <li>Artist: 51%</li>
        <li>Fans / Investors: 44%</li>
        <li>Split The Bag: 5%</li>
      </ul>

      <h3>Artist Unlock Threshold</h3>
      <p>$5,000</p>

      <h3>Withdrawals</h3>
      <p>Available anytime once earned (minimum $20)</p>

      <button disabled>Invest (demo only)</button>
    </>
  );
}

function Platinum() {
  return (
    <>
      <h2>Platinum Program</h2>

      <h3>Artist Requirements</h3>
      <ul>
        <li>High-quality promo material uploaded</li>
        <li>
          At least <strong>1 music video</strong>
        </li>
        <li>Merchandise uploaded with wholesale pricing</li>
      </ul>

      <h3>Investor Benefits</h3>
      <ul>
        <li>Access to approved merchandise at wholesale</li>
        <li>Optional live show participation (separate agreement)</li>
        <li>Merchandise sales are final (no refunds)</li>
      </ul>
    </>
  );
}

function Affiliate() {
  return (
    <>
      <h2>Affiliate Program</h2>

      <p>
        Earn by growing Split The Bag. Affiliates earn a percentage of
        <strong> Split The Bag’s platform fees only</strong>.
      </p>

      <h3>Rules</h3>
      <ul>
        <li>No guaranteed earnings</li>
        <li>No misleading claims</li>
        <li>Minimum payout: $20</li>
      </ul>

      <h3>Example Calculator</h3>
      <p>
        10 active artists × $300/month platform fees × 15% ={" "}
        <strong>$450/month</strong>
      </p>
    </>
  );
}
