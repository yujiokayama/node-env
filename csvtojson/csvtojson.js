let csvToJson = require('convert-csv-to-json');

let fileInputName = 'test.csv';
let fileOutputName = 'test.json';

csvToJson.fieldDelimiter(',');
csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
