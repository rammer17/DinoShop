import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IDino } from 'src/app/_models/dino.model';
import { DinoService } from 'src/app/_services/dino.service';
import { ShoppingCartService } from 'src/app/_services/shopping-cart.service';

@Component({
  selector: 'app-dino-preview',
  templateUrl: './dino-preview.component.html',
  styleUrls: ['./dino-preview.component.scss']
})
export class DinoPreviewComponent implements OnInit {
  
  audio: any;

  selectedDinoId?: number;
  selectedDino?: IDino;

  constructor(private route: ActivatedRoute,
              private dinoService: DinoService,
              private scService: ShoppingCartService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.fetchDinoId();
  }

  fetchDinoId() {
    this.route.queryParamMap.subscribe(params => {
      this.selectedDinoId = +params.get('id')!;
      this.fetchDinoData();
    })
  }
  fetchDinoData() {
    this.selectedDino = this.dinoService.dinoList[this.selectedDinoId! - 1];
  }
  playAudio(){
    let audio = new Audio();
    audio.src = this.selectedDino?.soundPath!;
    audio.load();
    audio.play();
  }
  onAddToShoppingCart() {
    this.playAudio();
    this.messageService.add({key:'main', severity: 'success', detail: `Динозавърът е добавен успешно!`, life:2500});
    this.scService.addToCart(this.selectedDino);
  }

}
