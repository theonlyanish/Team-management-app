import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Storycard } from 'src/app/stored-data/Storycard';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {
  @Input() title:string ='';
  @Input() description:string='';
  @Input() idCard!: string;
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  opencard()
  {
    localStorage.setItem('currentID',this.idCard);
    console.log(this.idCard)
    this.router.navigateByUrl('/opencard');
  }
}
