//your JS code here. If required.
let text = document.getElementById('text').value;
let delayValue = document.getElementById('delay').value;
let delay = parseInt(delayValue);

async function callme(){
	// alert(delay);
	let value = await new Promise(resolve=>{
		setTimeout(()=>{
			resolve(text);
		},1000)
	})
	let div = document.getElementById('output');
	div.innerText = value;
}

// alert(text);



