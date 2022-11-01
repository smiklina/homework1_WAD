let posts = document.getElementById("postsBody");

fetch("https://api.npoint.io/acfb3ed97b0b631ba062")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            console.log(data);
            postsBody.append(post_fun(data));
        })
    })

function post_fun({body,image}) {
    let p = document.createElement('div');
    date = new Date().toLocaleString()
    p.innerHTML = `
    <div class="post">
        <div class="center">

            <div class="post_header">
                <div class="iconPost">
                  <img src="media/icon3.png">
                </div>
                <p>${date}</p>
              </div>
              <div class="post_body">
                <img src="media/dog.jpg" class="post_image">
                <p>${body}</p>
              </div>

            </div>
    </div>
    `
    return p;
}