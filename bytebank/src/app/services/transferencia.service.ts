import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TransferenciaService {
  private listaDeTransferencia: any[]
  private url = 'http://localhost:3000/transferencias'

  constructor(private httpClient: HttpClient) {
    this.listaDeTransferencia = []
  }

  get transferencias(){
    return this.listaDeTransferencia
  }

  all(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  add(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia)
    
    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date()
  }
}
