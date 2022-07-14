import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDino, IDinoAddRequest } from 'src/app/_models/dino.model';
import { DinoService } from 'src/app/_services/dino.service';

@Component({
  selector: 'app-dino-create',
  templateUrl: './dino-create.component.html',
  styleUrls: ['./dino-create.component.scss']
})
export class DinoCreateComponent implements OnInit {
  subs?: Subscription;
  fetchSubs?: Subscription;

  constructor(private dinoService: DinoService,
              private router: Router) { }

  dinoForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    imgPath: new FormControl(''),
    soundPath: new FormControl(''),
    class: new FormControl('')
  })

  ngOnInit(): void {

  }

  onAddDino() {
    const body: IDinoAddRequest = {
      'Title': this.dinoForm.get(['title'])?.value,
      'Description': this.dinoForm.get(['description'])?.value,
      'Price': +this.dinoForm.get(['price'])?.value,
      'ImgPath': this.dinoForm.get(['imgPath'])?.value,
      'SoundPath': this.dinoForm.get(['soundPath'])?.value,
      'Class': this.dinoForm.get(['class'])?.value,
    }
    this.subs = this.dinoService.add(body).subscribe({
      complete: () => {
        this.fetchDinoList();
        this.router.navigate(['/home']);
      }
    })
  }
  fetchDinoList() {
    this.fetchSubs = this.dinoService.getAll().subscribe({
      next: (resp: IDino[]) => {
        this.dinoService.dinoList = resp;
        console.log(resp);
      },
      error: err => {
        console.log(err);
      }
    })
  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
    this.fetchSubs?.unsubscribe();
  }
}
