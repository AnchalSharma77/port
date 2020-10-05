import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 

  toHome(){
    document.getElementById("home").scrollIntoView();
  }
  toSkills(){
    document.getElementById("skills").scrollIntoView();
  }

  toProjects(){
    document.getElementById("projects").scrollIntoView();
  }

  toAwards(){
    document.getElementById("awards").scrollIntoView();
  }

}
