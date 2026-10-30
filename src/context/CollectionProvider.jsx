import { CollectionContext } from "./CollectionContext.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

export function CollectionProvider({ children }) {
  const [albums, setAlbums] = useLocalStorage("album-tracker:collection", {});
  const save = (album, status = "wishlist") =>
    setAlbums((prev) => ({
      ...prev,
      [album.collectionId]: {
        collectionId: album.collectionId,
        name: album.collectionName,
        artist: album.artistName,
        artwork: album.artworkUrl100,
        year: album.releaseDate?.slice(0, 4),
        status,
        rating: 0,
        notes: "",
      },
    }));
  const update = (id, patch) =>
    setAlbums((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
  const remove = (id) =>
    setAlbums((prev) =>
      Object.fromEntries(
        Object.entries(prev).filter(([albumId]) => albumId !== String(id)),
      ),
    );
  return (
    <CollectionContext.Provider value={{ albums, save, update, remove }}>
      {children}
    </CollectionContext.Provider>
  );
}
