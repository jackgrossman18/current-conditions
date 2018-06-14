// {
//     name: 'States Ave',
//     lat: 39.35929751441085,
//     lon: -74.41683490066856,
//     surfline_id: 5169,
//     msw_id: '390'
//     msw_slug: 'States-Avenue-Surf-Report',
//     swellinfo_id: 'NA',
//     swellinfo_slub: 'NA',
//     subregion: Mid-Atlantic,
// },

// {
//     name: '1st Street',
//     lat: 39.750,
//     lon: -73.750,
//     surfline_id: 2147,
//     msw_id: '391'
//     msw_slug: 'Ocean-City-NJ-Surf-Report',
//     swellinfo_id: 'NA',
//     swellinfo_slub: 'NA',
//     subregion: Mid-Atlantic,
// },

// {
//     name: '7th Street',
//     lat: 39.276101,
//     lon: -74.567085,
//     surfline_id: 5576,
//     msw_id: 'NA'
//     msw_slug: 'NA',
//     swellinfo_id: 207,
//     swellinfo_slub: 'county-line-malibu-ca',
//     subregion: Mid-Atlantic,
// }

const axios = require('axios')

var surfline = axios.get('http://api.surfline.com/v1/forecasts/2147')
.then((response) => {
    console.log(response.data.Analysis.generalCondition[0])
})

console.log(surfline)