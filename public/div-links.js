var SPREADSHEET_ID_AND_TAB = "1e7ePuKiSJho2Q0yhnFx4j0e5fycilkUBE0qNRior4os/links";

$(document).ready(function () {
  
    $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
      
      /* TO VIEW CONSOLE.LOG RESULTS, RIGHT-CLICK AND INSPECT */
      console.log(data); // This gives me an ARRAY of every OBJECT...
      
      data.forEach(function (entry, index) { // For each object in data, read it as an ENTRY...
        
        console.log(entry); // This logs the OBJECT...
        
        if(index == 0) return;
        
        // class is an identifier
        let div = $(`<div class="item" style="margin-bottom: 20px;">
          <div> ` + entry.category + ` <a href="` + entry.link + `" target="_blank">` + entry.title + `</a></div>
            <br>
          </div>`)
        .appendTo("#content"); // # refers to div id
    
      });
    });  
  });