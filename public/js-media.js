var GRIST_DOC_ID = "k9K537SAjQ9Bxyg3mW8xF8";  
var GRIST_TABLE_ID = "log";                  
var GRIST_API_KEY = "8816faa83d198d6974e793d4d2cff1b9b2bc7100"; 

$(document).ready(function () {
  
    var gristUrl = "https://docs.getgrist.com/api/docs/" + GRIST_DOC_ID + "/tables/" + GRIST_TABLE_ID + "/records";

    $.ajax({
      url: gristUrl,
      type: "GET",
      headers: {
        "Authorization": "Bearer " + GRIST_API_KEY
      },
      success: function (response) {

        console.log(response.records); 
        
        response.records.forEach(function (record) { 

          let entry = record.fields;
          console.log(entry); 
          
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
      },
      error: function (xhr, status, error) {
        console.error("Failed to fetch data from Grist:", error);
      }
    });  
});
