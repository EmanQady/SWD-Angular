import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SideComponent } from './side/side.component';
import { SdlcmenuComponent } from './sdlcmenu/sdlcmenu.component';
import { AllfilesComponent } from './allfiles/allfiles.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { InitformComponent } from './initform/initform.component';
import { ReqformComponent } from './reqform/reqform.component';
import { DesignformComponent } from './designform/designform.component';
import { SideitemComponent } from './sideitem/sideitem.component';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorageService } from './services/storage.service';
const appRoutes: Routes = [
  { path: '', component: MainComponent, },
  { path: 'sdlc', component: MainComponent, },
  { path: 'initform', component: InitformComponent, },
  { path: 'reqform', component: ReqformComponent, },
  { path: 'designform', component: DesignformComponent, },
  { path: 'allfiles', component: AllfilesComponent, },
  { path: 'detailspage', component: DetailsComponent, },

];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideComponent,
    SdlcmenuComponent,
    AllfilesComponent,
    ToolbarComponent,
    InitformComponent,
    ReqformComponent,
    DesignformComponent,
    SideitemComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
