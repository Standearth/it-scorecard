
export const fetchGoogle = async () => {
    console.log(`fetching...`);
	const base= "https://docs.google.com";
	const post = `spreadsheets/u/1/d/1EOJYeXYld2HSUjVE-xMd86bR7N4hfEcuZSsvD0JC7d4&gid=0`;
	const url = `${base}/${post}`;

	try {		
		const response = await fetch(url);
		const text = await response.text();
		
		const parsed = csvToArray(text);
        return parsed;

	} catch (err) {
		throw new Error(err);
	}
};

function csvToArray(str, delimiter = "\t") {

    // slice from start of text to the first \n index
    // use split to create an array from string by delimiter
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

    // slice from \n index + 1 to the end of the text
    // use split to create an array of each csv value row
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    // Map the rows
    // split values from each row into an array
    // use headers.reduce to create an object
    // object properties derived from headers:values
    // the object passed as an element of the array
    const arr = rows.map(function (row) {
      const values = row.split(delimiter);
      const el = headers.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });    
    // return the array
    return arr;
  }