const User = require("../models/users");
const Spots = require("../models/spots")
const bcrypt = require("bcrypt-nodejs");

const surfSpots =  [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.033145, 40.10331]
      },
      properties: {
        "Surf_Spot_Name": "Manasquan Inlet",
        Location: "Manasquan, NJ",
        MSW_Rating: "No Access to MSW API for this Spot",
        Surfline_Rating: "http://api.surfline.com/v1/forecasts/4278",
        SwellInfo_Rating: "",
        icon: "shaka"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.040503, 40.075229]
      },
      properties: {
        "Surf_Spot_Name": "Bay Head",
        Location: "Point Pleasant, NJ",
        MSW_Rating: "No Access to MSW API for this Spot",
        Surfline_Rating: "http://api.surfline.com/v1/forecasts/5182",
        SwellInfo_Rating: "",
        icon: "shaka"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.417173, 39.359283]
      },
      properties: {
        "Surf_Spot_Name": "States Ave",
        Location: "Atlantic City, NJ",
        MSW_Rating:
          "https://magicseaweed.com/api/0be72c50101bffb095ef01df8958a606/forecast/?spot_id=390",
        Surfline_Rating: "http://api.surfline.com/v1/forecasts/2147",
        SwellInfo_Rating: "",
        icon: "shaka"
      }
    },{
    type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-73.812034, 40.582714]
      },
      properties: {
        "Surf_Spot_Name": "Rockaway 90th St. Jetty",
        Location: "Long Beach, NY",
        MSW_Rating:
          "https://magicseaweed.com/api/0be72c50101bffb095ef01df8958a606/forecast/?spot_id=384",
        Surfline_Rating: "http://api.surfline.com/v1/forecasts/4270",
        SwellInfo_Rating: "",
        icon: "shaka"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-75.96879581712281, 36.82821081239807]
      },
      properties: {
        "Surf_Spot_Name": "Croatan to Pendleton",
        Location: "Virginia Beach, VA",
        MSW_Rating: "No Access to MSW API for this Spot",
        Surfline_Rating: "http://api.surfline.com/v1/forecasts/5208",
        SwellInfo_Rating: "",
        icon: "shaka"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-73.65247249603, 40.582703230722]
      },
      properties: {
        "Surf_Spot_Name": "Lincoln Blvd",
        Location: "Long Beach, NY",
        MSW_Rating: "No Access to MSW API for this Spot",
        Surfline_Rating: "http://api.surfline.com/v1/forecasts/4269",
        SwellInfo_Rating: "",
        icon: "shaka"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.55754, 39.281924]
      },
      properties: {
        "Surf_Spot_Name": "1st Street Jetty",
        Location: "Ocean City, NJ",
        MSW_Rating:
          "https://magicseaweed.com/api/0be72c50101bffb095ef01df8958a606/forecast/?spot_id=391",
        Surfline_Rating: "http://api.surfline.com/v1/forecasts/2147",
        SwellInfo_Rating: "",
        icon: "shaka"
      }
  },
      {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [-71.293, 41.469]
          },
          properties: {
            "Surf_Spot_Name": "Ruggles",
            Location: "Newport, RI",
            MSW_Rating:
              "https://magicseaweed.com/api/0be72c50101bffb095ef01df8958a606/forecast/?spot_id=391",
            Surfline_Rating: "http://api.surfline.com/v1/forecasts/2147",
            SwellInfo_Rating: "",
            icon: "shaka"
          }
          },
  
          {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [-75.081169, 38.338461]
              },
              properties: {
                "Surf_Spot_Name": "8th Street",
                Location: "Ocean City, MD",
                MSW_Rating:
                  "",
                Surfline_Rating: "http://api.surfline.com/v1/forecasts/4406",
                SwellInfo_Rating: "",
                icon: "shaka"
              }
              
      
    }
]

Spots.find({}).remove(() => {
            Spots.create(surfSpots)
            .then( spots => console.log(spots))
            .catch(err => console.error(err))

})
