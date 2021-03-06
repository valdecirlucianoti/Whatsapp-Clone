# Projeto WhatsApp Clone

(https://www.hcode.com.br)

Projeto desenvolvido como exemplo do Curso Completo de JavaScript na Udemy.com.
Link heroku:

Esta aplicação tem como fim treinamento da linguagem Javascript e NODEjs.

## Como rodar

### Instalando dependências

Execute o comando:
```
 npm install
```
O comando a cima irá baixar todas as dependências do projeto

Após a criação automática da pasta de dependências `node_modules`, execute o comando:
```
 npm start ou npm run start
```
Agora abra o seu Browser e insira a URL:
```
http://localhost:8080/
```
É necessário autenticação de um E-mail Google para prosseguir com esta etapa

### Configurando a Base de Dados

Esta aplicação utiliza o `Firebase` para alocar as referências aos arquivos no servidor.
É necessário o cadastro no site:
```
www.firebase.google.com
```

Crie um projeto e obtenha o arquivo `firebaseConfig` e substitua as informações no método `connectFirebase` por seus dados de autenticação:
```
var firebaseConfig = {
            apiKey: "*",
            authDomain: "*",
            databaseURL: "*",
            projectId: "*",
            storageBucket: "*",
            messagingSenderId: "*",
            appId: "*",
            measurementId: "*"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          firebase.analytics();
}

```

As demais estruturas do banco são criadas conforme você interagir com o programa.

### Esta aplicação utiliza: 

Javascript, NODEjs, NPM, Firebase, HTML5 (SVG e Canvas), CSS3 e GIT

### Recursos Usados

Lista de recursos usados em aula para este projeto

| Recurso | Link |
| ------ | ------ |
| Webpack | https://webpack.js.org/ |
| Firebase Authentication | https://firebase.google.com/docs/auth/?authuser=0 |
| Cloud Firestore | https://firebase.google.com/docs/firestore/?authuser=0 |
| Cloud Functions | https://firebase.google.com/docs/functions/?hl=pt-br |
| Cloud Storage | https://firebase.google.com/docs/storage/?authuser=0 |
| PDF.js | https://mozilla.github.io/pdf.js/ |
| MediaDevices.getUserMedia() | https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia |

## Projeto
![WhatsApp Clone](https://firebasestorage.googleapis.com/v0/b/hcode-com-br.appspot.com/o/whatsapp.jpg?alt=media&token=5fc78e3b-4871-424f-abfa-b765f2515d0c)
