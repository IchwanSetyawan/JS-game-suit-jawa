var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ol = document.querySelector('ol');


function createListElement(){
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	input.value = '';

	var button = document.createElement('button');
	button.appendChild(document.createTextNode('done'));
	li.appendChild(button);
	button.onclick = underlineParent;

	var button = document.createElement('button');
	button.appendChild(document.createTextNode('delete'));
	li.appendChild(button);
	button.onclick = removeParent;
}

function underlineParent(event){
	event.target.parentNode.classList.toggle('done');
}

function removeParent(event){
	event.target.parentNode.remove();
}

button.addEventListener('click', function(){	
	if(input.value.length > 0){
		createListElement();
	}
})

input.addEventListener('keypress', function(e){	
	if(input.value.length > 0 && e.keyCode == 13){
		createListElement();
	}
})
