import { Component, OnInit, Input } from '@angular/core';
import{MenuLink} from './menulinks.component';

@Component({
  
  selector: 'menu2-comp',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.scss'],
  
})

export class MenuComponent2 implements OnInit {
@Input() menulinks: MenuLink[];
size:number;
color:string;
  
  constructor() {
    // Do stuff
    this.color = 'pink';
        this.size = 16;
    var link1 = new MenuLink();
    
    this.menulinks = [link1];
    
   
  }

  AddLinks(numoflinks:number){
    this.menulinks=[];
    var i;
    for(i=0;i<numoflinks;i++){
        var newlink = new MenuLink();
        this.menulinks.push(newlink);
    }
  }

  FontSize(size:number){
    console.log("returned "+ size );
    return size;
  }

  changeFontSize(fontSize:number){
    console.log("changed to "+ fontSize );
    this.FontSize(fontSize);
  }

  changeTab(tab:string){
    event.preventDefault();
    let tabPage = document.getElementById(tab);
   
    let elements : HTMLCollectionOf<Element> = document.getElementsByClassName("tab-pane");
    let elementsArr = Array.prototype.slice.call(elements);
   
    let i;
    for( i=0;i< elements.length;i++){

      if(tabPage == elementsArr[i]){
          elementsArr[i].style.display="block";
      }else{
          elementsArr[i].style.display="none";
      }
    }

  }

  ngOnInit() {
    console.log('Hello Menu2');
  }

}