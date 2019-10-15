(function () {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAoqsjJuIQb7MVZFN_ZSahaPy4mUw5k_Zk",
    authDomain: "telegram-js-api.firebaseapp.com",
    databaseURL: "https://telegram-js-api.firebaseio.com",
    projectId: "telegram-js-api",
    storageBucket: "telegram-js-api.appspot.com",
    messagingSenderId: "8141950768",
    appId: "1:8141950768:web:e01a293092bef7799802f5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get Referense to DataBase
  const db_ref = firebase.database().ref('/');

  // Send Data to Firebase Data Storage
  const sendUserData = ({ name, phone, email }) => {
    db_ref.push({
      user_id: 1,
      name,
      phone,
      email,
    });
  }

  // submit Form
  const onSubmitForm = event => {
    if (event.preventDefault) event.preventDefault();

    const successMessage = document.getElementById('successMessage');

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    sendUserData({ name, phone, email });

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';

    form.classList.add('hidden');
    successMessage.classList.remove('hidden');

    setTimeout(() => {
      form.classList.remove('hidden');
      successMessage.classList.add('hidden');
    }, 5000);
    
    return false;
  }

  const form = document.querySelector('#contactsForm');

  if (form.attachEvent) {
    form.attachEvent('submit', onSubmitForm);
  } else {
    form.addEventListener('submit', onSubmitForm);
  }
}());
