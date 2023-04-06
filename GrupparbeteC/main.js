let bought;
let bought_serialized = JSON.stringify(bought);
/*function buyFunction(clickedValue) {
    bought_serialized=clickedValue;
   console.log(clickedValue);
   console.log(bought_serialized);
   localStorage.setItem("chosen", bought_serialized);
   window.open("order.html");
   
}*/

function buyFunction(value) {
    bought_serialized=value;
    const ware = localStorage.getItem(value);
    const pic = localStorage.getItem("Image"+value);
    //bought_serialized=document.querySelector(".btn").value;
   //console.log(document.querySelector(".btn").value);
   console.log(bought_serialized);
   console.log(ware);
   console.log(pic);
   localStorage.setItem("chosen", bought_serialized);
   localStorage.setItem("kopt", ware)
    localStorage.setItem("koptBild", pic)
   window.open("order.html");
   
}

const postSection = document.querySelector("#posts");
const postTemplate = document.querySelector("#post-template");

getData();

async function getData(){
    const postStream = await fetch("https://fakestoreapi.com/products");
    const posts = await postStream.json();
    let i = 0;

    console.log(posts);

    posts.forEach(post => {
        i++;
        if(i<21){
            const id = post.id;
            const title = post.title;
            const description = post.description;
            const image = post.image;
            const price = post.price;
            //const rating = post.rating;
            const categorys = post.category;

            const newPost = document.importNode(postTemplate.content, true);
            const postId = newPost.querySelector(".id");
            const postTitle = newPost.querySelector(".title");
            const postScript = newPost.querySelector(".script");
            const postImg = newPost.querySelector(".post_img");
            const postPrice = newPost.querySelector(".price");
            const postCat = newPost.querySelector(".cat");
            const butt = newPost.querySelector(".btn");
            //const postRating = newPost.querySelector(".rating")

            postId.innerText = "Item nr: " + id;
            postTitle.innerText = title;
            postScript.innerText = description;
            postImg.src = image;
            postPrice.innerText = "Price: " + price + "$";
            postCat.innerText = "Category: " + categorys;
            butt.value = id;
            //butt.innerText = id;
            //postRating.innerText = rating;
            postSection.appendChild(newPost);
            let total = `${title+"   ||   " +description +"   ||   " +price + "$"}`
            let description_serialized = JSON.stringify(total);
            //let image_serializes = JSON.stringify(image);
            localStorage.setItem("Image"+i, image);
            localStorage.setItem(i, description_serialized);

        
        }
    })
}


//fetch("https://webacademy.se/fakestore/").then(res => res.json()).then(json=> console.log(JSON));




