const axios = require('axios')

var mswConditions = 'https://magicseaweed.com/api/0be72c50101bffb095ef01df8958a606/forecast/?spot_id=391'

var supDawg = JSON.stringify(mswConditions)


// var getStuff = function(url, data )

// axios.get('https://magicseaweed.com/api/0be72c50101bffb095ef01df8958a606/forecast/?spot_id=391')
// .then((response) => {
//     console.log(response)
// })

let windData = axios.get('https://magicseaweed.com/api/0be72c50101bffb095ef01df8958a606/forecast/?spot_id=391')
    .then((response) => {
        console.log(response.data[0])
        let firstData = response.data[0]
        arr.push(firstData)
    })