let age = 16
let hasTicket = false
let withAdult = true

if (age >= 15 || (hasTicket === true && withAdult === true)) {
	console.log('Välkommen in i BIO')
} else {
	console.log('gå köp ticket din snåle fan')
}

// = --> tilldela nytt värde
// == --> kolla om (värdet) är truthy
// === --> kollar om (värdet) och (datatypen) är truthy
const isLoggedIn = true
const userRole = 'admin'

if (isLoggedIn === true) {
	if (userRole === 'admin') {
		console.log('Välkommen till Adminpanelen! 🛠️')
	} else {
		console.log('Välkommen vanlig användare! 👋')
	}
} else {
	console.log('Du måste logga in först!')
}

const traficLight = 'gul'

switch (traficLight) {
	case 'grön':
		console.log('kör')
		break
	case 'gul':
		console.log('gör dig redo')
		break
	case 'röd':
		console.log('stanna!')
		break

	default:
		console.log('okänd signal')
}
