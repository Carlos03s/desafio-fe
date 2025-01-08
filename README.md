
# Formulário de Cadastro de Usuário

Este projeto é um formulário de cadastro de usuário desenvolvido em Angular utilizando Reactive Forms para uma empresa fictícia chamada TechManage. Ele possui validações nos campos de entrada para garantir que os dados sejam preenchidos corretamente antes do envio.

## Funcionalidades

- **Validação em tempo real**:
  - Nome: Deve conter pelo menos 3 caracteres.
  - E-mail: Deve ser um e-mail válido.
  - Telefone: Deve ser um número de telefone válido.
  - Data de nascimento: Deve corresponder a uma idade mínima de 18 anos.
- **Seleção de tipo de usuário**: Administrador, Editor ou Visualizador.
- **Mensagens de erro claras**: Exibidas dinamicamente quando os campos estão inválidos.

## Estrutura do Formulário

O formulário é composto pelos seguintes campos:

1. **Nome Completo** (`nome`):
   - Tipo: `text`
   - Validação:
     - Mínimo de 3 caracteres.
   - Mensagem de erro: "Nome precisa ter no mínimo 3 caracteres."

2. **E-mail** (`email`):
   - Tipo: `email`
   - Validação:
     - Deve ser um e-mail válido.
   - Mensagem de erro: "Formato de e-mail inválido."

3. **Telefone** (`telefone`):
   - Tipo: `tel`
   - Validação:
     - Deve ser um número de telefone válido.
   - Mensagem de erro: "Número de telefone inválido."

4. **Data de Nascimento** (`data_nascimento`):
   - Tipo: `date`
   - Validação:
     - Usuário deve ter pelo menos 18 anos.
   - Mensagem de erro:
     - "Idade mínima deve ser 18 anos."
     - "A data de nascimento é obrigatória."

5. **Tipo de Usuário** (`tipo_usuario`):
   - Tipo: `select`
   - Opções:
     - Administrador
     - Editor
     - Visualizador

## Pré-requisitos

- Node.js (v16 ou superior)
- Angular CLI (v15 ou superior)

## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/Carlos03s/desafio-fe.git
   cd desafio-fe
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   ng serve
   ```

4. Acesse o aplicativo no navegador:

   ```
   http://localhost:4200
   ```

## Testes

O projeto inclui testes unitários para validar os campos do formulário.

### Executando os testes

Para rodar os testes:

```bash
ng test
```

### Testes implementados

- Validação do campo `nome` para comprimento mínimo.
- Validação de formato do campo `email`.
- Validação do campo `telefone`.
- Verificação da idade mínima no campo `data_nascimento`.
- Verificação ao preencher os campos corretamento, o formulário deve se tornar válido.

## Captura de Tela

![image](https://github.com/user-attachments/assets/57c3ffff-8927-409e-86d7-f54f32e8951e)
![image](https://github.com/user-attachments/assets/7db821a4-0db6-4d53-9165-3f4d02d4d3f4)

## Tecnologias Utilizadas

- Angular
- Reactive Forms
- Karma & Jasmine (para testes unitários)
