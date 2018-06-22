mapboxgl.accessToken =
  "pk.eyJ1IjoiamFja2dyb3NzbWFuIiwiYSI6ImNpbWZqeG1hMjAxcHl2Y202cmhlZGRjYXcifQ.1-so8LElW5dTGT5o941u1w";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/jackgrossman/cjik9ad460fqo2spiry7jczkn",
  zoom: 6.67,
  center: [-74.518183, 39.947325]
});
// map.addControl(new MapboxDirections({
//     accessToken: mapboxgl.accessToken
// }), 'top-left')
map.on("load", function() {
    map.loadImage('https://cdn0.iconfinder.com/data/icons/hand-conversation/91/Hand_17-512.png', function(error, image) {
        if (error) throw error;
        map.addImage('shaka-sign', image);
        // Add a layer showing the state polygons.
        map.addLayer({
            id: "points",
            type: "symbol",
            source: {
            type: "geojson",
            data: {
            type: "FeatureCollection",
            features: [
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
                    },
                    
            
          }
            ]
            },
            },
            layout: {
            "icon-image": "shaka-sign",
            "icon-size": 0.1,
            "text-field": "{title}",
            "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            "text-offset": [0, 0.6],
            "text-anchor": "top"
      
            }
        });
        map.on('click', 'points', function (e) {
            var surfline = fetch(e.features[0].properties.Surfline_Rating)
            .then(res => res.json())
            // var msw = fetch(e.features[0].properties.MSW_Rating, 
            //     {
            //     mode: "no-cors",
            //     method: "GET",
            //     headers: {
            //         "Accept": "application/json, charset=utf-8"
            //       }
                
            //   })
            //   .then(response => {
            //       return response.json();
            //   })
            //   .then(data => {
            //       return data;
            //   })
            //   .catch(error => {
            //       return error;
            //   })
            var allRequests = {"surfline":{}, "msw": {}};
            Promise.all([surfline]).then(function (values) {
                allRequests.surfline = values[0]
                // allRequests.msw = values[1]
                console.log(allRequests)
                return allRequests
            })
            .then(res => {
                // <p class="fonts"> MSW Rating: ${mswRanking(allRequests.msw[0].fadedRating)} </p>\n
                var allConditions = 
                `<h3 class="h-font">${e.features[0].properties.Surf_Spot_Name}<h3>\n
                 <p class="t-font">Location:</p><p class="fonts" >${e.features[0].properties.Location}</p>\n
                 <p class="t-font">Surfline Rating:</p><p class="fonts">${surflineRanking(res.surfline.Analysis.generalCondition[0])}</p>\n
                
                 <button id="new" class="fonts" method="POST" action"${req.user.id}"?_method="PUT"><label for="spots">Select Spot</label>
                 <input class="form-control" type="hidden" name="favoriteSpot" value="${e.features[0].properties.Surf_Spot_Name}"></button>`
                new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(allConditions)
                .addTo(map), {once:true}; 
            })       

            // fetch('https://magicseaweed.com/api/0be72c50101bffb095ef01df8958a606/forecast/?spot_id=390')
            // .then(res => {
            //     if (res.status === 200) {
            //         console.log('cool')
            //         return {msw: res.json(), surfline: {Analysis: {generalCondition: [1]}}}
            //     }
            //     else {
            //         console.error(res);
            //         throw new Error(res);
            //     }
            // })
            // .catch(err => {
            //     console.error(err);
            // })
            // .then(res => {
            //     console.log(res);
            //     return res;
            // })
           
            // console.log(surfline)
            // fetch(surfline)
            // fetch(msw)
            // .then(msw_conditions => {
            //     return {
            //       fadedRating: msw_conditions[0].fadedRating,
            //       maxBreakingHeight: msw_conditions[0].swell.maxBreakingHeight
            //     }
            //   })
            // .then(res => res.json())
            // .then(conditions => {
            //     return {
            //         generalCondition: conditions.Analysis.generalCondition[0],
            //         surfMin: conditions.Analysis.surfMin[0]
            //     }
            // })
            // .then(res =>  {
            //     console.log(res)
            //     new mapboxgl.Popup()
            //     .setLngLat(e.lngLat)
            //     .setHTML(res.generalCondition + res.surfMin + res.fadedRating + res.maxBreakingHeight)
            //     .addTo(map);
            // })
          
         });

    })
});



function mswRanking(ranking) {
    let rating = '';
    // if ranking is zero, sad face
    if (ranking === 0) {
        rating += `<span class="glyphicon glyphicon-star-empty"></span>`
    } else {
        for (let i = 0; i < ranking; i++){
            rating += `<span class="glyphicon glyphicon-star" style="color:#60b9e4"></span>`
        }
    }
    // loop over ranking.
    return rating;
}
function surflineRanking(ranking) {
    let rating = '';
    // if ranking is poor, red
    if (ranking === 'FLAT') {
        rating = `<span class="flat rat">FLAT</span>`
    } else if (ranking === 'VERY POOR') {
        rating = `<span class="verypoor rat">VERY POOR</span>`
    } else if (ranking === 'POOR') {
        rating = `<span class="poor rat">POOR</span>`
    } else if (ranking === 'FAIR') {
        rating = `<span class="fair rat">FAIR</span>`
    } else {
        rating += `<span class="good rat">GOOD</span>`
        }
        return rating;
    }

function swellinfoRanking(ranking) {
    let rating = '';
    if ( ranking === 'redman_1bar') {
        rating = `<span class="redman1"></span>`
    } else if (ranking === 'redman_2bar') {
        rating = `<span class="redman2"></span>`
    } else if (ranking === 'redman_3bar') {
        rating = `<span class="redman3"></span>`
    } else if (ranking === 'redman_4bar') {
        rating = `<span class="redman4"></span>`
    } else if (ranking === 'redman_5bar') {
        rating = `<span class="redman5"></span>`
    } else if (ranking === 'redman_6bar') {
        rating = `<span class="redman6"></span>`
    } else if (ranking === 'blueman_bar1') {
        rating = `<span class="blueman1"></span>`
    } else if (ranking === 'blueman_bar2') {
        rating = `<span class="blueman2"></span>`
    } else if (ranking === 'blueman_bar3') {
        rating = `<span class="blueman3"></span>` 
    } else if (ranking === 'blueman_bar4') {
        rating = `<span class="blueman4"></span>` 
    } else if (ranking === 'blueman_bar5') {
        rating = `<span class="blueman5"></span>` 
    } else if (ranking === 'blueman_bar6') {
        rating = `<span class="blueman6"></span>`
    } else if (ranking === 'greenman_bar1') {
        rating = `<span class="greenman1"></span>`
    } else if (ranking === 'greenman_bar2') {
        rating = `<span class="greenman2"></span>`
    } else if (ranking === 'greenman_bar3') {
        rating = `<span class="greenman3"></span>`
    } else if (ranking === 'greenman_bar4') {
        rating = `<span class="greenman4"></span>`
    } else if (ranking === 'greenman_bar5') {
        rating = `<span class="greenman5"></span>` 
    } else if (ranking === 'greenman_bar6') {
        rating = `<span class="greenman6"></span>`
    }     
}