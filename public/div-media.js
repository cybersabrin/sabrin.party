var SPREADSHEET_ID_AND_TAB = "1e7ePuKiSJho2Q0yhnFx4j0e5fycilkUBE0qNRior4os/log";

$(document).ready(function () {
  
    $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
      
      /* TO VIEW CONSOLE.LOG RESULTS, RIGHT-CLICK AND INSPECT */
      console.log(data); // This gives me an ARRAY of every OBJECT...
      
      data.forEach(function (entry, index) { // For each object in data, read it as an ENTRY...
        
        console.log(entry); // This logs the OBJECT...
        
        if(index == 0) return;
        
        // class is an identifier
        let div = $(`<div class="item">
          <div>` + entry.type + `</div>
            <br>
            <p style="margin: 0;"><strong>date: </strong>` + entry.date + `</p>
            <strong>status:</strong> ` + entry.status + `
            <p>` + entry.title + `</p>
            <a class="libLink" target="_blank" href="` + entry.link + `"><img alt="` + entry.alt + `" class=cover src=/pics/library/` + entry.image + `.png></a>
            <p class="text">` + entry.review + `</p>
          </div>`)
        .appendTo("#content"); // # refers to div id
    
      });
    });  
  });