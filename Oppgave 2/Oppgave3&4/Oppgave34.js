window.onload = startup;

var todoArray = []
var tempArray = []

function startup() {

    let modal = document.getElementById("newTodo");

    document.getElementById("bTodo").addEventListener("click", function() {
        modal.style.display = "block"
    });

    document.getElementById("bCreate").addEventListener("click", function(){
        var todoTitle = document.getElementById("inpTodoTitle").value;
        var todoDescription = document.getElementById("inpDescription").value;
        var todoAuthor = document.getElementById("inpAuthor").value;
        var todoCard = {title:todoTitle, description:todoDescription, author:todoAuthor};

        document.getElementById("newTodoFlex").reset();

        todoArray.push(todoCard);
        modal.style.display = "none"

        populateCardList();
    });

    document.getElementById("modalX").addEventListener("click",function() {
        modal.style.display = "none"
    });


    // window.addEventListener("click", function(){
    //     if (event.target == modal)
    //     modal.style.display = "none"
    // })

    }

function populateCardList() {

    if (todoArray.length > 0) {
         if (tempArray.length < 3) {
             tempArray.push(todoArray.pop());
         }
    }

    if (tempArray.length > 0) {
        for (var i = 0; i < tempArray.length; i++) {
            tempArray[i].id = i;
        }
    }
    
    var cardList = document.getElementById("flexTwo");

    while (cardList.hasChildNodes()) {
        cardList.removeChild(cardList.firstChild);
    }
     
    for (var i = 0; i < tempArray.length;  i++) {
        var todoCardArticle = document.createElement("article");
        todoCardArticle.id = i

        var todoCardH2 = document.createElement("h2");
        todoCardH2.innerHTML = tempArray[i].title;
        
        var todoCardP = document.createElement("p");
        todoCardP.innerHTML = tempArray[i].description;

        var todoCardDiv = document.createElement("div");
        todoCardDiv.className = "buttonFlex";
        
        var todoCardButtonDel = document.createElement("button");
        todoCardButtonDel.className = "bDelete";
        todoCardButtonDel.innerHTML = "Delete"
        todoCardButtonDel.value = i;

        setEvenListenerDel(todoCardButtonDel, i);
       
        var todoCardButtonCom = document.createElement("button");
        todoCardButtonCom.innerHTML = "Complete"
        todoCardButtonCom.className = "bComplete";
        
        setEvenListenerCom(todoCardButtonCom, i);

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
        var completedTodo = tempArray.splice(number, 1)
        populateCompletedTodos(completedTodo);
        populateCardList();
    })
}

function setEvenListenerDel(todoCardButtonDel, number) {
    todoCardButtonDel.addEventListener("click", function(evt){
        tempArray.splice(number, 1);
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
