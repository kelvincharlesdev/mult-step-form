# Cadastro de desenvolvedores - Multistep Form

Cadastre novos 'perfis' de desenvolvedores na nossa plataforma de dados e baixe seu registro.

Link da documentação da API: <https://profile-api-vyah.onrender.com/api-docs/>

## Steps

### Step 1 - Dados Pessoais

- Nome:
  - Não pode ser vazio
  - Precisa ter pelo menos 4 caracteres
- E-mail:
  - Não pode ser vazio
  - Preciso ter formato de e-mail
- Data de nascimento:
  - Possui exatamente esse formato 'YYYY-MM-DD'
- Telefone:
  - Exatamente 11 digitos
  - Apenas digitos números
- Biografia:
  - Campo de texto que possui quantidade mínima de 50 caracteres
- Links:
  - Adição de links conforme a necessidade do usuário, formando um array de strings com links, usuário não é obrigado a preencher
- Cidade/Estado
  - Usuário precisar escolher um estado válido e posteriormente uma cidade que pertencerá ao estado escolhido

### Step 2 - Dados Técnicos

- Papel:
  - Deve possuir um dos seguintes formatos:
    - 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'designer' | 'qa'
- Tecnologia/Stack
  - Puxar da API as tecnologias (techs) e escolher a que mais se destaca entre as possibilidades
- Competências:
  - Puxar da API as competências (abilities) corresponde ao papel escolhido e possibilitar ao usuário escolher múltilplas opções dentro as disponíveis
- Softskills:
  - Puxar da API as softskills e possibilitar ao usuário escolher exatamente 3 opções dentro as disponíveis

### Step 3 - Experiência

- Você possui experiência?
  'sim' | 'não'
- Se sim:
  - Lista de experiência conforme o usuário tiver, contendo:
    - Nome da empresa
    - Período: Data de ínicio obrigatória, a de fim não é necessário, pois pode estar trabalhando ainda
    - Cargo
    - Função
- Lista de experiência conforme o usuário tiver, contendo:
  - Instituição
  - Período: Data de ínicio e de fim, não obrigatório
  - Possibilidade de enviar link

## Requisitos

- Concluir corretamente o cadastro
- Validar campos respeitando as regras de negócio
- Formulário em steps: Deve possuir três step, porém apenas um disparo de cadastro para a API
- Não possibilitar disparo para API, caso as validações do frontend não passem
- Feedback: informar ao usuário, caso ele não consiga cadastrar seu perfil, o que faltou para preenchido corretamente
- Ao finalizar o cadastro, usuário deverá poder recuperar na response do cadastro, o id do seu cadastro e com ele poderá fazer o download do registro
- Uso obrigatório do styled components para estilos
- Boas práticas de código, estilo e organização
- Entregar a atividade através do link do repositório do gitlab no classroom;
- Aplicar feedback ao usuário de que step do form está usando estilo e texto;

## Dicas

- Não há necessidade de gitflow, então foquem na atividade
- Comecem pelo formulário e pela parte funcional com validação, depois partam para os steps
- Pode usar, caso se faça necessário, uso de libs externas
- Fiquem livrem para personalizar como desejar, mas não esqueçam de seguir as regras de negócio

## 😰 Desafios

      . Requisições em Api 
      . Fazer um Mult Step Form
      . Implementação de Styled Compenent
      

## Repositório

- Dê o fork no seguinte repositório: <https://git.raroacademy.com.br/turmas-react/react-turma2/react2-alunos/pratica-semana-09>

- Depois o clone:

```bash
git clone https://git.raroacademy.com.br/turmas-react/react-turma2/react2-alunos/pratica-semana-09
```

- Instale as dependências:

```bash
npm install
```

Duplique o arquivo `.env.example` e renomeie para `.env`.

- Rode o projeto:

```bash
npm run dev
```

## 👩‍💻 **Dev**

<table align="center">
    <tr>   
        <td align="center">
            <div>
                <img src="https://avatars.githubusercontent.com/u/110488969?v=4"width="120px;" alt="Foto de Kelvin no GitHub"/><br>
                    <b> Dev <br> Kelvin Charles </b><br>
                        <a href="https://www.linkedin.com/in/kelvin-charles/" alt="Linkedin"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" height="20"></a>
                        <a href="https://github.com/kelvincharlesdev" alt="GitHub"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" height="20"></a>
            </div>
        </td>
    </tr>
</table>
