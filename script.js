

const list =  document.getElementById('list');
const button = document.getElementById('addItem');
button.addEventListener('click', function(){
    let item = document.createElement('li');    
    item.innerHTML = "item "+list.childElementCount;
    list.appendChild(item);
})