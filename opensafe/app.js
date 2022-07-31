// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { 
  getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, onAuthStateChanged,
  signOut, sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
import {
  getFirestore, collection, getDocs,
  getDoc, onSnapshot, addDoc, doc,
  deleteDoc, setDoc,
  query, orderBy, updateDoc, where,
  arrayUnion, arrayRemove
} from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js'
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBS0GUjGkIfREaWtDEKV1zxSvnPN8EtcfA",
  authDomain: "anon-chats.firebaseapp.com",
  projectId: "anon-chats",
  storageBucket: "anon-chats.appspot.com",
  messagingSenderId: "197976220976",
  appId: "1:197976220976:web:0f3c85182720cf440f54f5",
  measurementId: "G-BFG26EXRL2"
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// connect services
const db = getFirestore()
const auth = getAuth()

// collections references
const chatsRef = collection(db, 'chats');
const usersRef = collection(db, 'users');
const messagesRef = collection(db, 'messages');

// DOM elements
const registerForm = document.querySelector('#registerForm');
const logInForm = document.querySelector('#logInForm');
const resetPasswordForm = document.querySelector('#forgotPasswordForm');
const logOutBtn = document.querySelector('#logOutBtn');

const escucharChatBtn = document.querySelector('#escuchar-chat');
const expresarChatBtn = document.querySelector('#expresar-chat');

const messageInputForm = document.querySelector('#chat-input');
const endChatBtn = document.querySelector('#end-chat');
const chatMin = document.querySelector('#chat-minutes');
const chatSec = document.querySelector('#chat-seconds');

const chatUI = document.querySelector('#chat');
const chatsContainer = document.querySelector('#chats-container');
let messagesContainer = document.querySelector('#messages-container');
const landingPage = document.querySelector('#landing-page');
const appContainer = document.querySelector('#app-container');

const welcomeAnimation = document.querySelector('#welcome-animation');
const searchingAnimation = document.querySelector('#searching-animation');
const contextualMessage = document.querySelector('#contextual-message');
const bottomAd = document.querySelector('#bottom-ad');


const scrollTop = () => scrollTo(0,0);


// register users and create userDocument
registerForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = registerForm.email.value;
  const password = registerForm.password.value;
  const username = registerForm.username.value;

  createUserWithEmailAndPassword(auth, email, password).then((credentials) => {
    //console.log('User ID is ' + credentials.user.uid);
    setDoc(doc(usersRef, credentials.user.uid), {
      userID: credentials.user.uid,
      escuchar: false,
      ser_escuchado: false,
      inChat: false,
      online: true,
      userName: username, 
      created_at: new Date(),
    })
    console.log('El usuario esta en linea');
    registerForm.reset()
    landingPage.style.display = 'none';
    appContainer.style.display = 'block';
    scrollTop();

    // Mensaje contextual
    contextualMessage.innerHTML = 'Bienvenid@ a OpenSafe'
    contextualMessage.style.marginTop = '0'
    setTimeout(() => {
      contextualMessage.style.marginTop = '-100%'
    }, 3000)
  }).catch((error) => {
    console.log(error.code);
    console.log(error.message);

    // Mensaje contextual
    contextualMessage.innerHTML = 'Correo o contraseña no válidos'
    contextualMessage.style.marginTop = '0'
    setTimeout(() => {
      contextualMessage.style.marginTop = '-100%'
    }, 3000)
  })
})

// log in users
logInForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = logInForm.email.value
  const password = logInForm.password.value

  signInWithEmailAndPassword(auth, email, password)
  .then((credentials) => {
    const userRef = doc(usersRef, credentials.user.uid);
    updateDoc(userRef, {
      online: true
    }).then(() => {
      console.log('El usuario esta en linea');
    })
    //console.log('User has logged in: ' + credentials.user.uid);
    logInForm.reset()
    landingPage.style.display = 'none';
    appContainer.style.display = 'block';

    // Mensaje contextual
    contextualMessage.innerHTML = 'Bienvenid@ de vuelta'
    contextualMessage.style.marginTop = '0'
    setTimeout(() => {
      contextualMessage.style.marginTop = '-100%'
    }, 3000)
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);

    // Mensaje contextual
    contextualMessage.innerHTML = 'Correo o contraseña incorrectos'
    contextualMessage.style.marginTop = '0'
    setTimeout(() => {
      contextualMessage.style.marginTop = '-100%'
    }, 3000)
  })
  scrollTop();
})

//change user password
resetPasswordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = resetPasswordForm.email.value
  
  sendPasswordResetEmail(auth, email).then(() => {
    //console.log('Password reset email sent')
    resetPasswordForm.reset()

    // Mensaje contextual
    contextualMessage.innerHTML = 'Te enviamos un correo para cambiar tu contraseña.'
    contextualMessage.style.marginTop = '0'
    setTimeout(() => {
      contextualMessage.style.marginTop = '-100%'
    }, 3000)
  }).catch((error) => {
    console.log(error.code);
    console.log(error.message);
  })
})

// log out users
logOutBtn.addEventListener('click', () => {
  const userID = auth.currentUser.uid;

  const userChats = query(chatsRef, where('members', 'array-contains', userID), orderBy("created_at", "desc"));

  getDocs(userChats).then((snapshot) => {

    if (snapshot.docs.length > 0) {

      snapshot.forEach((chat) => {
        const chatID = chat.id;
        const userMessages = query(messagesRef, where('chatID', '==', chatID));

        const chatCreation = chat.data().created_at.seconds / 60 / 60/* /24 */;

        const now = new Date;
        const nowInHours = Date.parse(now) / 1000 / 60 / 60/* /24 */;

        const chatRef = doc(chatsRef, chatID);

        if (chatCreation + 24 <= nowInHours) {
          deleteDoc(chatRef)
          //console.log('Chat deleted after 24 hours');
        }

        getDocs(userMessages).then((snapshot) => {
          if (snapshot.docs.length == 0 && chatCreation + 1 <= nowInHours) {
            deleteDoc(chatRef)
          }

          snapshot.forEach((message) => {
            const messageCreation = message.data().created_at.seconds / 60 / 60/* /24 */;

            const now = new Date();
            const nowInHours = Date.parse(now) / 1000 / 60 / 60/* /24 */;

            const messageRef = doc(messagesRef, message.id);

            if (messageCreation + 24 <= nowInHours) {
              deleteDoc(messageRef)
              //console.log('Message deleted after 24 hours');
            }
          })
          console.log('Checked messages to delete')
        })

        console.log('Checked chats to delete')

      })

    } else {
      //console.log('There are no chats')
    }
    
  })

  const userRef = doc(usersRef, userID);
  updateDoc(userRef, {
    online: false
  }).then(() => {

    signOut(auth).then(() => {

      chatsContainer.innerHTML = '';
      appContainer.style.display = 'none';
      landingPage.style.display = 'block';
      //clearInterval(deletingDocs);
      console.log('User has logged out')

      // Mensaje contextual
      contextualMessage.innerHTML = 'Sesión terminada, hasta pronto &#10084;'
      contextualMessage.style.marginTop = '0'
      setTimeout(() => {
        contextualMessage.style.marginTop = '-100%'
      }, 4000)
    })

  })
  scrollTop();
})
















// Gets chats and messages if user is logged in, and deletes documents after certain time
onAuthStateChanged(auth, (user) => {
  if (user) {
    setTimeout(() => {
      chatUI.style.display = 'none';
      landingPage.style.display = 'none';
      welcomeAnimation.style.display = 'none'
    }, 2000)
    const userID = user.uid;
    const userRef = doc(usersRef, userID)

    const userChats = query(chatsRef, where('members', 'array-contains', userID), orderBy("created_at", "desc"));

    updateDoc(userRef, {
      escuchar: false,
      inChat: false,
      online: true,
      ser_escuchado: false,
    })

    getDoc(userRef).then((userDoc => {

      // real time listener for chats, and also deletes them
      onSnapshot(userChats, (snapshot) => {

        if (snapshot.docs.length > 0) {

          chatsContainer.innerHTML = '';

          snapshot.forEach((chat) => {
            const chatID = chat.id;
            const userMessages = query(messagesRef, where('chatID', '==', chatID));

            const chatCreation = chat.data().created_at.seconds / 60 / 60;

            const now = new Date;
            const nowInHours = Date.parse(now) / 1000 / 60 / 60;

            const chatRef = doc(chatsRef, chatID);
            const chatNames = chat.data().membersNames;

            // Checks messages and deletes them
            getDocs(userMessages).then((messages) => {
              if (messages.docs.length == 0 && chatCreation + 1 <= nowInHours) {
                deleteDoc(chatRef)
              }
              
              messages.forEach((message) => {
                const messageCreation = message.data().created_at.seconds / 60 / 60;

                /* const now = new Date();
                const nowInHours = Date.parse(now) / 1000 / 60 / 60; */

                const messageRef = doc(messagesRef, message.id);

                if (messageCreation + 24 <= nowInHours) {
                  deleteDoc(messageRef)
                  //console.log('Message deleted after 24 hours');
                }
              })
              console.log('Checked messages to delete')
            }).then(() => {
              if (chatCreation + 24 <= nowInHours) {
                deleteDoc(chatRef)
                //console.log('Chat deleted after 24 hours');
              }
            })

            chatNames.forEach((member) => {

              if (member != userDoc.data().userName) {
                const otherUser = member;
                chatsContainer.innerHTML += `
                <div class="chats" id="${chatID}">
                  ${otherUser}
                </div>
              `
              }

            })

            console.log('Checked chats to delete')

          })
        } else {
          chatsContainer.innerHTML = `
          <h3>
                Comienza a conectar con otras personas. <br>
                Puedes escuchar a alguien que lo necesita
                o puedes buscar alguien dispuesto a
                escucharte &#10084;. <br> <br>
                Las conversaciones duran máximo 10
                minutos y solo se puede tener una a la
                vez.
          </h3>
        `;
        }
        //console.log("Current chats from user: ", snapshot.docs.length);
      })

    }))

  } else {
    setTimeout(() => {
      chatUI.style.display = 'none';
      appContainer.style.display = 'none';
      welcomeAnimation.style.display = 'none'
    }, 2000)
  }
})























escucharChatBtn.addEventListener('click', () => {
  if(auth.currentUser){
    const userID = auth.currentUser.uid;

    // Animacion de busqueda
    searchingAnimation.style.display = 'flex'

    //MATCHMAKING AT ESCUCHAR-CHAT
    const userRef = doc(usersRef, userID);
    updateDoc(userRef, {
      escuchar: true
    })

    const waitMatch = setTimeout(() => {
      //console.log('Could not find any match, try again')
      searchingAnimation.style.display = 'none'
      matchmaking();
      updateDoc(userRef, {
        escuchar: false
      })

      // Mensaje contextual
      contextualMessage.innerHTML = 'No se encontró a otra persona, intenta otra vez'
      contextualMessage.style.marginTop = '0'
      setTimeout(() => {
        contextualMessage.style.marginTop = '-100%'
      }, 4000)
    }, 30000)

    const matches = query(chatsRef, where('members', 'array-contains', userID), where('ended', '==', false))
    const matchmaking = onSnapshot(matches, (snapshot) => {

      //console.log('Listener for matches')

      const matchedChat = snapshot.docs[0].data();
      const matchedChatID = snapshot.docs[0].id;

      if (matchedChat) {
        updateDoc(userRef, {
          escuchar: false,
          inChat: true
        })
        matchmaking();
        //console.log('Stopped real time listener');
        clearTimeout(waitMatch);
        //console.log('Stopped timeout');


        searchingAnimation.style.display = 'none'
        chatUI.style.display = 'flex'
        appContainer.style.display = 'none'

        //console.log('DONE, Chat ID is ' + matchedChatID);

        const chatID = matchedChatID;
        const chatMessages = query(messagesRef, where('chatID', '==', chatID), orderBy("created_at", "asc"));

        const maxTime = setTimeout(() => {
          clearInterval(timerUI)
          const chatRef = doc(chatsRef, chatID);
          updateDoc(chatRef, {
            created_at: new Date(),
            ended: true
          })
        }, 606000) // el extra 6 es para adaptarse al timer

        // Timer UI
        let seconds = 59;
        let minutes = 9;
        const timerUI = setInterval(() => {

          if (seconds == 59) {
            chatMin.innerHTML = minutes
          }

          if (seconds < 10) {
            chatSec.innerHTML = '0' + seconds;
          } else {
            chatSec.innerHTML = seconds;
          }

          if (seconds == 0) {
            minutes -= 1
            seconds = 60
          }

          seconds -= 1
        }, 1000)

        // real time listener for the chat
        const messagesListener = onSnapshot(chatMessages, (snapshot) => {
          const changes = snapshot.docChanges();
          changes.forEach((change) => {

            //const userName = 
            const texto = change.doc.data().text;
            const creador = change.doc.data().sender;

            const senderDoc = doc(usersRef, auth.currentUser.uid); 

            if (change.type === 'added') {

              getDoc(senderDoc).then((doc) => {
                const senderName = doc.data().userName;

                if (creador == senderName) {
                  $(messagesContainer).append(`
                      <div class="message-container" style="justify-content:flex-end">
                        <div class="message" style="color:var(--pink)">
                          ${creador}
                          <p>${texto}</p>
                        </div>
                      </div>
                    `);
                } else {
                  $(messagesContainer).append(`
                      <div class="message-container">
                        <div class="message">
                          ${creador}
                          <p>${texto}</p>
                        </div>
                      </div>
                    `);
                }

                // Esto hace que se haga scroll para ver los nuevos mensajes
                messagesContainer.scrollTop = messagesContainer.scrollHeight;

              })

            }
          })
          //console.log('Message inserted.');
        })

        // send new message
        messageInputForm.addEventListener('submit', (e) => {
          e.preventDefault();

          const messageText = messageInputForm.text.value;

          const senderID = auth.currentUser.uid;
          //console.log('Sender ID is: ' + senderID)

          const senderDoc = doc(usersRef, senderID);

          if (messageText != '') {

            getDoc(senderDoc).then((doc) => {
              //const chatID = chat.id;
              const senderName = doc.data().userName;

              addDoc(messagesRef, {
                chatID: chatID, //this is important for the query of messages
                text: messageText,
                sender: senderName,
                created_at: new Date(),
                senderID: auth.currentUser.uid
              })
              //console.log('message created');
              messageInputForm.reset();
            })

          } else {
            // Mensaje contextual
            contextualMessage.innerHTML = 'No se puede enviar un mensaje vacío'
            contextualMessage.style.marginTop = '0'
            setTimeout(() => {
              contextualMessage.style.marginTop = '-100%'
            }, 4000)

            //console.log('No puede enviar un mensaje vacío');
          }
        })

        const chatRef = doc(chatsRef, matchedChatID)

        //end chat by click
        endChatBtn.addEventListener('click', () => {

          const chatRef = doc(chatsRef, matchedChatID);
          updateDoc(chatRef, {
            created_at: new Date(),
            ended: true
          })

        })

        //end chat by doc data changed
        const endChatByOther = onSnapshot(chatRef, (document) => {
          const chatStatus = document.data().ended;
          if (chatStatus) {
            chatMin.innerHTML = 9;
            chatSec.innerHTML = 59;
            messagesListener();
            endChatByOther();
            clearTimeout(maxTime);
            clearInterval(timerUI);

            const userRef = doc(usersRef, userID);
            updateDoc(userRef, {
              inChat: false
            })

            messagesContainer.innerHTML = ''
            chatUI.style.display = 'none'
            appContainer.style.display = 'block'

            // Mensaje contextual
            contextualMessage.innerHTML = 'Conversación terminada'
            contextualMessage.style.marginTop = '0'
            setTimeout(() => {
              contextualMessage.style.marginTop = '-100%'
            }, 3000)
          }
        })
      }
      //console.log('Search made')
    })

  } else {
    console.log('User is not logged in, cannot do search');
  }
})








expresarChatBtn.addEventListener('click', () => {
  if(auth.currentUser) {
    const userID = auth.currentUser.uid;

    // Animacion de busqueda
    searchingAnimation.style.display = 'flex'

    //MATCHMAKING AT EXPRESAR-CHAT
    const userRef = doc(usersRef, userID);
    updateDoc(userRef, {
      ser_escuchado: true
    })

    const waitMatch = setTimeout(() => {
      console.log('Could not find any match')
      searchingAnimation.style.display = 'none'
      searchMatchInterval();
      updateDoc(userRef, {
        ser_escuchado: false
      })

      // Mensaje contextual
      contextualMessage.innerHTML = 'No se encontró a otra persona, intenta otra vez'
      contextualMessage.style.marginTop = '0'
      setTimeout(() => {
        contextualMessage.style.marginTop = '-100%'
      }, 4000)
    }, 30000)

    const matches = query(usersRef, where('escuchar', '==', true), where('inChat', '==', false), where('online', '==', true))
    const searchMatchInterval = onSnapshot(matches, (snapshot) => {

      //console.log('Listener for matches')
      // get the number of results
      const numberResults = snapshot.docs.length;

      if (numberResults > 0) {
        // choose a random document
        const randomDoc = snapshot.docs[Math.floor(Math.random() * numberResults)]
        clearTimeout(waitMatch)
        searchMatchInterval();

        //Create chat with both users
        const matchID = randomDoc.id;
        const matchName = randomDoc.data().userName;
        const userRef = doc(usersRef, userID);

        getDoc(userRef).then((userDoc) => {
          const userName = userDoc.data().userName;

          addDoc(chatsRef, {
            created_at: new Date(),
            ended: false,
            members: [userID, matchID],
            membersNames: [matchName, userName]
          }).then((document) => {
            updateDoc(userRef, {
              ser_escuchado: false,
              inChat: true
            })
  
            searchingAnimation.style.display = 'none'
            chatUI.style.display = 'flex'
            appContainer.style.display = 'none'
            
            //console.log('DONE, Chat ID is ' + document.id);
      
            const chatID = document.id;
            const chatMessages = query(messagesRef, where('chatID', '==', chatID), orderBy("created_at", "asc"));

            const maxTime = setTimeout(() => {
              const chatRef = doc(chatsRef, chatID);
              updateDoc(chatRef, {
                created_at: new Date(),
                ended: true
              })
            }, 606000)

            // Timer UI
            let seconds = 59;
            let minutes = 9;
            const timerUI = setInterval(() => {

              if (seconds == 59) {
                chatMin.innerHTML = minutes
              }

              if (seconds < 10) {
                chatSec.innerHTML = '0' + seconds;
              } else {
                chatSec.innerHTML = seconds;
              }

              if (seconds == 0) {
                minutes -= 1
                seconds = 60
              }

              seconds -= 1
            }, 1000)

            // real time listener for the chat
            const messagesListener = onSnapshot(chatMessages, (snapshot) => {
              const changes = snapshot.docChanges();
              changes.forEach((change) => {
      
                //const userName = 
                const texto = change.doc.data().text;
                const creador = change.doc.data().sender;
      
                const senderDoc = doc(usersRef, auth.currentUser.uid);
      
                if(change.type === 'added') {
      
                  getDoc(senderDoc).then((doc) => {
                    const senderName = doc.data().userName;
        
                    if (creador == senderName) {
                      $(messagesContainer).append(`
                        <div class="message-container" style="justify-content:flex-end">
                          <div class="message" style="color:var(--pink)">
                            ${creador}
                            <p>${texto}</p>
                          </div>
                        </div>
                      `);
                    } else {
                      $(messagesContainer).append(`
                        <div class="message-container">
                          <div class="message">
                            ${creador}
                            <p>${texto}</p>
                          </div>
                        </div>
                      `);
                    }
  
                    // Esto hace que se haga scroll para ver los nuevos mensajes
                    messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
                  })

                }
              })
              //console.log('Message inserted.');
            })
      
            // send new message
            messageInputForm.addEventListener('submit', (e) => {
              e.preventDefault();
      
              const messageText = messageInputForm.text.value;
      
              const senderID = auth.currentUser.uid;
              //console.log('Sender ID is: ' + senderID)
      
              const senderDoc = doc(usersRef, senderID);
      
              if (messageText != '') {
      
                getDoc(senderDoc).then((doc) => {
                  //const chatID = chat.id;
                  const senderName = doc.data().userName;
      
                  addDoc(messagesRef, {
                    chatID: chatID, //this is important for the query of messages
                    text: messageText,
                    sender: senderName,
                    created_at: new Date(),
                    senderID: auth.currentUser.uid
                  })
                  //console.log('message created');
                  messageInputForm.reset();
                })
      
              } else {
                // Mensaje contextual
                contextualMessage.innerHTML = 'No se puede enviar un mensaje vacío'
                contextualMessage.style.marginTop = '0'
                setTimeout(() => {
                  contextualMessage.style.marginTop = '-100%'
                }, 4000)

                //console.log('No puede enviar un mensaje vacío');
              }
            })
  
            const chatRef = doc(chatsRef, chatID)
      
            //end chat by click
            endChatBtn.addEventListener('click', () => {
              
              const chatRef = doc(chatsRef, chatID);
              updateDoc(chatRef, {
                created_at: new Date(),
                ended: true
              })
  
            })
  
            //end chat by doc data changed
            const endChatByOther = onSnapshot(chatRef, (document) => {
              const chatStatus = document.data().ended;
              if (chatStatus) {
                chatMin.innerHTML = 9;
                chatSec.innerHTML = 59;
                messagesListener();
                endChatByOther();
                clearTimeout(maxTime);
                clearInterval(timerUI);
  
                const userRef = doc(usersRef, userID);
                updateDoc(userRef, {
                  inChat: false
                })
  
                messagesContainer.innerHTML = ''
                chatUI.style.display = 'none'
                appContainer.style.display = 'block'

                // Mensaje contextual
                contextualMessage.innerHTML = 'Conversación terminada'
                contextualMessage.style.marginTop = '0'
                setTimeout(() => {
                  contextualMessage.style.marginTop = '-100%'
                }, 3000)
              }
            })
          })
        })
      }
      //console.log('Search made')

    })

  } else {
    console.log('User is not logged in, cannot do search');
  }
})












// Abrir conversaciones terminadas
chatsContainer.addEventListener('click', (e) => {
  //console.log(e.target);
  if (e.target.className == 'chats') {
    chatUI.style.display = 'flex'
    appContainer.style.display = 'none'
    messageInputForm.style.display = 'none'
    
    const chatID = e.target.id;

    const chatMessages = query(messagesRef, where('chatID', '==', chatID), orderBy("created_at", "asc"))
    getDocs(chatMessages).then((snapshot) => {
      if (snapshot.docs.length > 0) {
        snapshot.forEach((message) => {

          const texto = message.data().text;
          const creador = message.data().sender;
          const senderDoc = doc(usersRef, auth.currentUser.uid);

          getDoc(senderDoc).then((doc) => {
            const senderName = doc.data().userName;

            if (creador == senderName) {
              $(messagesContainer).append(`
                <div class="message-container" style="justify-content:flex-end">
                  <div class="message" style="color:var(--pink)">
                    ${creador}
                    <p>${texto}</p>
                  </div>
                </div>
              `);
            } else {
              $(messagesContainer).append(`
                <div class="message-container">
                  <div class="message">
                    ${creador}
                    <p>${texto}</p>
                  </div>
                </div>
              `);
            }

          })
        })
      }
      //console.log('Messages inserted.');
    })
    //end chat by click
    endChatBtn.addEventListener('click', () => {
      
      messageInputForm.style.display = 'flex'
      messagesContainer.innerHTML = ''
      chatUI.style.display = 'none'
      appContainer.style.display = 'block'
      //console.log('Back to the chat list');

    })
  }
})