import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

import { LoginComponent } from './pages/login/login.component';
import { ForgetEmailComponent } from './pages/forget-email/forget-email.component';
import { PasswordComponent } from './pages/password/password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { IconComponent } from './components/icon/icon.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';
import { ColorComponent } from './components/color/color.component';
import { MatSelectModule } from '@angular/material/select';
// import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetEmailComponent,
    PasswordComponent,
    DashboardComponent,
    NotesComponent,
    CreatenoteComponent,
    DisplaynoteComponent,
    IconComponent,
    UpdatenoteComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule,
    // ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UpdatenoteComponent]
})
export class AppModule { }

