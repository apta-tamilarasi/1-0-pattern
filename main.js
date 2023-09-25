let a=parseInt(prompt("enter the start value"))

no=true

for(let i=0;i<a; i++){

	for(let j=0;j<=i; j++){

		if(no==true){
			document.write(1+"&nbsp")
			no=false
		}

		else{
			document.write(0+"&nbsp")
			no=true
		}
	
	}
	document.write("<br>")

	

	
}
