import React, { Children } from "react";
import "./MainContent.scss";
import ImageCard from "../imageCard/ImageCard";

const MainContent = ({ photos }) => {
  console.log(photos);

  return (
    <div className="mainContent">
      {photos?.map((photo) => {
        console.log(photo);
        return (
          <ImageCard
            key={photo.id}
            src={photo.urls.small}
            alt={photo.alt_description}
            name={`${photo.user.first_name} ${
              photo.user.last_name ? photo.user.last_name : ""
            }`}
            url={photo.user.links.photos}
            date={photo.user.updated_at}
          />
        );
      })}
    </div>
  );
};

export default MainContent;
