// at this point i will select the element
var input = document.querySelector(".todo-src")
var plu = document.querySelector("button")
var todolist = document.querySelector(".todolist")

// at this point i will add listeners to the required elements
plu.addEventListener("click", addlist)

// for this section i will create the required function for the listeners above

function addlist(event) {
	event.preventDefault()
	
	var cardiv = document.createElement("div")
	cardiv.classList.add("divclass")


	var carli = document.createElement('li')
	carli.innerText = input.value;
	
	carli.classList.add('liclass');
	cardiv.appendChild(carli);

	var markbtn = document.createElement('button')
	markbtn.innerHTML = "<i class='fa fa-thumbs-up' aria-hidden='true'></i>";
	markbtn.classList.add("mbtn")
	cardiv.appendChild(markbtn)


	var delbtn = document.createElement('button')
	delbtn.innerHTML = "<i class='fa fa-trash' aria-hidden='true'></i>"
	delbtn.classList.add("delbtn")
	cardiv.appendChild(delbtn);



	// at this i need to append the div into the ul
	todolist.appendChild(cardiv);
	input.value = "";
}

$("ul").on('click', '.delbtn', function function_name(event) {
	$(this).parent().fadeOut(500, function function_name(argument) {
		$(this).remove()
	})
	event.stopPropagation()
})

var mack = document.querySelector(".mbtn")

$('ul').on('click', '.mbtn', function function_name(argument) {
	$(this).parent().toggleClass('cast')
})