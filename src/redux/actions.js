import {database, auth, googleProvider} from '../database/config'
export function startAddingPost(post){
    return(dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(() => {
            //dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingPost() {
    return(dispatch) => {
        return database.ref().child('posts').on('value', snapshot => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPosts(posts))
        })
    }
}

export function startRemovingPost(index, id) {
 
    const updates = {
     [`posts/${id}`]: null,
     [`comments/${id}`]: null
    }
    
    return (dispatch) => {
        return database.ref().update(updates).then(() => {
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startAddingComment(comment, postId){
    return(dispatch) => {
        return database.ref('comments/'+postId).push(comment).then(() => {
            dispatch(addComment(comment, postId))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingComments(){
    return(dispatch) => {
        return database.ref('comments').once('value').then((snapshot) => {
            let comments = {}
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function loadComments(comments){
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}

export function removePost(index){
    return{
        type: 'REMOVE_POST',
        index: index
    }
 }

export function addPost(post){
    return{
       type: 'ADD_POST',
       post: post
    }
}

export function addComment(comment, postId){
    return{
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts){
    return {
        type: 'LOAD_POSTS',
        posts
    }
}

export function LoginWithFirebase(email, password){
    return(dispatch) => {
        return auth.signInWithEmailAndPassword(email, password).catch(function(error) {
            alert(error.message)
        }).then(() => {
            console.log(auth.currentUser);
            dispatch(setUserData(auth.currentUser))
        })
    }
}

export function LoginWithGoogle(){
    return(dispatch) => {
        return auth.signInWithPopup(googleProvider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log('User from Google');
            console.log(JSON.stringify(user));
            dispatch(setUserData(user))
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(JSON.stringify(error));
          });
    }
}

export function startTesting(){
    return(dispatch) => {
        return auth.onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              console.log('user login')
              dispatch(setUserData(user))
            } else {
              // User is signed out.
              console.log('user signed out')
            }
          });
    }
}

export function setUserData(user){
    return{
        type: 'SET_LOGGED_USER',
        user
    }
}