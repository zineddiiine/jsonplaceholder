document.getElementById("posts-container").innerHTML = ""

const getAllPostsByUser = (i) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${i}/posts`)
        .then((response) => {
            if(response.ok){
                return response.json()
            }
        })
        .then((posts) => {
            document.getElementById("posts-container").innerHTML = ""
            for (let post of posts) {
                document.getElementById("posts-container").innerHTML += `
                <div class="posts" id="posts">
                    <h1 class="title">${post.title}</h1>
                    <hr class="hr">
                    <p>${post.body}</p>
                </div>
                `
            }
        })
} 


const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if(response.ok){
                    return response.json()
                }else{
                    reject("Error with users request")
                }
            })
            .then((users) => {
                document.getElementById("users-container").innerHTML = ""
                    for (let user of users) {
                        let content = `
                            <div onClick="getAllPostsByUser(${user.id})" class="user-container" tabindex="0" id="${user.id}">
                                <h1>${user.name}</h1>
                                <address>${user.email}</address>
                            </div>
                        `
                        document.getElementById("users-container").innerHTML += content
                    }
                resolve()
            })
        
    })
}


const getAllPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => {
            for (let post of posts){
                let content = `
                <div class="posts">
                    <h1 class="title">${post.title}</h1>
                    <hr class="hr">
                    <p>${post.body}</p>
                </div>
                `
                document.getElementById("posts-container").innerHTML += content
            }
        })
}


getAllUsers()
    .then(getAllPosts())
    .catch((error) =>{
        console.log(error)
    })