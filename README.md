# 3RMatch

![License](https://img.shields.io/badge/license-MIT-green)

## Nome do projeto

O nome do projeto é inspirado no conceito dos 3Rs da sustentabilidade — Reduzir, Reutilizar e Reciclar — combinado com a ideia de match, representando a conexão entre pessoas que possuem materiais recicláveis e coletores interessados em coletá-los.

## Descrição

O 3RMatch é uma plataforma digital que conecta pessoas que desejam descartar materiais recicláveis com coletores que buscam esse tipo de material para coleta e posterior reciclagem. A aplicação tem como objetivo facilitar o descarte correto de resíduos, incentivar a reciclagem e contribuir para a economia circular. Ao criar um sistema de correspondência (match) entre oferta e coleta de recicláveis, o 3RMatch ajuda a reduzir o desperdício e a melhorar a eficiência da coleta.

## Funcionalidades

Entre as principais funcionalidades do sistema estão:

- cadastro de materiais recicláveis disponíveis para coleta
- localização de coletores próximos
- sistema de match entre doadores e coletores
- registro das solicitações de coleta
- histórico de coletas realizadas

## Como usar

1. Crie uma conta no sistema (e-mail ou via SSO).
2. Informe a disponibilização do material reciclável.
3. O sistema identifica coletores próximos interessados no material.
4. Um coletor aceita a solicitação e o sistema cria um match.
5. A coleta é realizada e registrada no sistema.

## Requisitos
### Requisitos Funcionais (RF)
#### Gestão de Usuários
RF01 – O sistema deve permitir o cadastro de usuários utilizando autenticação via SSO (Google, Facebook ou Apple).
RF02 – O sistema deve permitir que o usuário informe seus dados básicos (nome, endereço e telefone).
RF03 – O sistema deve permitir que o usuário selecione seu tipo de perfil (Usuário ou Coletor).
RF04 – O sistema deve permitir a visualização das informações do perfil cadastrado.
#### Cadastro de Materiais
RF05 – O sistema deve permitir que usuários cadastrem materiais recicláveis disponíveis para coleta.
RF06 – O sistema deve permitir informar o tipo e a quantidade de material.
RF07 – O sistema deve exibir a lista de materiais cadastrados para consulta.
#### Localização de Coletores
RF08 – O sistema deve exibir coletores disponíveis próximos ao usuário.
RF09 – O sistema deve apresentar os coletores em formato de lista e em visualização de mapa.
RF10 – O sistema deve permitir que o usuário visualize informações básicas do coletor (nome e distância).
#### Sistema de Match
RF11 – O sistema deve sugerir coletores com base na localização e no tipo de material disponível.
RF12 – O sistema deve permitir que o usuário solicite a coleta a um coletor disponível.
RF13 – O sistema deve permitir que o coletor aceite ou recuse solicitações de coleta.
RF14 – O sistema deve registrar a criação de um match entre usuário e coletor.
#### Solicitações de Coleta
RF15 – O sistema deve registrar as solicitações de coleta realizadas.
RF16 – O sistema deve permitir o acompanhamento do status da coleta (pendente, aceita, concluída).
####  Histórico de Coletas
RF17 – O sistema deve manter um histórico das coletas realizadas.
RF18 – O sistema deve permitir a visualização dos detalhes das coletas anteriores.

### Requisitos Não Funcionais (RNF)
#### Desempenho
RNF01 – O sistema deve responder às requisições do usuário em até 2 segundos, em condições normais de uso.
RNF02 – O sistema deve suportar múltiplos usuários simultâneos sem degradação significativa de desempenho.
RNF03 – As operações de consulta (ex: listagem de materiais e coletores) devem ser rápidas (resposta inferior a 5 segundos).
#### Segurança
RNF04 – O sistema deve garantir autenticação segura via SSO (Google, Facebook e Apple).
RNF05 – O sistema deve proteger os dados dos usuários contra acesso não autorizado.
RNF06 – O sistema deve utilizar comunicação segura via HTTPS.
RNF07 – Informações sensíveis devem ser armazenadas de forma segura.
#### Usabilidade
RNF08 – O sistema deve possuir interface intuitiva e de fácil utilização.
RNF09 – O sistema deve ser responsivo, funcionando em dispositivos móveis e desktops.
RNF10 – O fluxo principal (cadastro → match → coleta) deve ser simples e direto.
#### Disponibilidade
RNF11 – O sistema deve estar disponível 24 horas por dia, 7 dias por semana, salvo períodos de manutenção.
RNF12 – O sistema deve possuir alta disponibilidade, minimizando indisponibilidades.
#### Escalabilidade
RNF13 – O sistema deve ser capaz de escalar para suportar aumento no número de usuários e transações.
RNF14 – A arquitetura deve permitir expansão futura sem necessidade de grandes mudanças estruturais.
#### Manutenibilidade
RNF15 – O código do sistema deve ser organizado e modular.
RNF16 – O sistema deve ser de fácil manutenção e evolução.
RNF17 – O sistema deve seguir boas práticas de desenvolvimento (ex: componentização no frontend).
#### Confiabilidade
RNF18 – O sistema deve garantir consistência das informações registradas.
RNF19 – O sistema deve evitar perda de dados em caso de falhas.
RNF20 – O sistema deve registrar eventos importantes (ex: solicitações de coleta).
#### Compatibilidade
RNF21 – O sistema deve ser compatível com os principais navegadores modernos (Chrome, Edge, Firefox).
RNF22 – O sistema deve funcionar corretamente em diferentes tamanhos de tela.

## Diagramas
### Diagramas de Caso de Uso 
#### Visão Geral
```mermaid
flowchart LR
    %% Atores
    Usuario((Usuario))
    Coletor((Coletor))
    Sistema((Sistema))

    %% Casos de uso principais
    Login[Login via SSO]
    ManterPerfil[Manter perfil]
    CadastrarMaterial[Cadastrar material]
    ConsultarColetores[Consultar coletores proximos]
    SolicitarColeta[Solicitar coleta]
    GerarMatch[Gerar match]
    AceitarColeta[Aceitar coleta]
    RealizarColeta[Realizar coleta]
    RegistrarColeta[Registrar coleta]
    Avaliar[Realizar avaliacao]

    %% Relacionamentos
    Usuario --> Login
    Usuario --> ManterPerfil
    Usuario --> CadastrarMaterial
    Usuario --> ConsultarColetores
    Usuario --> SolicitarColeta
    Usuario --> Avaliar

    Coletor --> Login
    Coletor --> ManterPerfil
    Coletor --> AceitarColeta
    Coletor --> RealizarColeta
    Coletor --> Avaliar

    Sistema --> GerarMatch
    Sistema --> RegistrarColeta

    %% Includes (simulados)
    SolicitarColeta -.->|<<include>>| GerarMatch
    RealizarColeta -.->|<<include>>| RegistrarColeta

    %% Extends (simulados)
    Avaliar -.->|<<extend>>| RegistrarColeta
```
#### Usuário
```mermaid
flowchart LR
    Usuario((Usuario))

    Login[Login via SSO]
    ManterPerfil[Manter perfil]
    CadastrarMaterial[Cadastrar material]
    SolicitarColeta[Solicitar coleta]
    AvaliarColetor[Avaliar coletor]

    GerarMatch[Gerar match]

    Usuario --> Login
    Usuario --> ManterPerfil
    Usuario --> CadastrarMaterial
    Usuario --> SolicitarColeta
    Usuario --> AvaliarColetor

    SolicitarColeta -.->|<<include>>| GerarMatch
```
#### Coletor
```mermaid
flowchart LR
    Coletor((Coletor))

    Login[Login via SSO]
    ManterPerfil[Manter perfil]
    AceitarColeta[Aceitar coleta]
    RealizarColeta[Realizar coleta]
    AvaliarUsuario[Avaliar usuario]

    RegistrarColeta[Registrar coleta]

    Coletor --> Login
    Coletor --> ManterPerfil
    Coletor --> AceitarColeta
    Coletor --> RealizarColeta
    Coletor --> AvaliarUsuario

    RealizarColeta -.->|<<include>>| RegistrarColeta
```
#### Sistema
```mermaid
flowchart LR
    Sistema((Sistema))

    SugerirMatch[Sugerir match]
    NotificarColetor[Notificar coletor]
    RegistrarColeta[Registrar coleta]
    ManterHistorico[Manter historico]
    GerenciarAvaliacoes[Gerenciar avaliacoes]

    Sistema --> SugerirMatch
    Sistema --> NotificarColetor
    Sistema --> RegistrarColeta
    Sistema --> ManterHistorico
    Sistema --> GerenciarAvaliacoes
```
### Diagramas de Sequência

#### Login com SSO
```mermaid
sequenceDiagram
actor Usuario
participant App as App 3RMatch
participant SSO as Provedor SSO

Usuario->>App: Acessa tela de login
Usuario->>App: Escolhe SSO
App->>SSO: Solicita autenticacao
SSO->>Usuario: Tela de login externa
Usuario->>SSO: Informa credenciais
SSO->>App: Retorna autenticacao
App->>Usuario: Redireciona para Home
```

#### Manutenção de Usuário
```mermaid
sequenceDiagram
actor Usuario
participant App
participant Sistema

Usuario->>App: Acessa tela de usuario
App->>Sistema: Solicita dados do usuario
Sistema->>App: Retorna dados atuais
Usuario->>App: Atualiza informacoes (nome, endereco, tipo)
App->>Sistema: Envia dados atualizados
Sistema->>Sistema: Valida informacoes
Sistema->>App: Confirma atualizacao
App->>Usuario: Exibe mensagem de sucesso
```

#### Cadastrar Material
```mermaid
sequenceDiagram
actor Usuario
participant App
participant Sistema

Usuario->>App: Acessa tela de materiais
Usuario->>App: Informa tipo e quantidade
App->>Sistema: Envia dados do material
Sistema->>Sistema: Valida dados
Sistema->>App: Confirma cadastro
App->>Usuario: Exibe material na lista
```

#### Localizar Coletor
```mermaid
sequenceDiagram
actor Usuario
participant App
participant Sistema

Usuario->>App: Acessa tela de mapa
App->>Sistema: Solicita coletores proximos
Sistema->>Sistema: Filtra por localizacao
Sistema->>App: Retorna coletores
App->>Usuario: Exibe lista e mapa
```

#### Solicitar Coleta
```mermaid
sequenceDiagram
actor Usuario
participant App
participant Sistema
actor Coletor

Usuario->>App: Seleciona coletor
App->>Usuario: Confirma solicitacao
Usuario->>App: Confirma
App->>Sistema: Cria solicitacao
Sistema->>Coletor: Notifica coletor
Coletor->>Sistema: Aceita solicitacao
Sistema->>App: Atualiza status (match)
App->>Usuario: Informa coleta confirmada
```

#### Registrar Coleta
```mermaid
sequenceDiagram
actor Coletor
participant Sistema
participant App
actor Usuario

Coletor->>Sistema: Marca como concluida
Sistema->>Sistema: Registra historico
Sistema->>App: Atualiza status
App->>Usuario: Notifica conclusao
```
### Diagramas de Estado

#### Estado do Usuário
```mermaid
stateDiagram-v2
[*] --> NaoAutenticado
NaoAutenticado --> Autenticado : Login (SSO)
Autenticado --> PerfilIncompleto : Primeiro acesso
PerfilIncompleto --> PerfilCompleto : Cadastro concluido
PerfilCompleto --> PerfilAtualizado : Edicao de dados
PerfilAtualizado --> PerfilCompleto
Autenticado --> [*] : Logout
```
#### Estado do Material
```mermaid
stateDiagram-v2
[*] --> NaoCadastrado
NaoCadastrado --> Disponivel : Cadastro realizado
Disponivel --> EmColeta : Coletor solicitado
EmColeta --> Coletado : Coleta concluida
Coletado --> [*]
```
#### Estado da Solicitação de Coleta
```mermaid
stateDiagram-v2
[*] --> SemMatch
SemMatch --> Pendente : Solicitacao criada
Pendente --> Aceito : Coletor aceita
Pendente --> Recusado : Coletor recusa
Aceito --> EmColeta
EmColeta --> Concluido
Concluido --> [*]
Recusado --> [*]
```
#### Estado da Coleta
```mermaid
stateDiagram-v2
[*] --> Agendada
Agendada --> EmAndamento
EmAndamento --> Finalizada
Finalizada --> Avaliada
Avaliada --> [*]
```

## Protótipos de Telas
### Tela do Login
<p align="center">
  <img src="https://github.com/joseferrazza/3RMatch/blob/main/docs/telas/3RMatchLogin.PNG?raw=true" width="300"/>
</p>

### Tela do Menu
<p align="center">
  <img src="https://github.com/joseferrazza/3RMatch/blob/main/docs/telas/3RMatchMenu.PNG?raw=true" width="300"/>
</p>

### Tela do Cadastro de Usuário
<p align="center">
  <img src="https://github.com/joseferrazza/3RMatch/blob/main/docs/telas/3RMatchUsuario.PNG?raw=true" width="300"/>
</p>

### Tela do Cadastro de Materiais
<p align="center">
  <img src="https://github.com/joseferrazza/3RMatch/blob/main/docs/telas/3RMatchMaterial.PNG?raw=true" width="300"/>
</p>

### Tela de Localização de Coletores
<p align="center">
  <img src="https://github.com/joseferrazza/3RMatch/blob/main/docs/telas/3RMatchMapa.PNG?raw=true" width="300"/>
</p>

### Tela de Match
<p align="center">
  <img src="https://github.com/joseferrazza/3RMatch/blob/main/docs/telas/3RMatchMatch.PNG?raw=true" width="300"/>
</p>

### Tela de Histórico de Coletas
<p align="center">
  <img src="https://github.com/joseferrazza/3RMatch/blob/main/docs/telas/3RMatchHistorico.PNG?raw=true" width="300"/>
</p>

