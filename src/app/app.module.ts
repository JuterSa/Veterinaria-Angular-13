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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CoreModule } from './core/core.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import 'angular-datatables';
import { BlockUIModule } from 'ng-block-ui';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DataTableDirective, DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    MascotasComponent,
    LoginComponent
  ],
  imports: [
    SweetAlert2Module.forRoot(), //La unica forma de que funcione es migrar a las versiones (14 or 15 angular)
    MatPaginatorModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    LayoutModule,
    //NgxChartsModule,
    MatTabsModule,
    BlockUIModule.forRoot(),
    //SweetAlert2Module.forRoot(),
    CoreModule,
    MatDialogModule,
    ReactiveFormsModule,
    //FileSaverModule,
    DataTablesModule,
    //DataTableDirective,
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
