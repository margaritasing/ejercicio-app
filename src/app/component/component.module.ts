import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ContadorComponent } from './contador/contador.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { TeamsComponent } from './teams/teams.component'; 



@NgModule({
  declarations: [   
    MainComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ContadorComponent,
    AboutComponent,
    TeamsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent   
  ]
})
export class ComponentModule { }
