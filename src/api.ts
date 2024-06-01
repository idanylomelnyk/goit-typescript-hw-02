import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const accessKey = "U-ATiodPgiLzn5aNBj-9tc4gufDApU4eIl8N-Pn22tQ";

interface Image {
    id: string;
    urls: {
        regular: string;
    };
    likes: number;
    user: {
        instagram_username: string;
    };
}

interface ApiResponse {
    results: Image[];
}

export const fetchImages = async (searchQuery: string, currentPage: number): Promise<Image[]> => {
  const response = await axios.get<ApiResponse>("/search/photos", {
    params: {
      client_id: accessKey,
      query: searchQuery,
      page: currentPage,
      orientation: "landscape",
      per_page: 12,
    },
  });

  return response.data.results;
};
