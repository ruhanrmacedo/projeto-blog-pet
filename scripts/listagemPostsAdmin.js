document.addEventListener('DOMContentLoaded', function () {
    const postsTableBody = document.querySelector('#postsTable tbody');

    // Recupera os posts do Local Storage
    const posts = JSON.parse(localStorage.getItem('pets')) || [];

    // Função para formatar a data
    function formatarData(data) {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(data).toLocaleDateString('pt-BR', options);
    }

    // Adiciona cada post à tabela
    posts.forEach(post => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${post.id}</td>
            <td>${post.titulo}</td>
            <td>${post.descricao}</td>
            <td>${post.categoria}</td>
            <td>${formatarData(post.dataCriacao)}</td>
            <td><img src="${post.foto}" alt="${post.titulo}" style="max-width: 100px; max-height: 100px;"></td>
            <td>
            <button class="delete-btn" data-id="${post.id}">
                <img src="../assets/trash.png" alt="Deletar" style="width: 24px; height: 24px;">
            </button>
        </td>
        `;

        postsTableBody.appendChild(row);
    });

    // Adicionar evento de clique para os botões de deletar
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function () {
            const postId = this.getAttribute('data-id');
            const postsAtualizados = posts.filter(post => post.id !== postId);

            // Atualiza o localStorage com os posts filtrados
            localStorage.setItem('pets', JSON.stringify(postsAtualizados));

            // Recarrega a página para atualizar a lista
            location.reload();
        });
    });

    if (posts.length === 0) {
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML = `<td colspan="6" style="text-align: center;">Nenhum post cadastrado.</td>`;
        postsTableBody.appendChild(emptyRow);
    }
});