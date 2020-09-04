window.onload = startup;

function startup() {
    var main = document.createElement("main");
    document.body.appendChild(main);

    var paragraph = document.createElement("p");
    paragraph.innerHTML = "Jeg trener på JavaScript"
    paragraph.className = "paragraph"

    main.appendChild(paragraph)

    const myObj = [{id: 1, data: "Lorem ipsum"},{id: 2, data: "Dolor si"},{id: 3, data: "Amet"}]

    var select = document.createElement("select", option, i=0 , il = myObj.length)

    for (; i < il; i++) {
        var option = document.createElement("option");
        option.setAttribute("id", myObj[i].id);
        option.appendChild(document.createTextNode(myObj[i].data));
        select.appendChild(option);
    }

    main.appendChild(select);

    select.style.maxWidth = "500px";
    select.style.position = "relative";
    select.style.right = "50%";
    select.style.left = "50%";

    var test = document.createElement("button");
    test.innerHTML = "Test"
    var reset = document.createElement("button");
    reset.innerHTML = "Reset"

    document.body.appendChild(test)
    document.body.appendChild(reset)

    test.addEventListener("click", function() {
        var beforeFlippedText = document.getElementsByTagName("p")[0].innerHTML;

        flippedText = reverseString(beforeFlippedText);

        var textArray = flippedText.split(" ");
        console.log(textArray);
        var textWithoutFirstLetterArray = [];

        for (var i = 0; i < textArray.length; i++) {
            textWithoutFirstLetterArray.push(textArray[i].slice(1));
        }

        var textWithoutFirstLetter = textWithoutFirstLetterArray.join(" ");
        paragraph.innerHTML = textWithoutFirstLetter;
    })

    reset.addEventListener("click", function() {
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
        createListElements();
    });

    var list = document.createElement("ul");
    document.body.appendChild(list);

    createListElements();

    function createListElements() {    
        var liel1 = document.createElement("li");
        liel1.id = "el1"
        liel1.innerHTML = 1;
        list.appendChild(liel1)
        var btn1 = document.createElement("button");
        btn1.innerHTML = "Delete";
        btn1.addEventListener("click", function() {
            btn1.parentNode.parentNode.removeChild(liel1);
        })
        liel1.appendChild(btn1);
        
        var liel2 = document.createElement("li");
        liel2.innerHTML = 2;
        list.appendChild(liel2)
        var btn2 = document.createElement("button");
        btn2.innerHTML = "Delete";
        btn2.addEventListener("click", function() {
            btn2.parentNode.parentNode.removeChild(liel2);
        })
        liel2.appendChild(btn2);

        var liel3 = document.createElement("li");
        liel3.innerHTML = 3;
        list.appendChild(liel3)
        var btn3 = document.createElement("button");
        btn3.innerHTML = "Delete";
        btn3.addEventListener("click", function() {
            btn3.parentNode.parentNode.removeChild(liel3);
        })
        liel3.appendChild(btn3);
        
        var liel4 = document.createElement("li");
        liel4.innerHTML = 4;
        list.appendChild(liel4)
        var btn4 = document.createElement("button");
        btn4.innerHTML = "Delete";
        btn4.addEventListener("click", function() {
            btn4.parentNode.parentNode.removeChild(liel4);
        })
        liel4.appendChild(btn4);
    
    };
    
    
    // Prøvde å få til en måte å lage liste elemetene i en loop, men de blir ikke slettet rikgit. Og fikk litt dårlig tid
    // function createListElements() {
    //     for (var i = 1; i <= 4; i++){
    //         var eld = document.createElement("button")
    //         eld.innerHTML = "Delete"
    //         var el = document.createElement("li");
    //         el.innerHTML = i;
    //         list.appendChild(el);
    //         el.appendChild(eld);
    //         eld.addEventListener("click", function() {
    //             eld.parentNode.parentNode.removeChild(el)
    //         });
    //     }
    // }

    function reverseString(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
}