import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
//import { FileSaverModule } from 'ngx-filesaver';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
//import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
//import { HomeComponent } from './home/home.component';
//import { MenuModule } from './menu/menu.module';
//import { ErrorTailorModule } from '@ngneat/error-tailor';
import { BlockUIModule } from 'ng-block-ui';
import { DragDropModule } from '@angular/cdk/drag-drop';
//import { ValidateComponent } from './validate/validate.component';
//import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CoreModule } from './core/core.module';
//import { JwtInterceptor } from './helper/jwtInterceptor';
//import { DataTablesModule } from "angular-datatables";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
//import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTabsModule } from '@angular/material/tabs';
import 'angular-datatables';
//import { AmplifyUIAngularModule } from '';
//import Amplify from 'aws-amplify';
import AmplifyI18n from "amplify-i18n";

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    MascotasComponent,
    LoginComponent
  ],
  imports: [
    MatPaginatorModule,
    MatTableModule,
   // AmplifyUIAngularModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    LayoutModule,
    //NgxChartsModule,
    MatTabsModule,
    BlockUIModule.forRoot(),
    //SweetAlert2Module,
    CoreModule,
    MatDialogModule,
    ReactiveFormsModule,
    //FileSaverModule,
    //DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    DragDropModule,
    /*ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Campo requerido',
          minlength: ({ requiredLength, actualLength }) =>
            `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    })*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
