import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Clientes } from '../interfaces/clientes';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit, OnDestroy {
  [x: string]: any;
  datosClientes: Array<Clientes> = [];
  myForm!: UntypedFormGroup;
  myFormMascota!: UntypedFormGroup;
  formDeleteCliente!: UntypedFormGroup;
  filterPost = '';
  fechaActual = new Date();
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
  data: any;
  estado: any;

  constructor(private route: ActivatedRoute, private fb: UntypedFormBuilder, private router: Router, private http: HttpClient, config: NgbModalConfig, private modalService: NgbModal, private servicioCliente: ClientesService) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {

    this.formDeleteCliente = this.fb.group({
      nmid: ['']
    })
    
    this.myForm = this.fb.group({
      nmid: [''],
      dstipodocumento: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      cdidentificacion: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]],
      dsnombrecompleto: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      dsciudad: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      dsdireccion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      dstelefono: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]

    })
    this.myFormMascota = this.fb.group({
      nmid:[''],
      dsnombrecompleto: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      dsespecie: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      dsraza:['',[Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      dtfechanacimiento: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      nmcliente:['']
    })
    let arrayClientes: Array<Clientes> = [];
    this.servicioCliente.getClientes().subscribe(datos => {
      this.datosClientes = datos.data;
    });

    this.dtOptions = {
       pagingType: 'full_numbers',
     pageLength: 4
    }

  }
  open(content: any) {
    this.modalService.open(content);
    this.myForm.reset();
    this.myFormMascota.reset();
  }
  openEdit(content: any) {
    this.modalService.open(content);
  }
  editar(datos: { nmid: any; dstipodocumento: any; cdidentificacion: any; dsnombrecompleto: any; dsciudad: any; dsdireccion: any; dstelefono: any;  }) {
    this.myForm.setValue({
      nmid: datos.nmid,
      dstipodocumento: datos.dstipodocumento,
      cdidentificacion: datos.cdidentificacion,
      dsnombrecompleto: datos.dsnombrecompleto,
      dsciudad: datos.dsciudad,
      dsdireccion: datos.dsdireccion,
      dstelefono: datos.dstelefono,
    })
  }
  guardar(form: UntypedFormGroup) {
    if (this.myForm.valid) {
      if (form.value.nmid && form.value.nmid !== 0) {
        this.actualizar(form);
        return;
      }
      this.servicioCliente.createClientes(form.value)
        .subscribe(data => {
          alert("Cliente agregado con exito!");
          this.myForm.reset();
          this.refresh();
        }
      )
    }
    else {
      alert('Formualario inválido')
    }
  }
  guardarMascota(form: UntypedFormGroup) {
    if (this.myFormMascota.valid) {
      if (form.value.nmid && form.value.nmid !== 0) {
        this.actualizar(form);
        return;
      }
      this.servicioCliente.createMascotas(form.value)
        .subscribe(data => {
          alert("Mascota agregada con exitó!...");
          this.myForm.reset();
          this.refresh();
        }
      )
    }
    else {
      alert('Formualario inválido')
    }
  }
  removeCliente(form: UntypedFormGroup) {
    if (this.formDeleteCliente.valid) {
      if (form.value.nmid && form.value.nmid !== 0) {
        this.eliminarCli(form);
        return;
      }
    }
    else {
      alert('Formualario inválido')
    }
  }
  eliminarCli(form: UntypedFormGroup) {
    this.servicioCliente.deleteClientes(form.value)
      .subscribe(data => {
        alert("Cliente eliminado con exito!!!")
        this.refresh();
    });
  }
  actualizar(form: UntypedFormGroup) {
    this.servicioCliente.updateClientes(form.value)
      .subscribe(data => {
        alert("Se actualizó con exito!!!")
        this.refresh();
    });
  }
  verMascotas(datos: { nmid: any}) {
    this.router.navigate(["mascotas"], { queryParams: { nmid: datos.nmid} });
  }
  refresh() {
    let arrayClientes: Array<Clientes> = [];
    this.servicioCliente.getClientes().subscribe(datos => {
      this.datosClientes = datos.data;
    });
  }

  errorbutton() {
    if (this.myForm.invalid) {
      alert("Por favor verifica que los campos esten llenos correctamente!")
      return;
    }
  }

   errorbuttontwo(){
      if (this.myFormMascota.invalid) {
       alert("Por favor verifica que los campos esten llenos correctamente!")
       return;
     }
   }
   errorbuttonthree(){
    if (this.formDeleteCliente.invalid) {
      alert("Debes llenar todos los campos o Cliente sin eliminar!")
      return;
    }
   } 
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
