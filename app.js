console.log('welcome to notes app.');
showNotes();

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click" , function(e){

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];

    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    console.log(notesobj);
    showNotes();
})

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function(element, index) {
        html += `
        <div class="card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Notes ${index + 1}</h5>
          <p class="card-text">  ${element} </p>
          <button id="${index}" onclick="deleteNote(this.id)"  class="btn btn-primary">Delete</button>
        </div>
      </div> `;
    });

    let notesElm = document.getElementById('notes');
    if(notesobj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nathing to show! Use "Add a Notes" section above to add notes.`
    }
}

//Function to delete a notes
function deleteNote(index){
    console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];

    }else{
        notesobj = JSON.parse(notes);

    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}

let 