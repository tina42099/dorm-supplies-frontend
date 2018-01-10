const form = document.forms[0]

function register() {
	var data = {}

	if (form.name.value) data.name = form.name.value
	if (form.email.value) data.email = form.email.value
	if (form.password.value) data.password = form.password.value
	if (form.address.value) data.address = form.address.value
	if (form.classYear.value) data.classYear = form.classYear.value

	fetch('/register', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(data)
	}).then(function(res) {
		res.json()
		.then(function(user) {
			alert(JSON.stringify(user))
		})
	}).catch(function(err) {
		console.log(err)
	})
}

function addItem() {
	var newItem = {}

	if (form.name.value) newItem.name = form.name.value
	if (form.price.value) newItem.price = form.price.value
	if (form.description.value) newItem.description = form.description.value
	if (form.quantity.value) newItem.quantity = form.quantity.value
	if (form.pic.value) newItem.pic = form.pic.value

	fetch('/add_item', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(newItem)
	}).then(function(res) {
		res.json()
		.then(function(item) {
			alert(JSON.stringify(item))
		})
	}).catch(function(err) {
		console.log(err)
	})
}
