import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;
const Gallery = () => {
  const { searchItem } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchItem],
    queryFn: async () => {
      const result = await axios.get(`${url}&&query=${searchItem}`);
      return result.data;
    },
  });
  console.log(response);
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading....</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There is a Error...</h4>
      </section>
    );
  }
  const data = response.data.results;
  if (data.length === 0) {
    return (
      <section className="image-container">
        <h4>No match found</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {data.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            className="img"
            src={url}
            key={item.id}
            alt={item.alt_description}
          />
        );
      })}
    </section>
  );
};
export default Gallery;
// const fetchdata = async () => {
//   try {
//     const resp = await fetch("https://course-api.com/react-tours-project");
//     const result = await resp.json();
//     console.log(resp);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchdata();
