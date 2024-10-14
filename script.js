document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    // Get the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // JavaScript months are zero-based, so add 1
    const currentDay = currentDate.getDate();

    // Check if the inputs are valid
    if (!day || !month || !year) {
        alert("Please fill in all fields");
        return;
    }

    if (day < 1 || day > 31) {
        alert("Please enter a valid day (1-31).");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Please enter a valid month (1-12).");
        return;
    }

    if (year < 1800 || year > currentYear) {
        alert("Please enter a valid year.");
        return;
    }

    // Calculate the age
    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;

    // Adjust the calculation if the birthday hasn't occurred this year yet
    if (ageDays < 0) {
        ageMonths--;
        ageDays += 30; // Approximate month length
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Update the results in the DOM
    document.querySelector(".result p:nth-child(1) span").textContent = ageYears;
    document.querySelector(".result p:nth-child(2) span").textContent = ageMonths;
    document.querySelector(".result p:nth-child(3) span").textContent = ageDays;
});
