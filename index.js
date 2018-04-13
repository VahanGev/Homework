var fs = require('fs');

function main(){
   var file  = "obj.json";
   fs.appendFileSync(file, 'var obj = \n{\n"first_name": "Vardan",\n "last_name": "Hovsepyan",\n "age": 13,\n "tumo_student": true\n}');
}
main();