var SPREADSHEET_ID_AND_TAB = "1e7ePuKiSJho2Q0yhnFx4j0e5fycilkUBE0qNRior4os/zines";

$(document).ready(function () {
  
    $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
      
      /* TO VIEW CONSOLE.LOG RESULTS, RIGHT-CLICK AND INSPECT */
      console.log(data); // This gives me an ARRAY of every OBJECT...
      
      data.forEach(function (entry, index) { // For each object in data, read it as an ENTRY...
        
        console.log(entry); // This logs the OBJECT...
        
        if(index == 0) return;
        
        // class is an identifier
        let div = $(`<div class="item">
        <img alt="` + entry.alt + `" class="img" src="` + entry.image + `">
        <strong>` + entry.title + `</strong> by ` + entry.author + `
        <a target="_blank" href="` + entry.link + `">🔗 </a>
        <a target="_blank" href="` + entry.file + `">🔗</a>
        <p class="text">` + entry.description + `</p>
        </div>`)
        .appendTo("#content"); // # refers to div id
    
      });
    });  
  });