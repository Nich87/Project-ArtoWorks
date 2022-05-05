const chunk = (array, size) =>  array.reduce((arr, _, i) => (i % size ? arr : [...arr, array.slice(i, i + size)]),[]);
module.exports = chunk;
