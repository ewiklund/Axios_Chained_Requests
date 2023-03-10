const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
	return axios.get(url);
};
const printPlanets = ({data}) => {
	console.log(data);
	for(let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next)

};
fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
	console.log("ERROR!!", err);

});
// Other tests using promises
async function greet() {
	return "HELLO!!!";
}
greet().then((val) => {
	console.log("PROMISE RESOLVED WITH: ", val);
});

async function add(x, y) {
	if(typeof x !== 'number' || typeof y !== 'number') {
		throw "X and Y must be numbers!";
	}
	return x + y;
}
add('e', 'r').then((val) => {
	console.log("PROMISE RESOLVED WITH: ", val);
})
.catch((err) => {
	console.log("PROMISE REJECTED WITH: ", err);
});
