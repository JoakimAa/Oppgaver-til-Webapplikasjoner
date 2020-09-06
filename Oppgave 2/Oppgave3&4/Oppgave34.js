window.onload = startup;

var todoArray = []

function startup() {

    let modal = document.getElementById("newTodo");

    var todoDescription = document.getElementById("inpDescription");
    todoDescription.addEventListener("keydown", function(e) {
        var maxChar = document.getElementById("inpDescription").maxLength;
        var todoDescriptionLength = document.getElementById("inpDescription").value.length;

        if (todoDescriptionLength >= maxChar){
            e.preventDefault();
        } 
        else{
            var charsLeft = maxChar - todoDescriptionLength - 1;
            document.getElementById("todoTextDescription").innerHTML = "Description (" + charsLeft + " characters remaining)";
        }
    });

    document.getElementById("bTodo").addEventListener("click", function() {
        modal.style.display = "block"
    });

    document.getElementById("bCreate").addEventListener("click", function(){
        var todoTitle = document.getElementById("inpTodoTitle").value;
        var todoDescriptionValue = document.getElementById("inpDescription").value;
        var todoAuthor = document.getElementById("inpAuthor").value;
        var todoCard = {title:todoTitle, description:todoDescriptionValue, author:todoAuthor};
        resetModal();

        todoArray.push(todoCard);
        modal.style.display = "none"

        populateCardList();
    });

    document.getElementById("modalX").addEventListener("click",function() {
        modal.style.display = "none"
        resetModal();
    });


    // window.addEventListener("click", function(){
    //     if (event.target == modal)
    //         modal.style.display = "none"
    //         resetModal();
    // })

    }

function resetModal() {
    document.getElementById("todoTextDescription").innerHTML = "Description (30 characters remaining)";
    document.getElementById("newTodoFlex").reset();
}

function populateCardList() {
    if (todoArray.length < 3) {
        var loop = todoArray.length
    }
    else {
        var loop = 3;
    }
    
    var cardList = document.getElementById("flexTwo");

    while (cardList.hasChildNodes()) {
        cardList.removeChild(cardList.firstChild);
    }
     
    for (var i = 1; i <= loop;  i++) {
        var todoCardArticle = document.createElement("article");

        var todoCardH2 = document.createElement("h2");
        todoCardH2.innerHTML = todoArray[todoArray.length-i].title;
        
        var todoCardP = document.createElement("p");
        todoCardP.innerHTML = todoArray[todoArray.length-i].description;

        var todoCardDiv = document.createElement("div");
        todoCardDiv.className = "buttonFlex";
        
        var todoCardButtonDel = document.createElement("button");
        todoCardButtonDel.className = "bDelete";
        todoCardButtonDel.innerHTML = "Delete"

        setEvenListenerDel(todoCardButtonDel, todoArray.length-i);
       
        var todoCardButtonCom = document.createElement("button");
        todoCardButtonCom.innerHTML = "Complete"
        todoCardButtonCom.className = "bComplete";
        
        setEvenListenerCom(todoCardButtonCom, todoArray.length-i);

        document.getElementById("flexTwo").appendChild(todoCardArticle);
        todoCardArticle.appendChild(todoCardH2);
        todoCardArticle.appendChild(todoCardP);
        todoCardArticle.appendChild(todoCardDiv);
        todoCardDiv.appendChild(todoCardButtonDel);
        todoCardDiv.appendChild(todoCardButtonCom);
    }
}

function setEvenListenerCom(todoCardButtonCom, number) {
    todoCardButtonCom.addEventListener("click", function(evt){
        var completedTodo = todoArray.splice(number, 1)
        populateCompletedTodos(completedTodo);
        populateCardList();
    })
}

function setEvenListenerDel(todoCardButtonDel, number) {
    todoCardButtonDel.addEventListener("click", function(evt){
        todoArray.splice(number, 1);
        populateCardList();
    })
}

function populateCompletedTodos(completedTodo) {
    var date = new Date();
    var todoTr = document.createElement("tr");

    var tdTitle = document.createElement("td")
    tdTitle.innerHTML = completedTodo[0].title;

    var tdAutor = document.createElement("td")
    tdAutor.innerHTML = completedTodo[0].author;

    var tdDesc = document.createElement("td")
    tdDesc.innerHTML = completedTodo[0].description;
    
    var tdDate = document.createElement("td")
    tdDate.innerHTML = date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
    
    document.getElementById("completedTodoTable").appendChild(todoTr);
    todoTr.appendChild(tdTitle);
    todoTr.appendChild(tdAutor);
    todoTr.appendChild(tdDesc);
    todoTr.appendChild(tdDate);
}
