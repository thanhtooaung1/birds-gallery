import useFetch from "../hooks/useFetch";
import BirdCard from "../components/BirdCard";

const BirdsList = () => {
  const {
    data: birds,
    error,
    isPending,
  } = useFetch("https://birds-json-server.vercel.app/Tbl_Bird/");

  return (
    <div className="container py-3 my-3">
      <h3>Birds</h3>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {birds && (
        <div class="row row-cols-1 row-cols-md-4 g-4 mt-3">
          {birds.map((bird) => (
            <BirdCard bird={bird} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BirdsList;
