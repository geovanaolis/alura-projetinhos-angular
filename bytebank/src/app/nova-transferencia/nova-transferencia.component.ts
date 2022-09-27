import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<any>()

  valor: number = 12
  destino: string = '1234-5'

  constructor(private service: TransferenciaService){

  }

  transferir(){
    console.log('Solicitada nova transferência')

    const imitValue: Transferencia = {valor: this.valor, destino: this.destino}

    this.service.add(imitValue).subscribe(resultado => {
      console.log(resultado)
      this.clean()
    },
      (error) => console.error(error)
    )
  }

  clean(){
    this.valor = 0
    this.destino = '0000-0'
  }
}
