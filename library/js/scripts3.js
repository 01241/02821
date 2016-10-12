$(document).ready(function() {

	// Define spreadsheet URL.
	var mySpreadsheet = 'https://docs.google.com/spreadsheet/ccc?key=0AsEeupsrTeHwdFBDS1ZieTlSQV9udmFCZW5YRG9nb0E&usp=drive_web#gid=0';
	
	// Compile the Handlebars template for HR leaders.
	var HRTemplate = Handlebars.compile($('#hr-template').html());
	
	// Load top five HR leaders.
	$('#hr').sheetrock({
	  url: mySpreadsheet,
	  sql: "select B,D,E order by E desc",
	  chunkSize: 1000,
	  headersOff: true,
	  rowHandler: HRTemplate,
	  rowGroups: false
	});
  

});


