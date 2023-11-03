var names=new Array();
names[0]="Yash";
names[1]="Akash";
names[2]="Aryan";
names[3]="Aqyan";
names[4]="Sahil";
names[5]="Dakshesh";
names[6]="Bharat";
names[7]="Roomie";
names[8]="Ashi";
names[9]="Joy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}