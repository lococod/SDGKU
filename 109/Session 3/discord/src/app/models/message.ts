export class Message {
public text : string;
public from: string;
public to: string;
public createdDate: Date;
public imageUrl : string;

constructor (){
    this.createdDate = new Date();//sets current time
    this.to = "Everyone";
    this.from = "Donald";
    
}

}