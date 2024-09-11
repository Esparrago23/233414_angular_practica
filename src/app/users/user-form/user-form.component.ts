import { Component,EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../iuser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  @Input() user: IUser = {
    id: 0,
    name: "",
    username: "",
    phone: "",
    website: ""
  };

  @Output() event = new EventEmitter<string>();
  @Output() userAdded = new EventEmitter<IUser>();

  

  private validarUsuario(user: IUser): boolean {
    return user.name && user.username && user.phone && user.website ? true : false;
  };

  private resetForm(): void {
    this.user = {
      id: 0,
      name: "",
      username: "",
      phone: "",
      website: ""
    };
  }
  
  agregarUsuario(): void {
    if (this.validarUsuario(this.user)) {
      this.userAdded.emit(this.user);
      this.resetForm();
    } else {
      alert("Por favor, complete todos los campos.");
    }
  }

  enviar(): void {
    this.resetForm(); 
  }

}
