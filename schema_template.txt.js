{
  "comment": "comment references [x] throughout the document referencing google doc comments at the end.",
  "@context": {
    "@vocab": "https://schema.org/"
  },
  "@type": "Dataset",
  "@id": "https://example.org/permanentUrlToThisJsonDoc",
  "identifier": "e.g: 2395dbfb4d9d599690f98ca3931e9d19",
  "citation": [
    "Citation to other work relevant to this dataset",
    "Citation to other work relevant to this dataset",
    "Citation to other work relevant to this dataset"
  ],
  "name": "A concise but descriptive name of the dataset",
  "description": "An extended, free-text description of what\u0027s in the dataset, who created it, and other attributes",
  "url": "https://urlToTheDatasetOrLandingPage.org/",
  "provider": [
    {
      "comment": "[a][b]"
    },
    {
      "@type": "Organization",
      "legalName": "Legal Name of Organisation which generated the dataset",
      "name": "Other Name of Organisation which generated the dataset",
      "url": "https://organisationWebsite.org/"
    },
    {
      "@type": "Person",
      "name": "Dr Uta Passow",
      "givenName": "Uta",
      "familyName": "Passow",
      "url": "https://www.sample-data-repository.org/person/51317"
    },
    {
      "comment": "[c][d]"
    }
  ],
  "creator": [
    {
      "@id": "https://www.sample-data-repository.org/person-role/472036",
      "comment": "[e][f]",
      "@type": "Role",
      "roleName": "Principal Investigator",
      "creator": {
        "@id": "https://www.sample-data-repository.org/person/51317",
        "@type": "Person",
        "name": "Dr Uta Passow",
        "givenName": "Uta",
        "familyName": "Passow",
        "url": "https://www.sample-data-repository.org/person/51317"
      }
    },
    {
      "@id": "https://www.sample-data-repository.org/person-role/472038",
      "@type": "Role",
      "roleName": "Co-Principal Investigator",
      "url": "https://www.sample-data-repository.org/person-role/472038",
      "creator": {
        "@id": "https://www.sample-data-repository.org/person/50663",
        "@type": "Person",
        "identifier": {
          "@id": "https://orcid.org/0000-0003-3432-2297",
          "@type": "PropertyValue",
          "propertyID": "https://registry.identifiers.org/registry/orcid",
          "url": "https://orcid.org/0000-0003-3432-2297",
          "value": "orcid:0000-0003-3432-2297"
        },
        "name": "Dr Mark Brzezinski",
        "url": "https://www.sample-data-repository.org/person/50663"
      }
    }
  ],
  "funding": [
    {
      "@id": "https://www.nsf.gov/awardsearch/showAward?AWD_ID\u003d1604105",
      "@type": "MonetaryGrant",
      "identifier": "1604105",
      "comment": "[g]",
      "name": "Collaborative Research: Nutritional Landscapes of Arctic Caribou: Observations, Experiments, and Models Provide Process-Level Understanding of Forage Traits and Trajectories",
      "url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID\u003d1604105",
      "funder": {
        "@id": "http://dx.doi.org/10.13039/100000001",
        "comment": "[h]",
        "@type": "Organization",
        "name": "National Science Foundation",
        "identifier": [
          "http://dx.doi.org/10.13039/100000001",
          "https://ror.org/021nxhr62"
        ]
      }
    }
  ],
  "spatialCoverage": {
    "comment": "[i]",
    "@id": "https://github.com/iodepo/ocean-carbon-metadata-exchange",
    "@type": "Place",
    "geo": {
      "@type": "GeoShape",
      "box": "55 -6 56 -4"
    }
  },
  "archival": [
    {
      "note": "I doubt this is a Schema.org term."
    },
    {
      "@context": "https://schema.org/",
      "@type": [
        "Service[j]",
        "ResearchProject"
      ],
      "legalName": "Sample Data Repository Office",
      "name": "SDRO",
      "url": "https://www.sample-data-repository.org",
      "description": "The Sample Data Repository Service provides access to data from an imaginary domain accessible from this website.",
      "sameAs": [
        "http://www.re3data.org/repository/r3d1000000xx",
        "https://twitter.com/SDRO",
        "https://www.linkedin.com/company/123456789/"
      ],
      "category": [
        "Biological Oceanography",
        "Chemical Oceanography",
        {
          "comment": "[k][l]"
        }
      ]
    }
  ],
  "google_doc_comments": "\r\n    [a]The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.\r\n    [b]Ideally we want to have PID and additional text\r\n    [c]Ideally, you wouldn\u0027t have to next this information in the Dataset record, but just link out to JSON doc with an \u0027@id\u0027 property that contains it, like an OceanExpert page for people or an EDMO page with embedded JSON-LD/schema.org for organisations\r\n\r\n    Some ODIS users still prefer to embed it, however, as they\u0027re not totally confident in the link to the other resource remaining valid in the long-term\r\n    [d]I think there are sort of two perspectives here.  The discovery perspective and the use.perspective.  In discovery, you can have a system that will resolve those links and show you the information.  But when a user downloads data, they are going to want to have all the metadata with the data (preferably embedded in the data in a way that is machine actionable), rather than having to go out and chase down links to get all the metadata details.\r\n    [e]Keep in mind this is the id/url to the JSON-LD file (or RDF) that contains the metadata in this object.\r\n    [f]It can be the same as the \u0027identifier\u0027 property value, as long as the landing page has JSON-LD embedded in it.\r\n    [g]The identifier of the Thing\r\n    [h]jsonLD, machine readable version of the Thing\r\n    [i]See https://book.odis.org/thematics/depth/index.html\r\n    [j]I would have a list of services provided by an org as separate. \r\n\r\n    These types are too different to be applied to the same thing\r\n    [k]Identify a vocabulary for categories\r\n    [l]Theres\u0027s this: https://skos.um.es/unesco6/\r\n  "
}
