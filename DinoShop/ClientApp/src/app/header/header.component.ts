import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDino } from '../_models/dino.model';
import { DinoService } from '../_services/dino.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  subs?: Subscription;


  dinoList: IDino[] = [];
  predators: IDino[] = [];
  herbivorous: IDino[] = [];
  flying: IDino[] = [];
  aquatic: IDino[] = [];

  constructor(private dinoService: DinoService) { }

  ngOnInit(): void {
    this.fetchDinos();
  }
  fetchDinos() {
    this.subs = this.dinoService.getAll().subscribe({
      next: (resp: IDino[]) => {
        this.dinoService.dinoList = resp;
        this.dinoList = this.dinoService.dinoList;
        this.aquatic = this.dinoList.filter(a => a.class === "Водни");
        this.herbivorous = this.dinoList.filter(a => a.class === "Тревопасни");
        this.flying = this.dinoList.filter(a => a.class === "Летящи");
        this.predators = this.dinoList.filter(a => a.class === "Хищници");
      },
      error: err => {
        console.log(err);
      }
    })

  }
  ngOnDestroy() {
    this.subs?.unsubscribe();
  }
}
