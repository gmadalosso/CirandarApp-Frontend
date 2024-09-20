# CirandarApp - Frontend

O CirandarApp é a aplicação frontend do projeto desenvolvido para a cadeira de Programação de Dispositivos Móveis na universidade Unisinos. O aplicativo permite a interação com as funcionalidades do sistema de gerenciamento de bibliotecas, oferecendo uma interface amigável para os usuários.

Alunos participantes:
- Álvaro Souza Pereira da Silva
- Bruno de Araujo Fonseca
- Carla Viganigo Rangel de Castilhos
- Gabriela Madalosso
- Hierro de Almeida Zaro
- Weslen Sevéro Mombach

## Descrição

O frontend é construído utilizando **Angular** e **Ionic** para fornecer uma experiência responsiva e eficiente. Este projeto é a camada de apresentação do CirandarApp, que se comunica com a API backend para gerenciar usuários e bibliotecas.

### Funcionalidades

- **Login/Logout de Usuário:** Autenticação de usuários utilizando e-mail e senha, com suporte a gerenciamento de sessão.
- **Dashboard de Administração:** Exibição de conteúdo restrito para administradores.
- **Interação com API:** Consulta de informações de bibliotecas e usuários.

## Como executar o projeto localmente

### Pré-requisitos

- **Node.js** instalado
- **Ionic CLI** instalado
- **Angular CLI** instalado
- **Android Studio** (para testes em emuladores Android)
- **Docker** (para rodar o backend)

### Passos para executar

1. Clone o repositório para a sua máquina:

   ```bash
   git clone https://github.com/gmadalosso/CirandarApp-Frontend.git

2. Instale as dependências do projeto:

   ```bash
   npm install

3. Verifique e ajuste as variáveis de ambiente no arquivo src/environments/environment.ts. A variável currentEnv pode ser alterada para definir o ambiente de desenvolvimento correto:

   ```typescript
   const currentEnv = 'emulator'; // Altere para 'local' se for rodar o backend localmente

4. Inicie a aplicação localmente para testes no navegador (dessa forma vai inicializar na porta 8100): (Tenha o backend rodando)

   ```bash
   npm start

5. Se você deseja testar no Android Studio:

   ```bash
   npm run build --configuration app
   npx cap sync android
   npx cap open android
   ```

- Esses comandos devem: Criar uma build de desenvolvimento para a aplicação, sincronizar essa build com o apk android, e abrir o android studio com o projeto.
- Após isso, deve-se ter um device rodando no Device Manager do Android Studio, e você deve rodar a aplicação.

# Observações
- Caso você tenha problemas para rodar a aplicação no emulador, é sugerido apagar a pasta "android" e o arquivo "capacitor.config.ts", e então reinicializar a aplicação:
   ```bash
   npm install -g @capacitor/cli
   npx cap init
   npx cap add android
   npm run build --configuration app
   npx cap copy
   npx cap sync android
   npx cap open android
   ```

- Caso tenha feito essa recriação do apk android, você deve inserir a configuração no <application> do arquivo AndroidManifest.xml (encontrado em ./android/app/src/main/AndroidManifest.xml)

   ```xml
   android:usesCleartextTraffic="true"


