let additems = document.querySelector("#additems");
let listitems = document.querySelector('#listitems');
let submit = document.querySelector('#submit');


additems.addEventListener('submit',additem);
listitems.addEventListener('click',delitem);

function additem(e){
    e.preventDefault();
    let inputitem = document.querySelector("#inputitem").value;
     
    if(inputitem.trim() == '' ||  inputitem.trim() == null){
        alert("Please enter value");
        return flase;
    }else{
        document.querySelector('#inputitem').value ="";
    }

    let li = document.createElement('li');
    li.className = "list-group-item";

    let del = document.createElement('button');
   
    del.appendChild(document.createTextNode('-'));
    del.className = "btn-danger btn btnremove float-right delete";
    li.appendChild(document.createTextNode(inputitem));
    li.appendChild(del);


    listitems.appendChild(li);


}

function delitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure want to delete')){
            let li = e.target.parentNode;
            listitems.removeChild(li);
            document.getElementById('dlsuccess').innerHTML = "Item deleted successfuly";
            document.getElementById('dlsuccess').style.display = 'block';

            setTimeout(function(){
                document.getElementById('dlsuccess').style.display = 'none';
            },);
        }
    }
}

function togglebutton(ref,btnId){
    
    document.getElementById('submit').disabled = false;
}