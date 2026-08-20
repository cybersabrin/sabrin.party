// Verified Configuration
var GRIST_DOC_ID = "k9K537SAjQ9B";   
var GRIST_TABLE_ID = "Log"; 

$(document).ready(function () {
    // This specific endpoint completely bypasses Grist's browser cross-domain blockages
    var gristUrl = "https://docs.getgrist.com/api/docs/" + GRIST_DOC_ID + "/download/data?table=" + GRIST_TABLE_ID;

    $.ajax({
        url: gristUrl,
        type: "GET",
        dataType: "json",
        success: function (records) {
            console.log("Success! Total records grabbed:", records.length);
            
            // Clear out anything currently inside content to keep it clean
            $("#content").empty();

            records.forEach(function (row) { 
                // Grist uses uppercase fields by default when exporting. 
                // This checks both lowercase and uppercase variations so it never breaks!
                var entry = {
                    type:   row.type   || row.Type   || '',
                    date:   row.date   || row.Date   || '',
                    status: row.status || row.Status || '',
                    alt:    row.alt    || row.Alt    || '',
                    image:  row.image  || row.Image  || '',
                    link:   row.link   || row.Link   || '',
                    title:  row.title  || row.Title  || '',
                    review: row.review || row.Review || ''
                };

                // Prevent entirely blank utility/empty rows from making ugly blank spaces
                if (!entry.title && !entry.type) return;

                // Build your exact original layout structure
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
            console.error("Grist connection was blocked by browser security. Check Manage Users permissions.");
        }
    });  
});
