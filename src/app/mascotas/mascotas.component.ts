import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MascotasService } from '../services/mascotas.service';
import { Mascotas } from '../interfaces/mascotas';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss']
})
export class MascotasComponent implements OnInit, OnDestroy  {
  [x: string]: any;
  datosMascotas: Array<Mascotas> = [];
  formDeleteMascota!: UntypedFormGroup;
  myFormMascota!: UntypedFormGroup;
  filterPost = '';
  fechaActual = new Date();
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
  data: any;
  estado: any;

  constructor(private route: ActivatedRoute, private fb: UntypedFormBuilder, private router: Router, private http: HttpClient, config: NgbModalConfig, private modalService: NgbModal, private servicioMascotas: MascotasService) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {
    this.formDeleteMascota = this.fb.group({
      nmid: ['']
    })
    this.myFormMascota = this.fb.group({
      nmid:[''],
      dsnombrecompleto: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      dsespecie: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      dsraza:['',[Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      dtfechanacimiento: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
    });
    // nmid: Number;
    // dsnombrecompleto: String;
    // dsespecie:String;
    // dsraza:String;
    // dtfechanacimiento: Date;
    // nmcliente: Number;
    
    this.route.queryParams.subscribe(params => {
      let arrayMascotas: Array<Mascotas> = [];
      this.servicioMascotas.getMascotasByCliente(params['nmid']).subscribe(datos => {
      this.datosMascotas = datos.data;
      });
    });
  }
  editarMascota(datos: { nmid: any; dsnombrecompleto: any; dsespecie: any; dsraza: any; dtfechanacimiento: any; }) {
    this.myFormMascota.setValue({
      nmid: datos.nmid,
      dsnombrecompleto: datos.dsnombrecompleto,
      dsespecie: datos.dsespecie,
      dsraza: datos.dsraza,
      dtfechanacimiento: datos.dtfechanacimiento
    })
  }
  eliminarMascota(datos: {nmid: any;}){
    this.formDeleteMascota.setValue({
      nmid : datos.nmid
    })
  }
  openDelete(content: any) {
    this.modalService.open(content);
  }

  openEdit(content: any) {
    this.modalService.open(content);
  }

  refresh() {
    this.route.queryParams.subscribe(params => {
      let arrayMascotas: Array<Mascotas> = [];
      this.servicioMascotas.getMascotasByCliente(params['nmid']).subscribe(datos => {
      this.datosMascotas = datos.data;
      });
    });
  }
  guardar(form: UntypedFormGroup) {
    if (this.myFormMascota.valid) {
      if (form.value.nmid && form.value.nmid !== 0) {
        this.actualizar(form);
        return;
      }
    }
    else {
      alert('Formualario inválido')
    }
  }
  deleteMascota(form: UntypedFormGroup) {
    if (this.formDeleteMascota.valid) {
      if (form.value.nmid && form.value.nmid !== 0) {
        this.eliminarMas(form);
        return;
      }
    }
    else {
      alert('Formualario inválido')
    }
  }
  eliminarMas(form: UntypedFormGroup) {
    this.servicioMascotas.deleteMascotaById(form.value)
      .subscribe(data => {
        alert("Mascota eliminada con exito!!!")
        this.refresh();
    });
  }
  errorbuttontwo(){
    if (this.formDeleteMascota.invalid) {
     alert("No se elimino la mascota!")
     return;
   }
 }

  actualizar(form: UntypedFormGroup) {
    this.servicioMascotas.updateMascotas(form.value)
      .subscribe(data => {
        alert("Se actualizó con exito!!!")
        this.refresh();
    });
  }
  
  ngOnDestroy(): void {
      
  }
}
