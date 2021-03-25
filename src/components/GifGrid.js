import React from "react";
import { UseFetchGifs } from "../hooks/UseFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const {data:images,loading} = UseFetchGifs(category);
console.log(images)
  return (
    <>
      <h3>{category}</h3>
      { loading && <p>Loading</p>}


       <div className="card-grid animate__animated animate__fadeIn">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div> 
      

    </>
  );
};
