// all element capture
const search = document.getElementById("search");



search.addEventListener("click", () => {
    const wrapper = document.getElementById("wrapper");
    const user_name = document.getElementById("user_name").value;
    console.log(user_name);


    if(user_name != ""){
        // wrapper
        wrapper.style.display = "none";
        // profile ui
        document.getElementById("profile_ui").classList.add("active");

        fetch(`https://api.github.com/users/${user_name}`)
        .then(response => response.json().then(data=> {
            console.log(data);

            // all data fields
            document.getElementById("github_name").innerHTML = data.name;
            document.getElementById("bio").innerHTML = data.bio;
            document.getElementById("location").innerHTML = `<i class="fa-solid fa-location-arrow"></i> ${data.location}`;
            document.getElementById("followers").innerHTML = `${data.followers} Follwers`;
            document.getElementById("following").innerHTML = `${data.following} Following`;
            document.getElementById("repo").innerHTML = `${data.public_repos} Repositories`;
            document.getElementById("link").innerHTML = `
                <a class="link" href="https://${data.blog}" target="_blank"><i class="fa-solid fa-globe"></i></a>
                <a class="link" href="${data.html_url}" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a class="link" href="https://twitter.com/${data.twitter_username}" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            `
            document.getElementById("avatar").innerHTML = `<img src="${data.avatar_url}" alt="">`;
        }))
    }else{
        alert("Please Enter github username!!!");
    }

    


    
})