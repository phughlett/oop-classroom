class Student {
    constructor(...param){
        this.name=param[0];
        this.skillLevel=param[1];
        this.assignments=[];
    }
    study(){
      if(this.skillLevel===100){
          return this;
      }
      this.skillLevel+=1;
      return this;
    }
    doHomework(objParam){
      console.log("dkdkdk ",objParam);
      if(objParam.skillLevel<this.skillLevel && objParam.skillLevel>1){
          this.assignments.push(objParam);
          objParam.completed=true;
      }else{
          objParam.completed=false;
      }
    }
  }

  module.exports = Student
