import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  university: any[] = [];

  constructor(private universityService: ServicesService, private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.loadUniversities();
  }

  async loadUniversities() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.universityService.getUniversities().subscribe((res) => {
      loading.dismiss();
      this.university = res!;
      console.log(this.university);
    });
  }
}
