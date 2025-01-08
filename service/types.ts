import { FormControl } from "@angular/forms";

export interface IUser {
  nome: FormControl<string | null>;
  telefone: FormControl<string | null>;
  email: FormControl<string | null>;
  data_nascimento: FormControl<string | null>;
  tipo_usuario: 'Editor' | 'Visualizador' | 'Administrador'
}