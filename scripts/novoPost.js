function adicionarPet(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const categoria = document.getElementById('categoria').value;
    const foto = document.getElementById('foto').value;

    if (titulo === '') {
        document.getElementById('titulo').style.borderColor = 'red';
        document.getElementById('titulo').style.borderWidth = '2px';
        document.getElementById('error-titulo').innerText = 'Campo Título é obrigatório';
    } else {
        document.getElementById('titulo').style.borderColor = 'green';
        document.getElementById('titulo').style.borderWidth = '2px';
        document.getElementById('error-titulo').innerText = '';
    }

    if (descricao === '') {
        document.getElementById('descricao').style.borderColor = 'red';
        document.getElementById('descricao').style.borderWidth = '2px';
        document.getElementById('error-descricao').innerText = 'Campo Descrição é obrigatório';
    } else {
        document.getElementById('descricao').style.borderColor = 'green';
        document.getElementById('descricao').style.borderWidth = '2px';
        document.getElementById('error-descricao').innerText = '';
    }

    if (categoria === '') {
        document.getElementById('categoria').style.borderColor = 'red';
        document.getElementById('categoria').style.borderWidth = '2px';
        document.getElementById('error-categoria').innerText = 'Campo Categoria é obrigatório';
    } else {
        document.getElementById('categoria').style.borderColor = 'green';
        document.getElementById('categoria').style.borderWidth = '2px';
        document.getElementById('error-categoria').innerText = '';
    }

    if (foto === '') {
        document.getElementById('foto').style.borderColor = 'red';
        document.getElementById('foto').style.borderWidth = '2px';
        document.getElementById('error-foto').innerText = 'Campo Foto é obrigatório';
    } else {
        document.getElementById('foto').style.borderColor = 'green';
        document.getElementById('foto').style.borderWidth = '2px';
        document.getElementById('error-foto').innerText = '';
    }

    const pet = {   
        id: crypto.randomUUID(),
        titulo: titulo,
        descricao: descricao,
        dataCriacao: new Date(),
        categoria: categoria,
        foto: foto
    };

    const listaNoLocalStorage = JSON.parse(localStorage.getItem('pets')) || [];
    console.log(listaNoLocalStorage);
    listaNoLocalStorage.push(pet);
    localStorage.setItem('pets', JSON.stringify(listaNoLocalStorage));

    form.reset();
    alert('Pet cadastrado com sucesso!');
}

document.getElementById('formCadastro').addEventListener('submit', adicionarPet);