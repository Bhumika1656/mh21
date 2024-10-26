document.addEventListener("DOMContentLoaded", function() {
    const courses = [
        {
            title: "Plumbing Basics",
            description: "Learn the fundamental skills required to become a professional plumber.",
            link: "course-details.html"
        },
        {
            title: "Carpentry",
            description: "Gain hands-on experience in woodworking and carpentry.",
            link: "course-details.html"
        },
        {
            title: "Electrical Wiring",
            description: "Understand the principles of electrical wiring and installation.",
            link: "course-details.html"
        }
    ];

    const coursesList = document.getElementById("courses-list");

    courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.className = "course-card";

        const courseTitle = document.createElement("h3");
        courseTitle.innerText = course.title;

        const courseDescription = document.createElement("p");
        courseDescription.innerText = course.description;

        const courseLink = document.createElement("a");
        courseLink.className = "btn";
        courseLink.href = course.link;
        courseLink.innerText = "Learn More";

        courseCard.appendChild(courseTitle);
        courseCard.appendChild(courseDescription);
        courseCard.appendChild(courseLink);

        coursesList.appendChild(courseCard);
    });
});