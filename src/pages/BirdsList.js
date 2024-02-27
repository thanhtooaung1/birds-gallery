import useFetch from "../hooks/useFetch";
import BirdCard from "../components/BirdCard";

const BirdsList = () => {
  const {
    data: birds,
    error,
    isPending,
  } = useFetch("http://localhost:8000/Tbl_Bird/");

  return (
    <div className="container py-3 my-5">
      <h3>Birds</h3>
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
