// Exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick = function(e) {
	alert('O evento ocorreu!')
	alert(e.target) // printa o evento que está ocorrendo
}
// document se refere à página
// getElementByTagName acessa um elemento pelo nome da tag
// No exemplo, está sendo procurada a tag body
// onclick informa o que vai acontecer quando der um click no body
// alert mostra uma mensagem em uma janela na página