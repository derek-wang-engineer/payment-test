import { NgModule } from '@angular/core';
import { HomePage } from './pages/home/home.page';
import { MainRoutingModule } from './main.routes';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    MainRoutingModule,

    MatButtonModule
  ]
})
export class MainModule {
}
