// let res = document.querySelector(".result")
// let users = document.createElement("div")
// let posts = document.createElement("div")
// users.className = "users"
// posts.className = "posts"

// function request ()
// {
//     let x = new XMLHttpRequest()
//     x.open("GET", "https://jsonplaceholder.typicode.com/users")
//     x.send()
//     x.onload = function ()
//     {
//         if (this.readyState === 4 && this.status === 200)
//         {
//             let o = JSON.parse(this.responseText)
//             for (let index = 0; index < o.length; index++)
//             {
//                 let allUsers = document.createElement("div")
//                 allUsers.setAttribute("id", o[ index ].id)
//                 allUsers.addEventListener("click", mo)
//                 allUsers.className = "all_users"
//                 let p1 = document.createElement("p")
//                 let p2 = document.createElement("p")
//                 p1.appendChild(document.createTextNode(o[ index ].name))
//                 p2.appendChild(document.createTextNode(o[ index ].email))
//                 allUsers.appendChild(p1)
//                 allUsers.appendChild(p2)
//                 users.appendChild(allUsers)
//                 res.appendChild(users)
//             }
//         }
//     }
// }
// function mo(){
//     posts.innerHTML = ""
//     let url = `https://jsonplaceholder.typicode.com/posts?userId=${this.id}`
//     let x = new XMLHttpRequest()
//     x.open("GET", url)
//     x.send()
//     x.onload = function ()
//     {
//         if (this.readyState === 4 && this.status === 200)
//         {
//             let o = JSON.parse(this.responseText)
//             for (let index = 0; index < o.length; index++)
//             {
//                 let all_posts = document.createElement("div")
//                 all_posts.className = "all_posts"
//                 let p1 = document.createElement("p")
//                 let p2 = document.createElement("p")
//                 p1.appendChild(document.createTextNode(o[ index ].title))
//                 p2.appendChild(document.createTextNode(o[ index ].body))
//                 all_posts.appendChild(p1)
//                 all_posts.appendChild(p2)
//                 posts.appendChild(all_posts)
//                 res.appendChild(posts)
//             }
//         }
//     }
// }
// request()


//_________________________________________________________________________

let result = document.querySelector(".result .users")
let test = (t) =>
{
    return new Promise((res, rej) =>
    {
        let x = new XMLHttpRequest()
        x.onload = function ()
        {
            if (this.readyState === 4 && this.status === 200)
            {
                res(JSON.parse(this.responseText))
            } else
            {
                rej(Error("bad"))
            }
        }
        x.open("GET", t)
        x.send()
    })
}
test("https://jsonplaceholder.typicode.com/users").then(
    (res) =>
    {
        for (let i = 0; i <= res.length; i++)
        {
        result.innerHTML += 
        `<div class="all_users" id='${res[i].id}' onclick='m(${res[i].id})'>
            <p>${res[i].name}</p>
            <p>${res[i].email}</p>
        </div>`
        }
    }
).catch((rej) => console.log(rej))

let posts = document.querySelector(".result .posts")
function m(e){
    let test =  (z)=>{
        return new Promise((res, rej) =>
        {
            let x = new XMLHttpRequest()
            x.onload = function ()
            {
                if (this.readyState === 4 && this.status === 200)
                {
                    res(JSON.parse(this.responseText))
                } else
                {
                    rej(Error("bad"))
                }
            }
            x.open("GET", z)
            x.send()
        })
    }
    test(`https://jsonplaceholder.typicode.com/posts?userId=${e}`).then(
        (res)=>{
            posts.innerHTML = ""
            for(let i = 0; i <= res.length; i++){
                posts.innerHTML += 
                `<div class="all_posts">
                    <p>${res[i].title}</p>
                    <p>${res[i].body}</p>
                </div>`
            }
        }
    ).catch((rej) => console.log(rej))
}
