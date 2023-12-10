import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, push, child, set } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQi0p_rGoCnn-OCjL5MAKwdojxePUEbyI",
  authDomain: "wedding-rsvp-7cec3.firebaseapp.com",
  projectId: "wedding-rsvp-7cec3",
  storageBucket: "wedding-rsvp-7cec3.appspot.com",
  messagingSenderId: "899894574723",
  appId: "1:899894574723:web:2903e5d5edab2f3df325b6",
  measurementId: "G-9X5S92GTYG"
};

// Firebase 초기화
initializeApp(firebaseConfig);

// Firebase 데이터베이스 참조
const database = getDatabase();

// 폼 제출 이벤트 리스너
document.getElementById('rsvp-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const attending = document.getElementById('attending').value;

    saveGuest(name, phone, attending)
        .then(() => {
            alert("참석 여부가 정상적으로 제출되었습니다. 감사합니다!");
            document.getElementById('rsvp-form').reset();
        })
        .catch(() => {
            alert("제출에 실패했습니다. 나중에 다시 시도해 주세요.");
        });
}

// Firebase 데이터베이스에 데이터 저장
function saveGuest(name, phone, attending) {
    const guestsRef = ref(database, 'guests');
    const newGuestRef = push(guestsRef);
    return set(newGuestRef, {
        name: name,
        phone: phone,
        attending: attending
    });
}

