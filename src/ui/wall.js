import { addPostOnSubmit, deletePostOnClick, countLikeOnClick, editPostOnClick } from '../lib/view-controller.js';
import {convertirFecha} from '../util/util.js';
const divPost = (objPost) => {
  const datePost = convertirFecha(objPost.date.toDate());
  const divElement = document.createElement('div');
  divElement.innerHTML = `
   <div id="arrpost" class="box"> 
      <div>    
        <span>${datePost}<span>
      </div>
      <span class="distrito">${objPost.distrito}</span>
      <p class="nombre">${objPost.name}<p>
      <p class="titular">${objPost.titulo}</p>
      <p class="informacion"> ${objPost.descripcion}</p>
      <a class="text-right leer-mas" href="#">LEER MÁS</a>
    </div>
   </div>    
  `;
  
  return divElement;
};

export default (arrPosts) => {
  const divContainer = document.createElement('div');
  const homeContent = `
  <header>
      
        
  </header>
  
  <!-- form add post -->
    <form id="add-post">
   
        <div> Hacer denuncia </div><br>
        
        <div>
              Ingresa un titulo <input id="input-titulo" placeholder="Titulo?"><br>
              descripcion<input id="input-new-post" placeholder="¿ denuncia?"><br>
              distrito <select id="select-distrito"><br>
                <option>Ancon</option>
                <option>Ate</option>
                <option>Barranco</option>
                <option>Breña</option>
                <option>Jesus Maria</option>
                <option>Villa Maria</option>
                
              </select>
        </div>
        
        <div>
              <button class="btn"> Foto/Video </button>
              <input id="input-photo" placeholder="¿Tienes alguna denunccia?">
              
        </div> 
        
        <button  id="btn-add-post" class="btn-sign">Publicar </button>
        
    </form>
  `;
  const post = `<section id="container-posts"></section>`;
  
  divContainer.innerHTML = post;
  // const buttonAddPost = divContainer.querySelector('#btn-add-post');
  const containerPosts = divContainer.querySelector('#container-posts');
  arrPosts.forEach(objPost => {
    containerPosts.appendChild(divPost(objPost));
  });
  // buttonAddPost.addEventListener('click', addPostOnSubmit);
  return divContainer;
};