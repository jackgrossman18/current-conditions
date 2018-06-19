const axios = require('axios')

var siStuff = []
let siData = axios.get('https://www.swellinfo.com/forecast_xy.xml.php?map=wna_midat')
    .then((response) => {
        siStuff.push(response)
});
console.log(siStuff)