function ToDo(pTitle, pDetail, pPriority) {
    this.title= pTitle;
    this.detail = pDetail;
    this.priority = pPriority;
    this.completed = false;
  }
  var ClientToDos = [];  // don't really need this intermediate array, but if we want to allow
  // edits to existing ones, it would then be useful

  var ClientToDos = [];  // don't really need this intermediate array, but if we want to allow
  // edits to existing ones, it would then be useful

document.addEventListener("DOMContentLoaded", function (event) {

    // button event for adding a ToDo
    document.getElementById("submit").addEventListener("click", function () {
        var tTitle = document.getElementById("title").value;
        var tDetail = document.getElementById("detail").value;
        var tPriority = document.getElementById("priority").value;
        var oneToDo = new ToDo(tTitle, tDetail, tPriority);

         // using Fetch:   create request object
         const request = new Request('NewToDo', {
            method: 'POST',
            body: JSON.stringify(oneToDo),
            headers: new Headers({
                'Content-Type': 'application/json'
                })
            });

        // pass request object to `fetch()`
        fetch(request)                                 // wait for 200, 500, etc
            .then(resPromise1 => resPromise1.json())   // now wait for server data response
            
            .then(data =>   console.log("added new note" ),  // clear txt boxes
                document.getElementById("title").value = "",
                document.getElementById("detail").value= "",
                document.getElementById("priority").value= ""
            )
           // .then(data => console.log(data), document.location.href = "index.html#Show" )
            
            .catch(function (err) {
                console.log(err);
            });

        // $.ajax({
        //     url: '/NewToDo' ,
        //     method: 'POST',
        //     dataType: 'json',
        //     contentType: 'application/json',
        //     data: JSON.stringify(oneToDo),
        //     success: function (result) {
        //         console.log("added new note")
        //     }

        // });
});  // end of add button event

});