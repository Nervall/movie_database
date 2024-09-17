const API_URL = ' https://www.omdbapi.com/';
const API_KEY =  "9f591bcb"

type TypeOfSearch = "TITLE" | "ID" | "SEARCH";

const typeOfSearch = (query:string, type: TypeOfSearch) => {
    switch (type) {
        case 'TITLE':
           return `&t=${query}`;
        case "ID":
            return `&i=${query}&plot=full`
        default:
           return `&s=${query}`
    }
}

export const apiRequest = async (query: string, type: TypeOfSearch) => {
    const search = typeOfSearch(query, type)
    try {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}${search}`);
        if (!response.ok) {
        throw new Error('Something with the network response went wrong');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch movies');
    }
};