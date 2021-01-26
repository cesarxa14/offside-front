import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validator, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { AppServiceService} from '../../servicios/appService/app-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.css']
})
export class CrearNoticiaComponent implements OnInit {

  @Output() newNoti:any = new EventEmitter();
  progress_bar:boolean = false;
  tags: any = [];
  id_tag;
  metadata:any = localStorage.getItem('metadata');
  newNotiForm: FormGroup;
  selectedFoto: File = null;
  constructor(private _formBuilder : FormBuilder, private appService: AppServiceService, private _snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<CrearNoticiaComponent>) { }

  ngOnInit() {
    this.newNotiForm = this._builderForm();
    this.appService.getTags().subscribe(res=>{
      this.tags = res;
    })
  }

  _builderForm(){
    let pattern = '^[a-zA-Z0-9._@\-]*$';
    let form = this._formBuilder.group({
      titulo:    ['', [Validators.required, Validators.pattern(pattern)]],
      subtitulo: ['', [Validators.required, Validators.pattern(pattern)]],
      cuerpo:    ['', [Validators.required, Validators.pattern(pattern)]],
      tag:    ['', [Validators.required]],
      foto:      [null, [Validators.required]]
    })
    return form;
  }

  //GETTERS
  get titulo()    {return this.newNotiForm.controls['titulo']};
  get subtitulo() {return this.newNotiForm.controls['subtitulo']};
  get cuerpo()    {return this.newNotiForm.controls['cuerpo']};
  get tag()       {return this.newNotiForm.controls['tag']};
  get foto()      {return this.newNotiForm.controls['foto']};

  onFileChange(e){
    this.selectedFoto = <File>e.target.files[0];
  }
  crearNoticia(){
    this.progress_bar = true;
    console.log('metadata', this.metadata)
    const formData = new FormData();
    formData.append('titulo'   , this.titulo.value);
    formData.append('subtitulo', this.subtitulo.value);
    formData.append('cuerpo'   , this.cuerpo.value);
    formData.append('tag'      , this.id_tag)
    formData.append('foto'     , this.selectedFoto);
    formData.append('metadata' , this.metadata )
    this.appService.crearNoticia(formData).subscribe((res:any)=>{
      this._snackBar.open(res.msj, 'Cerrar', {duration:4000});
      this.progress_bar = false;
      this.dialogRef.close();
      let obj = {
        titulo: this.titulo.value,
        subtitulo: this.subtitulo.value,
        cuerpo: this.subtitulo.value,
        tag: this.tag.value,
        foto: this.selectedFoto
      };
      this.newNoti.emit(obj);
      // this.titulo.setValue('');
      // this.subtitulo.setValue('');
      // this.cuerpo.setValue('');
      // this.
    })
  }

  onShopSelectionChanged(event){
    console.log(event)
    this.id_tag = event.option.id;
  }

}
