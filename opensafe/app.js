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

const chatUI = document.querySelector('#chat');
const chatsContainer = document.querySelector('#chats-container');
let messagesContainer = document.querySelector('#messages-container');
const landingPage = document.querySelector('#landing-page');
const appContainer = document.querySelector('#app-container');



const scrollTop = () => scrollTo(0,0);


// register users and create userDocument
registerForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = registerForm.email.value;
  const password = registerForm.password.value;
  const username = registerForm.username.value;

  createUserWithEmailAndPassword(auth, email, password).then((credentials) => {
    console.log('User ID is ' + credentials.user.uid);
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
  }).catch((error) => {
    console.log(error.code);
    console.log(error.message);
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
    console.log('User has logged in: ' + credentials.user.uid);
    logInForm.reset()
    landingPage.style.display = 'none';
    appContainer.style.display = 'block';
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  })
  scrollTop();
})

//change user password
resetPasswordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = resetPasswordForm.email.value
  
  sendPasswordResetEmail(auth, email).then(() => {
    console.log('Password reset email sent')
    resetPasswordForm.reset()
  }).catch((error) => {
    console.log(error.code);
    console.log(error.message);
  })
})

// log out users
logOutBtn.addEventListener('click', () => {
  const userID = auth.currentUser.uid;

  const userChats = query(chatsRef, where('members', 'array-contains', userID), orderBy("created_at", "desc"));
  const userMessages = query(messagesRef, where('senderID', '==', userID));

  getDocs(userChats).then((snapshot) => {
    
    snapshot.forEach((chat) => {
      const chatID = chat.id;

      const chatCreation = chat.data().created_at.seconds / 60 / 60/* /24 */;
      //console.log('Chat created: ' + chatCreation);

      const now = new Date;
      const nowInHours = Date.parse(now) / 1000 / 60 / 60/* /24 */;
      //console.log('Date from today: ' + nowInHours);

      const chatRef = doc(chatsRef, chatID);

      if (chatCreation + 2 <= nowInHours) {
        deleteDoc(chatRef)
        console.log('Chat deleted after 2 hours');
      }
    })
    console.log('Checked chats to delete')
  })

  getDocs(userMessages).then((snapshot) => {
    snapshot.forEach((message) => {
      const messageCreation = message.data().created_at.seconds / 60 / 60/* /24 */;

      const now = new Date();
      const nowInHours = Date.parse(now) / 1000 / 60 / 60/* /24 */;

      const messageRef = doc(messagesRef, message.id);

      if (messageCreation + 2 <= nowInHours) {
        deleteDoc(messageRef)
        console.log('Message deleted after 2 hours');
      }
    })
    console.log('Checked messages to delete')
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
    })

  })
  scrollTop();
})
















// Gets chats and messages if user is logged in, and deletes documents after certain time
onAuthStateChanged(auth, (user) => {
  if (user) {
    landingPage.style.display = 'none';
    const userID = user.uid;

    const userChats = query(chatsRef, where('members', 'array-contains', userID), orderBy("created_at", "desc"));
    const userMessages = query(messagesRef, where('senderID', '==', userID));

    // real time listener for chats, and also deletes them
    onSnapshot(userChats, (snapshot) => {
      if (snapshot.docs.length > 0) {
        chatsContainer.innerHTML = '';
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
      snapshot.forEach((chat) => {
        const chatID = chat.id;

        const chatCreation = chat.data().created_at.seconds / 60 / 60;

        const now = new Date;
        const nowInHours = Date.parse(now) / 1000 / 60 / 60;

        const chatRef = doc(chatsRef, chatID);
        const chatNames = chat.data().membersNames;
        //console.log(chatMembers);

        if (chatCreation + 2 <= nowInHours) {
          deleteDoc(chatRef)
          console.log('Chat deleted after 2 hours');
        }

        chatNames.forEach((member) => {

          if (member != userID) {
            const otherUser = member;
            chatsContainer.innerHTML += `
              <div class="chats" id="${chatID}">
                ${otherUser}
              </div>
            `
          }
          
        })

        /* chatsContainer.innerHTML += `
          <div class="chats" id="${chatID}">
            ${chatID}
            <p>Ultimo mensaje...</p>
          </div>
        ` */

      })
      console.log("Current chats from user: ", snapshot.docs.length);
    })

    // Checks messages and deletes them
    getDocs(userMessages).then((snapshot) => {
      snapshot.forEach((message) => {
        const messageCreation = message.data().created_at.seconds / 60 / 60/* /24 */;

        const now = new Date();
        const nowInHours = Date.parse(now) / 1000 / 60 / 60/* /24 */;

        const messageRef = doc(messagesRef, message.id);

        if (messageCreation + 2 <= nowInHours) {
          deleteDoc(messageRef)
          console.log('Message deleted after 2 hours');
        }
      })
      console.log('Checked messages to delete')
    })

  } else {
    appContainer.style.display = 'none';
  }
})























escucharChatBtn.addEventListener('click', () => {
  if(auth.currentUser){
    const userID = auth.currentUser.uid;

    //MATCHMAKING AT ESCUCHAR-CHAT
    const userRef = doc(usersRef, userID);
    updateDoc(userRef, {
      escuchar: true
    })

    const waitMatch = setTimeout(() => {
      console.log('Could not find any match, try again')
      matchmaking();
      updateDoc(userRef, {
        escuchar: false
      })
    }, 30000)

    const matches = query(chatsRef, where('members', 'array-contains', userID), where('ended', '==', false))
    const matchmaking = onSnapshot(matches, (snapshot) => {

      //console.log('Here is the new snapshot' + snapshot);

      console.log('Listener for matches')

      const matchedChat = snapshot.docs[0].data();
      const matchedChatID = snapshot.docs[0].id;

      if (matchedChat) {
        console.log(matchedChat);
        updateDoc(userRef, {
          escuchar: false,
          inChat: true
        })
        matchmaking();
        console.log('Stopped real time listener');
        clearTimeout(waitMatch);
        console.log('Stopped timeout');


        chatUI.style.display = 'flex'
        appContainer.style.display = 'none'

        console.log('DONE, Chat ID is ' + matchedChatID);

        const chatID = matchedChatID;
        const chatMessages = query(messagesRef, where('chatID', '==', chatID), orderBy("created_at", "asc"));

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

              /* let containerHeight = document.querySelector('#messages-container')
              containerHeight.scrollIntoView(false); */


              //console.log('Doc added has: ' + change.doc.data().text)
            }
          })
          console.log('Message inserted.');
          //messagesContainer.scrollIntoView();
          //scrollTo(0, messagesContainer.scrollHeight)
        })

        // send new message
        messageInputForm.addEventListener('submit', (e) => {
          e.preventDefault();

          const messageText = messageInputForm.text.value;

          const senderID = auth.currentUser.uid;
          console.log('Sender ID is: ' + senderID)

          const senderDoc = doc(usersRef, senderID);
          console.log(senderDoc);

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
              console.log('message created');
              messageInputForm.reset();
            })

          } else {
            console.log('No puede enviar un mensaje vacío');
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
            messagesListener();
            endChatByOther();

            const userRef = doc(usersRef, userID);
            updateDoc(userRef, {
              inChat: false
            })

            messagesContainer.innerHTML = ''
            chatUI.style.display = 'none'
            appContainer.style.display = 'block'
            console.log('Chat Ended By Other user.');
          }
        })
      }
      console.log('Search made')
    })

  } else {
    console.log('User is not logged in');
  }
})








// Creates Chat, real time listconsole.log(snapshot.doc[Math.floor()*numberResults]ener for messages, input and send messages
// finish chat
expresarChatBtn.addEventListener('click', () => {
  if(auth.currentUser) {
    const userID = auth.currentUser.uid;

    //MATCHMAKING AT EXPRESAR-CHAT
    const userRef = doc(usersRef, userID);
    updateDoc(userRef, {
      ser_escuchado: true
    })

    const waitMatch = setTimeout(() => {
      console.log('Could not find any match')
      searchMatchInterval();
      updateDoc(userRef, {
        ser_escuchado: false
      })
    }, 30000)

    const matches = query(usersRef, where('escuchar', '==', true), where('inChat', '==', false), where('online', '==', true))
    const searchMatchInterval = onSnapshot(matches, (snapshot) => {

      console.log('Listener for matches')
      // get the number of results
      const numberResults = snapshot.docs.length;
      //console.log(Math.floor(Math.random() * numberResults))
      //console.log(snapshot.docs[0].data())

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
  
            chatUI.style.display = 'flex'
            appContainer.style.display = 'none'
            
            console.log('DONE, Chat ID is ' + document.id);
      
            const chatID = document.id;
            const chatMessages = query(messagesRef, where('chatID', '==', chatID), orderBy("created_at", "asc"));
        
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
  
                  /* let containerHeight = document.querySelector('#messages-container')
                  containerHeight.scrollIntoView(false); */
  
  
                  //console.log('Doc added has: ' + change.doc.data().text)
                }
              })
              console.log('Message inserted.');
              //messagesContainer.scrollIntoView();
              //scrollTo(0, messagesContainer.scrollHeight)
            })
      
            // send new message
            messageInputForm.addEventListener('submit', (e) => {
              e.preventDefault();
      
              const messageText = messageInputForm.text.value;
      
              const senderID = auth.currentUser.uid;
              console.log('Sender ID is: ' + senderID)
      
              const senderDoc = doc(usersRef, senderID);
              console.log(senderDoc);
      
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
                  console.log('message created');
                  messageInputForm.reset();
                })
      
              } else {
                console.log('No puede enviar un mensaje vacío');
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
                messagesListener();
                endChatByOther();
  
                const userRef = doc(usersRef, userID);
                updateDoc(userRef, {
                  inChat: false
                })
  
                messagesContainer.innerHTML = ''
                chatUI.style.display = 'none'
                appContainer.style.display = 'block'
                console.log('Chat Ended By Other user.');
              }
            })
          })
        })
      }
      console.log('Search made')

    })

    /* const searchMatch = onSnapshot(matches, (snapshot) => {
      const numberResults = snapshot.docs.length;

      if (numberResults > 0) {
        const randomDoc = snapshot.docs[Math.floor(Math.random() * numberResults)]
        clearTimeout(waitMatch)
        searchMatch();
      }
    }) */
  } else {
    console.log('User is not logged in');
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
      console.log('Messages inserted.');
    })
    //end chat by click
    endChatBtn.addEventListener('click', () => {
      
      messageInputForm.style.display = 'flex'
      messagesContainer.innerHTML = ''
      chatUI.style.display = 'none'
      appContainer.style.display = 'block'
      console.log('Back to the chat list');

    })
  }
})