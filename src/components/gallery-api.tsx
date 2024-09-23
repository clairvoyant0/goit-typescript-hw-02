import axios from 'axios';

interface Photo {
  id: string;
  urls: {
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
}

interface ApiResponse {
  results: Photo[];
  total: number;
  total_pages: number;
}

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  headers: {
    Authorization: 'Client-ID wd1bdipkEtNjAx-zjCaDYCk9jeCG1Bp4TaQBgXu7zEI',
  },
});

const fetchPhotosWithTopic = async (topic: string, page: number): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await instance.get<ApiResponse>(
    `?query=${topic}&orientation=squarish&per_page=12&page=${page}`
  );
  return response.data;
};

// const instance = axios.create({
//   baseURL: 'https://api.unsplash.com/search/photos',
//   headers: {
//     Authorization: 'Client-ID wd1bdipkEtNjAx-zjCaDYCk9jeCG1Bp4TaQBgXu7zEI',
//   },
// });

// const fetchPhotosWithTopic = async (topic, page) => {
//   const response = await instance.get(
//     `?query=${topic}&orientation=squarish&per_page=12&page=${page}`
//   );
//   return response.data;
// };

export default fetchPhotosWithTopic;