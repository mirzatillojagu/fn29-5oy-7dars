const name = document.querySelector('#name');
const age = document.querySelector('#age');
const fam = document.querySelector('#fam');
const userimg = document.querySelector('#userimg')
const click = document.querySelector('#click')

function card(data){
    return`
       <div class="card">
         <h3>${data.name}</3>
         <p>${data.age}</p>
         <p>${data.fam}</p>
         <img src="${data.userimg}" alt="">
       </div>
    `
}

button && button.addEventListener('click', function(){
    let data = {
        userrasim: "https://picsum.photos/200/300",
    }

    let card =  card(data)
    block.innerHTML += card;
});