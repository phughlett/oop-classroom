class Marker {
    constructor(size, color, remainingInk){
        this.size = size;
        this.color = color;
        this.remainingInk = remainingInk;
    }

    write(word) {
        for(var char of word){

          let wordLength = word.length

            while(char === " "){
                --wordLength;
            }

            if(remainingInk > word){
                this.remainingInk -= word.length
            }
        }
    //should not decrease for blank spaces
    //should return the word you've written
    //if it runs out of ink, it should only return the number of char it was able to write
    //can still write blank spaces "hell o brian"
    }
}
const marker = new Marker();
module.exports = Marker
/*
class Marker {
   constructor(...param){
       this.size=param[0];
       this.color=param[1];
       this.remainingInk=param[2];
   }
   write(string){
        let ink="";
       for(let char of string){
         if(char!=' ' && this.remainingInk){
            this.remainingInk--;
            ink+=char;
         }else if(char===' '){
             ink+=char;
         }

       }
       if(!this.remainingInk){
            return ink;
       }
      return string;
   }
}

module.exports = Marker

*/

