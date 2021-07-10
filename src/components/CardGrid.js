import React from "react";
import { useFetchCards } from "../hooks/useFetchCards";
import { CardGridItem } from "./CardGridItem";

export const CardGrid = ({ setType, energyType }) => {
  const { data: images, loading } = useFetchCards(setType, energyType);

  return (
    <div className="py-4">
      {loading && <p>loading...</p>}
      <div className="row">
        {images.map((img) => (
          
            <CardGridItem key={img.id} {...img} />
      
        ))}
      </div>
    </div>
  );
};
