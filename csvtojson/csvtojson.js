let csvToJson = require('convert-csv-to-json');

let fileInputName = 'pager_test.csv';
let fileOutputName = 'pager_test.json';

csvToJson.fieldDelimiter(',');
csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
