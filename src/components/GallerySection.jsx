import React from "react";
import "../components/GallerySection.css";

const galleryImages = [
  {
    url: "https://media.assettype.com/thebridgechronicle%2F2025-02-23%2Fp56mdm2r%2FPrashant-Girbane-Ateesh-Kumar-Singh-Tomo-Kawane-Reinhold-at-session-on-MSME.JPG",
    description: "Photo 1",
  },
  {
    url: "https://ssp.jst.go.jp/media/images/report/2023/photo_voli001_03.jpg",
    description: "Photo 2",
  },
  {
    url: "https://indiajapanlab.org/wpIJ/wp-content/uploads/2024/02/Tomo-Orientation-050224-768x576.jpg",
    description: "Photo 3",
  },
  {
    url: "https://indiajapanlab.org/wpIJ/wp-content/uploads/2023/03/IMG-20230224-WA0054-1536x1023.jpg",
    description: "Photo 4",
  },
  {
    url: "https://media.licdn.com/dms/image/v2/D5622AQFGEJCcW1Mgfw/feedshare-shrink_2048_1536/B56ZRXyYulHoAo-/0/1736639663668?e=1743638400&v=beta&t=GlCCRodzCw9lY4vNyPWcIWr2FkNqrZ2nt7_xJT6VprQ",
    description: "Photo 5",
  },
  {
    url: "https://indiajapanlab.org/wpIJ/wp-content/uploads/2022/07/IMG-20220625-WA0008-1536x1052.jpg",
    description: "Photo 6",
  },
  {
    url: "https://pbs.twimg.com/media/GkkDLRpbYAARPsu?format=jpg&name=large",
    description: "Photo 7",
  },
  {
    url: "https://pbs.twimg.com/media/GkkDLUpbgAEesTn?format=jpg&name=large",
    description: "Photo 8",
  },
];

const GallerySection = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery & Testimonials</h1>
      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.url} alt={`Gallery ${index + 1}`} />
            <div className="image-description">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
