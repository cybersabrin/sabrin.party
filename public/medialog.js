$(document).ready(function () {

  $.getJSON(
    "https://docs.getgrist.com/api/docs/k9K537SAjQ9B/tables/Log/records",
    function (response) {

      console.log("Grist response:", response);

      response.records.sort(function (a, b) {

      const dateA = Number(a.fields.date) || 0;
      const dateB = Number(b.fields.date) || 0;

      // Different dates → newest first
      if (dateA !== dateB) {
        return dateB - dateA;
      }

      // Same date → most recently added first
      return Number(b.id) - Number(a.id);
    });


    console.log(
      "SORTED:",
      response.records.map(function (record) {
        return {
          id: record.id,
          title: record.fields.title,
          date: record.fields.date
        };
      })
    );

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