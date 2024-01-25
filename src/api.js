const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://gateway.marvel.com:443/v1/public";
// [GET] Comics 리스트
export async function apiGetComics() {
    return await fetch(`${BASE_URL}/comics?apikey=${API_KEY}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
}