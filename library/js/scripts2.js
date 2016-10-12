$(document).ready(function() {

	// Define spreadsheet URL.
	var mySpreadsheet = 'https://docs.google.com/spreadsheet/ccc?key=0AsEeupsrTeHwdHBRcUZ2dGxiSjVCNHVWVkdqMGV5Q3c&usp=drive_web#gid=0';
	
	// Compile the Handlebars template for HR leaders.
	var HRTemplate = Handlebars.compile($('#hr-template').html());
	
	// Load top five HR leaders.
	$('#hr').sheetrock({
	  url: mySpreadsheet,
	  sql: "select A,B,C,D,E,F order by A desc",
	  chunkSize: 1000,
	  headersOff: true,
	  rowHandler: HRTemplate,
	  rowGroups: false
	});
  

});


