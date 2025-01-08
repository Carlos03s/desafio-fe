import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, ReactiveFormsModule], 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Validação de formulário', () => {
    it('Deve marcar o formulário como inválido quando vazio', () => {
      expect(component.userForm.valid).toBeFalsy();
    });

    it('Deve validar a quantidade minima de caracteres no campo nome', () => {
      const nomeControl = component.userForm.get('nome');
      nomeControl?.setValue('Jo'); 
      expect(nomeControl?.valid).toBeFalsy();

      nomeControl?.setValue('João Silva'); 
      expect(nomeControl?.valid).toBeTruthy();
    });

    it('Deve validar o formato do e-mail', () => {
      const emailControl = component.userForm.get('email');
      emailControl?.setValue('exemplo');
      expect(emailControl?.valid).toBeFalsy();

      emailControl?.setValue('user@examplo.com');
      expect(emailControl?.valid).toBeTruthy();
    });

    it('Deve validar o formato do número de telefone', () => {
      const telefoneControl = component.userForm.get('telefone');
      telefoneControl?.setValue('12345'); 
      expect(telefoneControl?.valid).toBeFalsy();

      telefoneControl?.setValue('(11)98765-4321'); 
      expect(telefoneControl?.valid).toBeTruthy();
    });

    it('Deve validar o campo data_nascimento com a idade minima de 18', () => {
      const dataControl = component.userForm.get('data_nascimento');
      const today = new Date();
      const underageDate = new Date(today.getFullYear() - 10, today.getMonth(), today.getDate()); 
      const validDate = new Date(today.getFullYear() - 20, today.getMonth(), today.getDate()); 

      const underAgeToDateFormat = underageDate.toISOString().split('T')[0];
      dataControl?.setValue(underAgeToDateFormat); 
      expect(dataControl?.valid).toBeFalsy();

      const validAgeToDateFormat = validDate.toISOString().split('T')[0]
      dataControl?.setValue(validAgeToDateFormat);
      expect(dataControl?.valid).toBeTruthy();
    });

    it('Deve validar o select tipo_usuario', () => {
      const tipoControl = component.userForm.get('tipo_usuario');
      tipoControl?.setValue(''); 
      expect(tipoControl?.valid).toBeFalsy();

      tipoControl?.setValue('administrador');
      expect(tipoControl?.valid).toBeTruthy();
    });

    it('Deve marcar o formulário como inválido quando preenchido incorretamente', () => {
      component.userForm.setValue({
        nome: 'João Silva',
        email: 'user@examplo.com',
        telefone: '11987654321',
        data_nascimento: '2000-01-01',
        tipo_usuario: 'editor',
      });

      expect(component.userForm.valid).toBeFalsy();
    });

    it('Deve marcar o formulário como válido quando preenchido corretamente', () => {
      component.userForm.setValue({
        nome: 'João Silva',
        email: 'user@examplo.com',
        telefone: '(11)98765-4321',
        data_nascimento: '2000-01-01',
        tipo_usuario: 'editor',
      });

      expect(component.userForm.valid).toBeTruthy();
    });
  });
});
