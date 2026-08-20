$(document).ready(function () {

  $.getJSON(
    "https://docs.getgrist.com/api/docs/k9K537SAjQ9B/tables/Log/records",
    function (response) {

      console.log("Grist response:", response);

      response.records.slice().reverse().forEach(function (record) {

        const entry = record.fields;

        console.log("Entry:", entry);

        let div = $(`
          <div class="item">
            <div class="left">
              <p class="details">
                ${entry.type || ""}<br>
                ${entry.date ? new Date(entry.date * 1000).toLocaleDateString("en-US") : ""}<br>
                <strong>status:</strong><br>
                ${entry.status || ""}
              </p>

              <img
                alt="${entry.alt || ""}"
                class="cover"
                src="${entry.image || ""}"
              >
            </div>

            <a
              class="titleLink"
              target="_blank"
              href="${entry.link || "#"}"
            >
              ${entry.title || ""}
            </a>

            <br>

            <p class="text">
              ${entry.review || ""}
            </p>
          </div>
        `);

        div.appendTo("#content");
      });

    }
  );

});
