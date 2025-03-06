import React, { useState } from "react";
import "../components/PublicationsSection.css";

const publications = [
  {
    title: "School Community Engagement in Japan for Proactive Risk Reduction",
    authors: "Yafang Wen, Yinan Gao, Tomo Kawane, Rajib Shaw",
    details: "Disaster and Climate Risk Education, Springer, Oct 1, 2024",
  },
  {
    title: "Social Innovation and Disaster Risk Reduction in Japan: Challenges and Opportunities",
    authors: "Tomo Kawane, Yasutaka Ozaki, Divya Suresh, Yinzia Zhang, Sreelekha Mazumder, Rajib Shaw",
    details: "Disaster Prevention and Resilience, Sep 27, 2024",
  },
  {
    title: "Consideration of Risks and Resilience Leading to New Policy Framework for MSMEs in India",
    authors: "Tomo Kawane, Rajib Shaw",
    details: "India, Japan and Beyond, Jun 28, 2024",
  },
  {
    title: "Youth Voices and India Japan Relation",
    authors: "Tomo Kawane, Rajib Shaw",
    details: "India, Japan and Beyond, Jun 28, 2024",
  },
  {
    title: "Home Diplomacy and International Partnership between India and Japan: A Case of Gujarat",
    authors: "Tomo Kawane",
    details: "India-Japan Partnership, Routledge, Jun 25, 2024",
  },
  {
    title: "Enhancing and Sustaining Entrepreneurial Mindset and Ecosystem through Social Capital",
    authors: "Tomo Kawane, Rajib Shaw",
    details: "International Journal of Asian Social Science, Jun 11, 2024",
  },
  {
    title: "Digitization as an Adaptation and Resilience Measure for MSMEs amid COVID-19 in Japan",
    authors: "Tomo Kawane, Bismark Adu-Gyamfi, Yuqiu Cao, Yinjia Zhang, Nanami Yamazawa, Zuquan He, Rajib Shaw",
    details: "Sustainability, Feb 12, 2024",
  },
  {
    title: "Strengthening Online Higher Education in Disaster Risk Reduction Post COVID-19",
    authors: "Tomo Kawane, Bismark Adu-Gyamfi, Rajib Shaw",
    details: "International Journal of Disaster Resilience, Sep 27, 2023",
  },
  {
    title: "The Metaverse and Regional Challenges in Japan",
    authors: "Tomo Kawane, Rajib Shaw",
    details: "Asia-Pacific Tech Monitor, Jul 2023",
  },
  {
    title: "Local Production, Consumption, and Innovation in SMEs in Japan",
    authors: "Tomo Kawane, Ruiyan Zhao, Yasutaka Ozaki, Takuma Otaki, Sreelekha Mazumder, Rajib Shaw",
    details: "Rural and Regional Development, 2023",
  },
  {
    title: "Immersive Learning Based on Global Cultural Exchange",
    authors: "Sachi Urano, Tomo Kawane, Sakiko Kanbara, Rajib Shaw",
    details: "Social Work and Social Welfare, Jun 10, 2022",
  },
];

const PublicationsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visiblePublications = showAll ? publications : publications.slice(0, 3);

  return (
    <div className="publications-container">
      <h1>Publications</h1>
      <ul className="publications-list">
        {visiblePublications.map((publication, index) => (
          <li key={index} className="publication-item">
            <span className="publication-title">{publication.title}</span> - 
            <span className="publication-authors">{publication.authors}</span>, 
            <span className="publication-details">{publication.details}</span>
          </li>
        ))}
      </ul>
      {!showAll ? (
        <span className="more-text" onClick={() => setShowAll(true)}>More...</span>
      ) : (
        <span className="less-text" onClick={() => setShowAll(false)}>Show Less</span>
      )}
    </div>
  );
};

export default PublicationsSection;
