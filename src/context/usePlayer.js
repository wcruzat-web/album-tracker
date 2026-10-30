import { useContext } from "react";
import { PlayerContext } from "./PlayerContext.js";

export const usePlayer = () => useContext(PlayerContext);
