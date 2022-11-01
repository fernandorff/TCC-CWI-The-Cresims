import { useLocalStorage } from "../services/local-storage/use-local-storage.js";

export const updateStorage = (newStorage) => {
    const localStorage = useLocalStorage();
    localStorage.setObject("inGameCharacters.json", [...newStorage]);
}
  
export const getStorage = () => {
    const localStorage = useLocalStorage();
    const storage = localStorage.getObject("inGameCharacters.json") || [];
    return storage
}