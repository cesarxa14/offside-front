import { Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import { AppServiceService} from '../../servicios/appService/app-service.service';
import {FormBuilder, FormGroup, Validator, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.css']
})
export class EditarNoticiaComponent implements OnInit {

  @Output() edit:any = new EventEmitter();
  metadata:any= localStorage.getItem('metadata');
  editNotiForm: FormGroup;
  data_noticia:any;
  tags: any = [];
  id_tag;
  progress_bar:boolean = false;
  selectedFoto: File = null;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _formBuilder : FormBuilder, private appService: AppServiceService,
                public dialogRef: MatDialogRef<EditarNoticiaComponent>) { }

  ngOnInit() {
    console.log('iddddd', this.data)
    this.appService.getTags().subscribe(res=>{
      this.tags = res;
    })
    this.id_tag = this.data.id_tag;
    // this.progress_bar = true;
    // const params = new HttpParams().set('id_noticia', this.data.id_noticia);
    // this.appService.getNoticia(params).subscribe((res:any)=>{
    //   console.log('resp', res)
    //   this.data_noticia = res;
    //   this.progress_bar = false;
      
    // });
    this.editNotiForm = this._builderForm();
    
    
  }

  _builderForm(){
    let pattern = '^[a-zA-Z0-9._@\-]*$';
    let form = this._formBuilder.group({
      titulo:    [this.data.titulo, [Validators.required, Validators.pattern(pattern)]],
      subtitulo: [this.data.subtitulo, [Validators.required, Validators.pattern(pattern)]],
      cuerpo:    [this.data.cuerpo, [Validators.required, Validators.pattern(pattern)]],
      tag:       [this.data.desc_tag, [Validators.required]]
    })
    return form;
  }
  get titulo()    {return this.editNotiForm.controls['titulo']};
  get subtitulo() {return this.editNotiForm.controls['subtitulo']};
  get cuerpo()    {return this.editNotiForm.controls['cuerpo']};
  get tag()       {return this.editNotiForm.controls['tag']};

  onFileChange(e){
    this.selectedFoto = <File>e.target.files[0];
  }
  editarNoticia(){
    this.progress_bar = true;
    const formData = new FormData();
    formData.append('id_noticia', this.data.id_noticia);
    formData.append('titulo'   , this.titulo.value);
    formData.append('subtitulo', this.subtitulo.value);
    formData.append('cuerpo'   , this.cuerpo.value);
    formData.append('tag'      , this.id_tag)
    formData.append('metadata' , this.metadata )
    this.appService.editarNoticia(formData).subscribe((res:any)=>{
      // this._snackBar.open(res.msj, 'Cerrar', {duration:4000});
      this.progress_bar = false;
      this.dialogRef.close();
      let obj = {
        titulo: this.titulo.value,
        subtitulo: this.subtitulo.value,
        desc_tag: this.tag.value
      }
      this.edit.emit(obj);
      
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
