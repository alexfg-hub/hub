let contenedor = document.getElementById('contenedor');

fetch('data.json')
    .then(res => res.json())
    .then(data => {

        let titulo = document.createElement('h1');
        titulo.innerHTML = `<hr> ${data.titulo} <hr>`;

        let lista = document.createElement('ul');

        data.links.forEach(item => {
            let li = document.createElement('li');

            li.innerHTML = `
                <a href="${item.link}" target="_blank">
                    <img src="${item.img}">
                    ${item.nombre}
                </a>
            `;

            lista.appendChild(li);
        });

        contenedor.appendChild(titulo);
        contenedor.appendChild(lista);
    });