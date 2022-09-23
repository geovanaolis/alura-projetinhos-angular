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

  transferir(){
    console.log('Solicitada nova transferência')

    this.aoTransferir.emit({valor: this.valor, destino: this.destino})
    
    this.clean()
  }

  clean(){
    this.valor = 0
    this.destino = '0000-0'
  }
}
