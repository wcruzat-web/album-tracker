import { useContext } from "react";
import { CollectionContext } from "./CollectionContext.js";

export const useCollection = () => useContext(CollectionContext);
