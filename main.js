const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05"
    }
];


let container = document.getElementById('container');
let div, postInformation;

function creaPost(){
    div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `<div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${postInformation.author.image}" alt="${postInformation.author.name}">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${postInformation.author.name}</div>
            <div class="post-meta__time">${postInformation.created}</div>
        </div>                    
    </div>
    </div>
    <div class="post__text">${postInformation.content}</div>
            <div class="post__image">
                <img src="${postInformation.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button"  data-postid=${postInformation.id}>
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${postInformation.id}" class="js-likes-counter">${postInformation.likes}</b> persone
                    </div>
                </div> 
            </div>  `;
    return div;
};


for(let i = 0; i < posts.length; i++){
    postInformation = posts[i];
    console.log(postInformation);
    creaPost(postInformation);
    container.appendChild(div);
}

//MILESTONE 3
posts.forEach(elem => {
    let numeroMiPiace = elem.likes;
    
    return numeroMiPiace;
});

let miPiace = document.getElementsByClassName('js-like-button');

for (let i=0; i<miPiace.length; i++){
    
    miPiace[i].addEventListener('click', function(){
        const postId = this.dataset.postid;
        const likes = document.getElementById(`like-counter-${postId}`);
        const likesNumber = parseInt(likes.innerText);
        likes.innerText = likesNumber+1;
        miPiace[i] = miPiace[i].classList.add('like-button--liked');
        miPiace[i].addEventListener('click', function(){
            miPiace[i] = miPiace[i].classList.remove('like-button--liked');
            likes.innerText = likesNumber;
        });
        
    });
}




