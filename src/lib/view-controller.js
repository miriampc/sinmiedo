import { signIn, signUp, loginFacebook, loginGoogle, addPost, deletePost, editPost, countLike } from './controller-firebase.js';

const changeHash = (hash) => {
  location.hash = hash;
};
export const signUpOnSubmit = () => {
  const email = document.querySelector('#up-email').value;
  const password = document.querySelector('#up-password').value;
  signUp(email, password)
    .then(result => {
      alert('te acabamos de enviar un correo de confirmacion, por favor revisa tu bandeja de entrada');
      const urlMyPage = {
        url: window.location.href + '#/signIn'
      };
      result.user.sendEmailVerification(urlMyPage).catch(function(error) {
        alert('No se pudo enviar email');
      });
      firebase.auth().signOut();
    }).catch(function(error) {
      alert(error.message);
    });
};
export const signFacebook = () => {
  loginFacebook()
    .then(() => changeHash('/wall'))
    .catch(() => { });
};
export const signGoogle = () => {
  loginGoogle()
    .then(() => changeHash('/wall'))
    .catch(() => { });
};
export const signInOnSubmit = () => {
  const email = document.querySelector('#in-email').value;
  const password = document.querySelector('#in-password').value;
  signIn(email, password)
    .then(() => changeHash('/wall'))
    .catch(() => { });
};
export const showIn = () => {
  changeHash('/signIn');
};
export const showUp = () => {
  changeHash('/signUp');
};
export const addPostOnSubmit = (event) => {
  event.preventDefault();
  const authUserUid = firebase.auth().currentUser.uid;
  const authUserPhoto = firebase.auth().currentUser.photoURL;
  const authUserName = firebase.auth().currentUser.displayName;
  const input = document.getElementById('input-new-post');
  const titulo = document.getElementById('input-titulo');
  const distrito = document.getElementById('select-distrito');
 
  if (input.value !== '') addPost(input.value, authUserUid, authUserName, authUserPhoto, titulo.value, distrito.value);
  else alert('por favor escribe algo');
};

export const deletePostOnClick = (objPost) => {
  let answer = confirm('¿Estas seguro de eliminar?');
  if (answer == true) deletePost(objPost.id);
};

export const editPostOnClick = (objPost) => {
  const txtEditPost = document.getElementById(`txt-edit-post-${objPost.id}`);
  const selEditTypeShare = document.getElementById(`select-type-share-${objPost.id}`);
  
  editPost(objPost, txtEditPost.value, selEditTypeShare.value);
};

export const countLikeOnClick = (objtPost) => {
  countLike(objtPost);
};

