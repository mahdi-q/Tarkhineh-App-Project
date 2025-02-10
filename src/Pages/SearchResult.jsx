import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function SearchResult() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("q");
    console.log(searchQuery.split("+").join(" "));
  }, [searchParams]);

  return <div>SearchResult</div>;
}
export default SearchResult;
