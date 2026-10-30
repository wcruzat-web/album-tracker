import { useCollection } from "../context/useCollection.js";
export default function Navbar({ page, setPage }) {
  const { albums } = useCollection();
  const count = Object.keys(albums).length;
  const tab = (id, label) => (
    <button
      className={`nav-tab ${page === id ? "active" : ""}`}
      type="button"
      onClick={() => setPage(id)}
    >
      {label}
    </button>
  );
  return (
    <header className="navbar">
      <h1 className="logo">Album Tracker</h1>
      <nav>
        {tab("discover", "Discover")}
        {tab("collection", `My collection (${count})`)}
      </nav>
    </header>
  );
}
