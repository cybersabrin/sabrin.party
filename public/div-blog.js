var SPREADSHEET_ID_AND_TAB = "1e7ePuKiSJho2Q0yhnFx4j0e5fycilkUBE0qNRior4os/journal";

$(document).ready(function () {
  
    $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
      
      /* TO VIEW CONSOLE.LOG RESULTS, RIGHT-CLICK AND INSPECT */
      console.log(data); // This gives me an ARRAY of every OBJECT...
      
      data.forEach(function (entry, index) { // For each object in data, read it as an ENTRY...
        
        console.log(entry); // This logs the OBJECT...
        
        if(index == 0) return;
        
        // class is an identifier
        let div = $(`<div class="item">
        <button type="button" class="collapsible"><time>` + entry.date + `</time>: ` + entry.title + `</button>
        <div class="blogcontent">
            <p>` + entry.content + `</p>
        </div>
        <br>
        <br>
          </div>`)
        .appendTo("#content"); // # refers to div id
  
      });
    });  
  });
  