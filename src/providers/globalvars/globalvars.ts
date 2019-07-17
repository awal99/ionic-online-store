
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalvarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalvarsProvider {
  public enableSearch = false;
  public showtitle = true;

  public pagetitle:string;


  setActivePageName(value){
    this.pagetitle =value;
  }

  getActivePageName(){
    return this.pagetitle;
  }

}
