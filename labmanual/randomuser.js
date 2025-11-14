const btn = document.getElementById("btn");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userImg = document.getElementById("userImg");

// Function to fetch user data
function getUser() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            // Set values on page
            userName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
            userEmail.textContent = user.email;
            userImg.src = user.picture.large;
        })
        .catch(error => {
            console.log("Error fetching user:", error);
            userName.textContent = "Unable to load user";
        });
}

// Load one user when page opens
getUser();

// Load new user on button click
btn.addEventListener("click", getUser);
