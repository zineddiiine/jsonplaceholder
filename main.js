document.getElementById("users-container").innerHTML = "ss"

const getAllUsers = () => {
    
    let request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send()
    request.onload = () => {
        if (request.status >= 200 && request.status < 300){
            let usersid = [] 
            let users = request.response
            document.getElementById("users-container").innerHTML = ""
            for (let user of users) {
                document.getElementById("users-container").innerHTML += `
                    <div onClick="funById(${user.id})" class="user-container" tabindex="0" id="${user.id}">
                        <h1>${user.name}</h1>
                        <address>${user.email}</address>
                    </div>
                `
                usersid.push(user.id)
            }
            
        }else{
            alert("Error")
        }
    }
}

getAllUsers()

const funById = (i) => {


    const getAllPosts = () => {
        let request = new XMLHttpRequest()
        request.open("GET", `https://jsonplaceholder.typicode.com/users/${i}/posts`)
        request.responseType = "json"
        request.send()
        request.onload = () => {
            if (request.status >= 200 && request.status < 300){
                let posts = request.response
                document.getElementById("posts-container").innerHTML = ""
                for (let post of posts) {
                    document.getElementById("posts-container").innerHTML +=`
                    <div class="posts" id="posts">
                        <h1 class="title">${post.title}</h1>
                        <hr class="hr">
                        <p>${post.body}</p>
                    </div>
                    `
                }
            }else {
                alert("Error")
            }
        }
    }
    getAllPosts()
}


