import { addPostOnSubmit, deletePostOnClick, countLikeOnClick, editPostOnClick } from '../lib/view-controller.js';
import {convertirFecha} from '../util/util.js';

export default (arrPosts) => {
  const divContainer = document.createElement('div');
  const homeContent = `  
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
  
  divContainer.innerHTML = homeContent;
  const buttonAddPost = divContainer.querySelector('#btn-add-post');
  buttonAddPost.addEventListener('click', addPostOnSubmit);
  return divContainer;
};