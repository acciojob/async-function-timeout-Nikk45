//your JS code here. If required.

async function callme(){
	let text = document.getElementById('text').value;
	let delayValue = document.getElementById('delay').value;
	let delay = Number(delayValue);
	let value = await new Promise(resolve=>{
		setTimeout(()=>{
			resolve(text);
		},delay)
	})
	let div = document.getElementById('output');
	div.innerText = "value";
}

// alert(text);



