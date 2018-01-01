// scripts.js

function drawTree(rows) {
	for (var i=0; i < rows; i++) {
		var star= '';
		for (var space = i; space < rows; space++) {
			star += ' ';
		}
		for (var j=0; j < 2*i + 1; j++) {
      		star += '*';
		}
	console.log(star);
	}
}
drawTree(10);