import { db, collection, addDoc, getDocs } from "./firebase.js";
const submit = document.getElementById("submit");
console.log({ db, collection, addDoc });

submit.addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  try {
    const docRef = await addDoc(collection(db, "users"), {
      username,
      email,
      phone,
    });
    // console.log("docRef: ", docRef);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => `,doc.data());
});
