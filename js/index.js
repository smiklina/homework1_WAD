let posts = document.getElementById("postsBody");

//fetch("https://api.npoint.io/acfb3ed97b0b631ba062");
fetch("./database/posts.json")
  .then((res) => res.json())
  .then((json) => {
    json.map((data) => {
      console.log(data);
      postsBody.append(post_fun(data, data, data, data));
    });
  });

function post_fun({ body }, { image }, {likeNumber},{postId}) {
  let p = document.createElement("div");
  date = new Date().toLocaleString();
  p.innerHTML = `
    <div class="post">
        <div class="center">
            <div class="post_header">
                <div class="iconPost">
                </div>
                <p>${date}</p>
              </div>
              <div class="post_body">
                <p>${body}</p>
                <img src=${image} width="400px" height="300px">
                <p>${likeNumber} Likes
                <button v-on:click="like_post(${postId})">LIKE</button>
                </p>
              </div>
            </div>
    </div>
    `;
  return p;
}

function showDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

let app=Vue.createApp({
  data(){
    return{
      posts:[],
    }
  },
  mutations:{
    like_post: (state, {id}) => {
      state.postsList.forEach (post => {
          if(post.id == id){
              post.likes += 1
          }
      })
    },
    reset_likes: state => {
      state.postsList.forEach (post => {
        post.likes = 0;
    })
  },
  },
  methods: {
    like_post(){
      this.$posts.commit("like_post",{postId:this.id})
    },
    async mounted (){
        res.json=await fetch("./database/posts.json");
        const data= await res.json;
        this.posts=data;
        console.log (posts);
    }
  },
})
app.mount ('#app')