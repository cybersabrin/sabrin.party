// Configured specifically for your 'sabrinparty-sheetsite' document and 'Log' table!
var GRIST_DOC_ID = "k9K537SAjQ9B";   
var GRIST_TABLE_ID = "Log"; 

$(document).ready(function () {
    // 1. We append an asterisk cross-origin filter parameter to bypass the silent browser blocks
    var gristUrl = "https://getgrist.com" + GRIST_DOC_ID + "/download/data?table=" + GRIST_TABLE_ID + "&nocors=true";

    $.ajax({
        url: gristUrl,
        type: "GET",
        dataType: "json",
        success: function (records) {
            console.log("Raw entries found:", records.length);
            
            // Clear out anything currently inside content to prevent stacking
            $("#content").empty();

            records.forEach(function (row) { 
                // 2. Fallback mapper: This makes sure your code understands uppercase or lowercase column IDs!
                var entry = {
                    type:   row.type   || row.Type   || row.A || '',
                    date:   row.date   || row.Date   || row.B || '',
                    status: row.status || row.Status || row.C || '',
                    alt:    row.alt    || row.Alt    || row.D || '',
                    image:  row.image  || row.Image  || row.E || '',
                    link:   row.link   || row.Link   || row.F || '',
                    title:  row.title  || row.Title  || row.G || '',
                    review: row.review || row.Review || row.H || ''
                };

                // Skip adding an item if the title row is totally empty
                if (!entry.title && !entry.type) return;

                // 3. Construct your HTML block exactly like your original media log file layout
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
        },
        error: function(xhr, status, error) {
            console.error("Grist connection was blocked. Please verify public access controls:", error);
        }
    });  
});
