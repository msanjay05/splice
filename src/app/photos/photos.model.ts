export class Photos{
  id:string;
  albumId:string;
  title:string;
  url:string;
  thumbnailUrl:string;
  constructor(id,albumId,title,url,thumbnailUrl)
  {
    this.id=id;
    this.albumId=albumId;
    this.title=title;
    this.url=url;
    this.thumbnailUrl=thumbnailUrl;
  }
}
