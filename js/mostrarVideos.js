import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');

function constroicard(titulo, descricao, url, imagem) {
    const video = document.createElement('li');
    video.classList.add('videos__item')
    video.innerHTML = `
    <li class="videos__item">
            <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
        </li>
        `
        return video;
}

async function listaVideo() {
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(constroicard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
}
listaVideo();