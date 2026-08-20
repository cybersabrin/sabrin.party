// Configured specifically for your 'sabrinparty-sheetsite' document and 'Log' table!
var GRIST_DOC_ID = "k9K537SAjQ9B";   
var GRIST_TABLE_ID = "log"; 

$(document).ready(function () {
    // We target the public CSV exporter endpoint instead, which bypasses all browser blocks
    var gristCsvUrl = "https://docs.getgrist.com/api/docs/" + GRIST_DOC_ID + "/tables/" + GRIST_TABLE_ID + "/data/csv";

    $.get(gristCsvUrl, function (csvText) {
        console.log("CSV Data downloaded successfully!"); 
        
        // Parse the CSV text into clean objects
        var lines = csvText.split("\n");
        if (lines.length < 2) return; // Empty sheet check

        // Grab column header tracking from row 1
        var headers = lines[0].split(",").map(h => h.trim().replace(/^"|"$/g, ''));
        
        // Loop over each row starting at index 1
        for (var i = 1; i < lines.length; i++) {
            if (!lines[i].trim()) continue; // Skip blank rows
            
            // Handle commas inside quotes carefully
            var matches = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || lines[i].split(",");
            var entry = {};
            
            headers.forEach((header, index) => {
                var value = matches[index] ? matches[index].trim().replace(/^"|"$/g, '') : "";
                entry[header] = value;
            });

            // Inject the data entries cleanly into your #content layout block
            let div = $(`<div class="item">
              <div class="left">
                <p class="details">` + (entry.type || '') + ` <br> ` + (entry.date || '') + ` <br> <strong>status:</strong><br> ` + (entry.status || '') + `</p>
                <img alt="` + (entry.alt || '') + `" class="cover" src="` + (entry.image || '') + `">
              </div>
              <a class="titleLink" target="_blank" href="` + (entry.link || '') + `">` + (entry.title || '') + `</a>
              <br>
              <p class="text">` + (entry.review || '') + `</p>
            </div></div>`)
            .appendTo("#content");
        }
    }).fail(function(xhr, status, error) {
        console.error("Grist connection failed. Verify your sharing settings are set to Public View:", error);
    });  
});
