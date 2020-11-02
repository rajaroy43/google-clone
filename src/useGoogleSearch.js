import { useEffect, useState } from "react";
const API_kEY = "YOUR-Google-Custom-APi";
const SEARCH_ENGINE_ID = "Your-Search-Engine-Id";
const useGoogleSearch = (term) => {
  const [data, setdata] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        var resp = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_kEY}&cx=${SEARCH_ENGINE_ID}&q=${term}`
        );
        resp = await resp.json();
        setdata(resp);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
