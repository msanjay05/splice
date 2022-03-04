export class Post{
  public title:string;
  public body:string;
  public id:string;
  public userId:string;

  constructor(title:string,body:string,id:string,userId:string){
    this.title=title;
    this.body=body;
    this.id=id;
    this.userId=userId;
  }
}
