$(document).ready(function () {

  $.getJSON(
    "https://docs.getgrist.com/api/docs/k9K537SAjQ9B/tables/log/records",
    function (response) {

      console.log(response);

      response.records.forEach(function (record) {

        // Grist stores the actual row data inside `fields`
        const entry = record.fields;

        console.log(entry);

        let div = $(`
          <div class="item">
            <div class="left">
              <p class="details">
                ${entry.type}<br>
                ${entry.date}<br>
                <strong>status:</strong><br>
                ${entry.status}
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
              ${entry.title}
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
