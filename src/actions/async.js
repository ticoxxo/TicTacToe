const key = "http://api.openweathermap.org/data/2.5/forecast?lat=25.9&lon=-108.98&APPID=763192a8316cb65a5fe35b6a9ea5880e"
const keyo = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=763192a8316cb65a5fe35b6a9ea5880e"
console.log(keyo)
export function getData(){
    return function(dispatch) {
      return fetch(key)
        .then(response => response.json())
        .then(json => {
        //return { type: "DATA_LOADED",payload:json };
          dispatch ({ type:"DATA_LOADED",payload:json})
    });
};
}