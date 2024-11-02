const reviews = [
    {
        name: "Joseph Jones",
        jobTitle: "Data Analyst",
        review: "Great team and projects to work on!",
        picture: "https://th.bing.com/th?id=OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" // Corrected image URL
    },
    {
        name: "Smith Peter",
        jobTitle: "Product Manager",
        review: "Amazing company culture!",
        picture: "https://th.bing.com/th?id=OIP.0Eq0sjsuS1d_KLs4pc2vTgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" // Corrected image URL
    },
    {
        name: "Jack Rowan",
        jobTitle: "Designer",
        review: "Loved the creative freedom!",
        picture: "https://th.bing.com/th/id/OIP.LtLk-vQkLJGggWTN032pPwHaLH?w=192&h=288&c=7&r=0&o=5&dpr=1.4&pid=1.7" // Corrected image URL
    },
    {
        name: "Jennifer",
        jobTitle: "Marketing Specialist",
        review: "Great opportunities for growth!",
        picture: "https://th.bing.com/th/id/OIP.88U_XTsYICEJKNBtXBG9gAHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" // Corrected image URL
    }
];

let currentIndex = 0;
let reviewsList = document.getElementById('reviewsList');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

function displayReview(index) {
    reviewsList.innerHTML = '';
    const review = reviews[index];
    const li = document.createElement('li');

    // Correctly formatted HTML inside the template literal
    li.innerHTML = `
        <img src="${review.picture}" alt="${review.name}">
        <strong>${review.name}</strong>
        <em>${review.jobTitle}</em>
        <p>${review.review}</p>
    `;

    reviewsList.appendChild(li);
}

function updateButtons() {
    prevBtn.disabled = currentIndex === 0; // Disable if at the first review
    nextBtn.disabled = currentIndex === reviews.length - 1; // Disable if at the last review
}

displayReview(currentIndex);
updateButtons();

prevBtn.onclick = function () {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    displayReview(currentIndex);
    updateButtons();
};

nextBtn.onclick = function () {
    currentIndex = (currentIndex + 1) % reviews.length;
    displayReview(currentIndex);
    updateButtons();
};
s