import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../iuser';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent {
  users_list: IUser[] = [];
  local_users: IUser[] = [];
  selected_user: IUser = {
    id: 1,
    name: "",
    username: "",
    phone: "",
    website: ""
  };

  tittle: string = "Tabla de Usuarios";
  message: string = "";

  constructor(private _service: UserService) {}

  ngOnInit() {
    this._service.getAll().subscribe(
      response => this.users_list = response
    );
  }

  agregarUsuario(user: IUser): void {
    user.id = this.local_users.length + 1 + this.users_list.length; 
    this.local_users.push(user);
  }

  seleccionar_usuario(user: IUser): void {
    this.selected_user = user;
  }

  eventoRecibido(message: string) {
    this.message = message;
  }

  getAllUsers(): IUser[] {
    return [...this.users_list, ...this.local_users];
  }
}
