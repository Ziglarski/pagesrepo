// schema.js
const schemaData = {
    "@context": "https://www.schema.org",
    "@type": "ProfessionalService",
    "name": "Erik Ziglarski",
    "url": "https://ziglarski.de",
    "logo": "https://ziglarski.de/images/ziglarski.jpeg",
    "image": "https://ziglarski.de/images/ziglarski.jpeg",
    "description": "Erik Ziglarski is a Enablement Consultant, specialized in Digital Transformation, Creator Management and Strategic Advisory.",
    "address": {
       "@type": "PostalAddress",
       "streetAddress": "Medienhafen",
       "addressLocality": "Düsseldorf",
       "addressRegion": "North-Rhine Westfalia",
       "postalCode": "40221",
       "addressCountry": "DE"
    },
    "geo": {
       "@type": "GeoCoordinates",
       "latitude": "51.225402",
       "longitude": "6.776314"
    },
    "hasMap": "https://www.google.de/maps/place/D%C3%BCsseldorf",
     "openingHours": [
      "Mo-Fr 09:00-17:00",
        "Sa 09:00-17:00",
        "Su 09:00-17:00"
     ],
     "telephone": "+49 00", // Not applicable
      "sameAs": [
        "https://www.linkedin.com/in/erik-ziglarski",
        "https://github.com/Ziglarski"
    ] 
  };
  
  // Füge das Schema-Markup in das <body>-Tag ein
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schemaData);
document.body.appendChild(script);