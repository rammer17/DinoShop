import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDino } from '../_models/dino.model';
import { DinoService } from '../_services/dino.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  subs?: Subscription;

  constructor(private dinoService: DinoService  ) { }

  fetchDinos() {
    this.subs = this.dinoService.getAll().subscribe({
      next: resp => {
        // this.dinoService.dinoList = resp;
        console.log(resp);
      },
      error: err => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.fetchDinos();
  }
  ngOnDestroy() {
    this.subs?.unsubscribe();
  }
}
