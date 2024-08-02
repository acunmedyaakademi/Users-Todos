async function handleUser() {
  const { users } = await fetch("https://dummyjson.com/users").then((res) =>
    res.json()
  );
  return users;
}

async function handleUserTodos(userId) {
  const { todos } = await fetch(
    `https://dummyjson.com/users/${userId}/todos`
  ).then((res) => res.json());
  return todos;
}

async function render() {
  const users = await handleUser();

  for (let user of users) {
    const todos = await handleUserTodos(user.id);
    usersContainer.innerHTML += `<div class='userBox'><div class="user">
      <h4>${
        user.firstName
      }  <span>${user.lastName.toLocaleUpperCase()}</span></h4>
      <p><b>Age:</b> ${user.age}</p>
      <p><b>Gender:</b> ${user.gender}</p>
      <p><b>Email:</b> ${user.email}</p>
      <p><b>Phone Number:</b> ${user.phone}</p>
      <p><b>Address:</b> ${user.address.address}- ${user.address.state} - 
      ${user.address.city}- 
      ${user.address.country}
      </p>
     

    </div>
    ${todos
      .map(
        (x) =>
          `<div class="todos"><p><b>Todos:</b> <span>${x.todo}:</span> <b> ${x.completed} </b></p></div>`
      )
      .join("")}</div>`;
  }
}

render();
