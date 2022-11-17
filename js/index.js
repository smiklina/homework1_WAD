let posts = document.getElementById("postsBody");

fetch("https://api.npoint.io/504ea3d9782e5905abef")
//fetch ("./database/posts.json")    
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            console.log(data);
            postsBody.append(post_fun(data, data.image));
        })
    })

function post_fun({body}, {image}) {
    let p = document.createElement('div');
    date = new Date().toLocaleString()
    p.innerHTML = `
    <div class="post">
        <div class="center">
            <div class="post_header">
                <div class="iconPost">
                  <img src=${image}>
                </div>
                <p>${date}</p>
              </div>
              <div class="post_body">
                <p>${body}</p>
              </div>
            </div>
    </div>
    `;
    return p;
}

function showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

