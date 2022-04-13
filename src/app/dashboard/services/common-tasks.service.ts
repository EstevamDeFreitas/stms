import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonTasksService {

  private taskSource = new Subject<string>();

  taskTaken$ = this.taskSource.asObservable();

  sendTask(task : string){
    this.taskSource.next(task);
  }

}
