import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from 'src/app/Models/players';

@Injectable({
  providedIn: 'root'
})
export class PlayerserviceService {

  baseURL = 'http://localhost:8086/mypronos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  public getAllPlayers(): Observable<Player[]>{
    return this.http.get<Player[]>(`${this.baseURL}/players`, this.httpOptions);
  }

  public getPlayerById(id:number): Observable<Player> {
    return this.http.get<Player>(`${this.baseURL}/players/${id}`, this.httpOptions);
  }

  public createPlayer(player:Player): Observable<Player>{
    return this.http.post<Player>(`${this.baseURL}/players/create`, player, this.httpOptions);
  }

  public deletePlayer(id: number): Observable<Player> {
    return this.http.post<Player>(`${this.baseURL}/players/delete/${id}`, this.httpOptions);
  }

  public updatePlayer(id: number): Observable<Player> {
    return this.http.post<Player>(`${this.baseURL}/players/update/${id}`, this.httpOptions);
  }

  
}
