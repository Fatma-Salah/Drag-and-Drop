let input = document.querySelector('.input input');
let btn = document.querySelector('.input button');
let boxs = document.querySelectorAll('.box');
let drag =null;
btn.onclick = function(){
    if(input.value){
        boxs[0].innerHTML += `<p class="item" draggable="true"> ${input.value} </p>`
        input.value ='';

    }
    startDrag();
}

function  startDrag(){
    let items = document.querySelectorAll('.item');
    items.forEach((item)=>{
        item.addEventListener('dragstart' , ()=>{
         drag = item;
         item.style.opacity = 0.8;
        });
        item.addEventListener('dragend' , ()=>{
         drag = null;
         item.style.opacity = 1;
        });

        boxs.forEach((box)=>{
            box.addEventListener('dragover', function(e){
                e.preventDefault();
               box.style.background = '#4caf50';
               box.style.color = '#fff';
            });
            box.addEventListener('dragleave', function(e){
          
               box.style.background = 'white';
               box.style.color = '#000';
            });
            box.addEventListener('drop', function(){
          box.append(drag);
            });
        });


    });
}