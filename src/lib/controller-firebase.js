
export const signIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const signUp = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const addPost = (textNewNote, userUid, userName, userPhoto, titulo, distrito) => {
  return firebase.firestore().collection('posts').add({
    name: userName,
    profilePicUrl: userPhoto,
    userId: userUid,
    date: firebase.firestore.FieldValue.serverTimestamp(),
    anonimo: 'Anónimo',
    tipo: 'Acoso Callejero',
    titulo: titulo,
    descripcion: textNewNote,
    direccion: 'AV. Tomas Marsano 139',
    distrito: distrito,
    telefono: '2230234',
    latitud: '-12.104838',
    longitud: '-77.018224'
   
  });
};
const filtroDistrito = document.getElementById('filtrar-distrito');
export const getPost = (callback) => {
  firebase.firestore().collection('posts').orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      const arrPosts = [];
      querySnapshot.forEach((doc) => {
        arrPosts.push({ id: doc.id, ...doc.data() });
      });
      
      if (filtroDistrito.value === 'Distrito'){
        callback(arrPosts);
       }else {         
        const arr1 = arrPosts.filter(post => post.distrito === filtroDistrito.value);
        callback(arr1);     
       }
      
    });
};

export const countLike = (objtPost) => {
  const counter = parseInt(objtPost.likeCounter) + 1;
  return firebase.firestore().collection('posts').doc(objtPost.id).update({
    likeCounter: counter
  });
};
export const editPost = (objtPost, txtEditPost, valShare) => {
  firebase.firestore().collection('posts').doc(objtPost.id).update({
    'descripcion': txtEditPost,
    'typeShare': valShare
  });
};

export const deletePost = (id) => {
  firebase.firestore().collection('posts').doc(id).delete();
};

