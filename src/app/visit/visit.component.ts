import { Component, OnInit } from '@angular/core';
import {Visit} from '../model/visit';
import {VisitService} from '../services/visit.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {

  visits: Visit;

  constructor(private visitService: VisitService) { }

  ngOnInit() {
  this.visitService.findVisits().subscribe((s: Visit) => this.visits = s);
  }

}
