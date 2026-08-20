var GRIST_DOC_ID = "k9K537SAjQ9Bxyg3mW8xF8";  
var GRIST_TABLE_ID = "log";                  

$(document).ready(function () {
    // Note the /download/ endpoint. This bypasses CORS for public files!
    var gristUrl = "https://getgrist.com" + GRIST_DOC_ID + "/download/data?table=" + GRIST_TABLE_ID;

    $.getJSON(gristUrl, function (records) {
        console.log(records); 
        
        records.forEach(function (entry) { 
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
        });
    }).fail(function(xhr, status, error) {
        console.error("Failed to fetch public Grist data:", error);
    });  
});