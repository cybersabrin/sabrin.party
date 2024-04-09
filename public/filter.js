var filterButtons = document.querySelectorAll(".btn");
    filterButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var filterValue = this.getAttribute("data-filter");
            var reviews = document.getElementsByClassName("log");
            for (var i = 0; i < reviews.length; i++) {
                if (filterValue === "all" || reviews[i].classList.contains(filterValue)) {
                    reviews[i].style.display = "block";
                } else {
                    reviews[i].style.display = "none";
                }
            }
        });
    });