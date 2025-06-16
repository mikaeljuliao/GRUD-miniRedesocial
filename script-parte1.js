// Estrutura base do miniTwitter com CRUD completo comentado

// Criamos um objeto chamado miniTwitter, que simula um banco de dados simples em memória
const miniTwitter = {
    usuarios: [
        {
            username: 'omariosouto', // Cada usuário tem uma propriedade 'username'
        }
    ],
    posts: [ // Array que armazena os posts (tweets)
        {   
            id: 1, // Identificador único do post (usado para atualizar ou deletar)
            owner: 'omariosouto', // Dono do post (quem postou)
            content: 'meu primeiro tweet' // Conteúdo do post
        }
    ]
}

// CREATE (Criar novo post)
// Função que recebe um objeto 'dados' como parâmetro
// Esse objeto deve ter as propriedades 'owner' e 'content'
function criaPost(dados) {
    miniTwitter.posts.push({ // push() adiciona um novo elemento ao final do array 'posts'
        id: miniTwitter.posts.length + 1, // Cria um novo ID baseado no tamanho atual da lista
        owner: dados.owner, // Define o dono do post com base no objeto recebido
        content: dados.content // Define o conteúdo do post
    });
}

// Exemplo de uso do CREATE: criando um novo post e adicionando ao array
criaPost({ owner: 'omariosouto', content: 'Segundo tweet' });
console.log(miniTwitter.posts); // Exibe todos os posts após a criação

// READ (Ler os posts)
// Função que apenas retorna o array de posts atual
function pegaPosts() {
    return miniTwitter.posts;
}
console.log(pegaPosts()); // Mostra todos os posts no console

// UPDATE (Atualizar post existente)
// Função que atualiza o conteúdo de um post com base no ID fornecido
function atualizaContentDoPost(id, novoConteudo) {
    // find() percorre os elementos do array e retorna o primeiro que satisfaz a condição
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id; // Compara o id do post com o id fornecido
    });

    // Se encontrou o post, atualiza o conteúdo
    if (postQueVaiSerAtualizado) {
        postQueVaiSerAtualizado.content = novoConteudo;
    }
}

// Exemplo de UPDATE: atualizando o post de id 1
atualizaContentDoPost(1, 'novo conteúdo do post');
console.log(pegaPosts());

// DELETE (Apagar post existente)
// Função que remove um post baseado no ID
function apagaPost(id) {
    // filter() cria um novo array excluindo o post com o ID informado
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id; // Mantém os posts que não têm o id passado
    });

    // Substitui o array original pelos posts atualizados
    miniTwitter.posts = listaDePostsAtualizada;
}

// Exemplo de DELETE: apagando o post de id 2
apagaPost(2);
console.log(pegaPosts());