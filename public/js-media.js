// Verified Document ID and Table ID configuration
var GRIST_DOC_ID = "k9K537SAjQ9B";   
var GRIST_TABLE_ID = "Log"; 

$(document).ready(function () {
    // Target the secure public data download stream 
    var gristUrl = "https://docs.getgrist.com/api/docs/" + GRIST_DOC_ID + "/download/data?table=" + GRIST_TABLE_ID;

    $.getJSON(gristUrl, function (records) {
        console.log("Connection successful! Total rows downloaded:", records.length);
        
        // Wipe old content hooks to prevent stacking duplicates
        $("#content").empty();

        records.forEach(function (row) { 
            // Extract values directly based on physical column position
            var rowValues = Object.values(row);
            if (rowValues.length === 0) return; // Skip empty spacing row allocations

            /* 
              👉 QUICK CHECK: Adjust these layout numbers to match your sheet's column order!
              0 is your 1st column, 1 is your 2nd column, 2 is your 3rd column, etc.
            */
            var entry = {
                type:   rowValues[0] || '', // 1st column on the left
                date:   rowValues[1] || '', // 2nd column
                status: rowValues[2] || '', // 3rd column
                alt:    rowValues[3] || '', // 4th column
                image:  rowValues[4] || '', // 5th column
                link:   rowValues[5] || '', // 6th column
                title:  rowValues[6] || '', // 7th column
                review: rowValues[7] || ''  // 8th column
            };

            // Force ignore any trailing row blocks that are missing names
            if (!entry.title && !entry.type) return;

            // Generate your custom media log template block
            let div = $(`<div class="item">
              <div class="left">
                <p class="details">` + entry.type + ` <br> ` + entry.date + ` <br> <strong>status:</strong><br> ` + entry.status + `</p>
                <img alt="` + entry.alt + `" class="cover" src="` + entry.image + `">
              </div>
              <a class="titleLink" target="_blank" href="` + entry.link + `">` + entry.title + `</a>
              <br>
              <p class="text">` + entry.review + `</p>
            </div></div>`)
            .appendTo("#content"); 
        });
    }).fail(function(xhr, status, error) {
        console.error("Grist connection failed! Status:", status, "Error info:", error);
    });  
});
