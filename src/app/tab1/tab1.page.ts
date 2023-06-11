import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  movies: any[] = [];

  constructor(private moviesService: ServicesService, private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.loadMovies();
    
  }

  async loadMovies() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.moviesService.getMovies().subscribe((res) => {
      loading.dismiss();
      this.movies = res!;
      console.log(this.movies);
    });
  }
}
