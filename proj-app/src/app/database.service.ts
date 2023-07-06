import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  constructor(private http: HttpClient) {
  }

  result: any;

  getUsers() {
    return this.http.get('/users');
  }

  getUser(id: string) {
    const url = '/users/' + id;
    return this.http.get(url);
  }

  createUser(data: any) {
    return this.http.post('/users', data, httpOptions);
  }

  updateUsers(id: string, data: any) {
    const url = '/users/' + id;
    return this.http.put(url, data, httpOptions);
  }

  deleteUsers(id: string) {
    const url = '/users/' + id;
    return this.http.delete(url, httpOptions);
  }

  getTasks() {
    return this.http.get('/tasks');
  }

  getTask(id: string) {
    const url = '/tasks/' + id;
    return this.http.get(url);
  }

  createTask(data: any) {
    return this.http.post('/tasks', data, httpOptions);
  }

  updateTasks(id: string, data: any) {
    const url = '/tasks/' + id;
    return this.http.put(url, data, httpOptions);
  }

  deleteTask(id: string) {
    const url = '/tasks/' + id;
    return this.http.delete(url, httpOptions);
  }
}
