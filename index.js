document.addEventListener("DOMContentLoaded", () => {
  // console.log("hello")
  loadUsers();
  const form = document.querySelector("#addUserForm");
  form.addEventListener("submit", addUserFormSubmitted);
});

const loadUsers = async () => {
  try {
    const usersList = document.querySelector("#usersList");
    usersList.innerHTML = "";
    const response = await axios.get(`http://localhost:3000/users/all`);
    // debugger;
    response.data.users.forEach(user => {
      let listItem = document.createElement("li");
      listItem.innerText = `${user.firstname} ${user.lastname},  ${user.age}`;
      usersList.appendChild(listItem);
    });
  } catch (err) {
    console.log(err);
  }
};

const addUserFormSubmitted = event => {
  event.preventDefault();
  const firstnameInput = document.querySelector("#firstNameInput").value;
  const lastnameInput = document.querySelector("#lastNameInput").value;
  const ageInput = document.querySelector("#ageInput").value;
  debugger;
  let response = axios.post("http://localhost:3000/users/register", {
    firstname: firstnameInput.value,
    lastname: lastnameInput.value,
    age: ageInput.value
  });
//   debugger;

  //   firstnameInput.innerHTML = "";
  //   lastnameInput.innerHTML = "";
  //   ageInput.innerHTML = "";

  loadUsers();
};

const postsByUser = async () => {
try {

} catch (err) {
    console.log(err)
}
}
