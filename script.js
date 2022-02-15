const btn=document.querySelector('button');
const input=document.querySelector('input');
const edit=document.getElementById('edit');
btn.addEventListener("click",(e)=>{
    btn.innerText="ADD";
    e.preventDefault();
    if(input.value!=""){
        const todoText=input.value;
        const todo = `<li>${todoText}<span><i class="far fa-check-circle"></i><i class="fas fa-edit" id="edit"></i><i id="trash" class="fas fa-trash-alt"></i></span></li>`;

        $('ol').append(todo);
        input.value="";
    }
})
$('ol').on('click','span',function () {
  
    $(this).parent().toggleClass('completed');
})

$('ol').on('click','#trash',function (event) {
    
    $(this).parent().parent().fadeOut(800,function () {
        $(this).remove();
    })

    event.stopPropagation(); //to stop event bubbeling
})
// edit.addEventListener("click",(e)=>{
//     btn.innerText="ADD";
//     e.preventDefault();
//     const item= e.target.parentNode;
//     console.log(item);
//     // const text=e.parentNode.firstChild.textContent;
//     // console.log(text); 
// })
let state = 0;
let liObj;
$('ol').on('click','#edit',function (event) {
    btn.innerText="Update";
    state=1;
    liObj= event.target.parentNode.parentNode.innerText;
    // console.log(liObj);
    input.value=liObj;
    if(state === 1) {
        liObj.firstChild.innerText = input.value;
        btn.innerText = "Add"
        inp.value = ""
        state = 0;
    }
    event.stopPropagation(); //to stop event bubbeling
})

// $('ol').on('click','#edit',function (event) {
//     btn.innerText="Update";
    
//     const prevText=$(this).parent().parent();
//     console.log(prevText[0].innerText);
//     $('input').val(prevText[0].innerText);
//     const inputText=$('input').val();
//     prevText[0].innerHTML=`${inputText}<span><i class="far fa-check-circle"></i><i class="fas fa-edit" id="edit"></i><i id="trash" class="fas fa-trash-alt"></i></span>`;
//     event.stopPropagation(); //to stop event bubbeling
// })

$('input[type="text"]').keypress(function (event) {
    if (event.which === 13 &&$(this).val()!="") {
        btn.innerText="ADD";
        const todoText = $(this).val();

        const todo = `<li>${todoText}<span><i class="far fa-check-circle"></i><i class="fas fa-edit" id="edit"></i><i id="trash" class="fas fa-trash-alt"></i></span></li>`;

        $('ol').append(todo);
        $(this).val("");
    }
});