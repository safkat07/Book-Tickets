import { useState, useEffect } from "react";
import ShowExtraSection from "../../Components/ShowExtraSection/ShowExtraSection";

const SecondExtraSection = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("/band.json")
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div className="max-w-7xl mt-10 mb-16 flex justify-center mx-auto">
      <div  className="grid grid-cols-1 ">
        {
          albums?.map(album => <ShowExtraSection key={album.id} album={album}></ShowExtraSection>)
        }
      </div>
    </div>
  );
};

export default SecondExtraSection;
