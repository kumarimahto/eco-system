document.getElementById("addActivity").addEventListener("click", function() {
    const activity = document.getElementById("activity").value;
    window.location.href = activity + ".html";
});
document.getElementById("addActivity").addEventListener("click", function() {
    let activity = document.getElementById("activity").value;
    
    if (activity === "saved-electricity") {
        window.location.href = "electricity.html"; // Redirect to electricity page
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const addActivityBtn = document.getElementById("addActivity");
    const activitySelect = document.getElementById("activity");

    addActivityBtn.addEventListener("click", function () {
        const selectedActivity = activitySelect.value;

        if (selectedActivity === "saved-water") {
            window.location.href = "water.html";
        } else if (selectedActivity === "saved-electricity") {
            window.location.href = "electricity.html";
        } else if (selectedActivity === "cycling") {
            window.location.href = "cycling.html";
        } else if (selectedActivity === "no-plastic") {
            window.location.href = "no-plastic.html";
        }
    });
});


