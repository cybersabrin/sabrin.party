$(document).ready(function () {

  $.getJSON(
    "https://docs.getgrist.com/api/docs/k9K537SAjQ9B/tables/Log/records?sort=-date,manualSort",
    function (response) {

      console.log("Grist response:", response);

      response.records.forEach(function (record) {

        const entry = record.fields;

        console.log("Entry:", entry);

        const date = entry.date
          ? new Date(entry.date * 1000).toLocaleDateString("en-US", {
              timeZone: "UTC"
            })
          : "";

        const div = $(`
          <div class="item">

            <div class="left">

              <p class="details">
                ${entry.type || ""}<br>
                ${date}<br>
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
              rel="noopener noreferrer"
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
