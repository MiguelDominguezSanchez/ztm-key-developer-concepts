const myPromise = new Promise((resolve, reject) => {
	if (false) {
		setTimeout(() => {
			resolve('I have succeeded')
		}, 1000)
	} else {
		reject('I have failed')
	}
})

myPromise
	.then((value) => value + '!!!!')
	.then((newValue) => console.log(newValue))
	.catch((rejectValue) => console.log(rejectValue))

//

fetch('https://jsonplacehol.typicode.com/todos/1')
	.then((response) => response.json())
	.then((json) => console.log(json))
	.catch((error) => console.log('I have errored'))
