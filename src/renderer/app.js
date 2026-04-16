async function loadUsers() {
  const res = await window.api.getUsers()

  const list = document.getElementById('list')
  list.innerHTML = ''

  res.data.forEach(user => {
    const li = document.createElement('li')
    li.innerText = user.name || user.email
    list.appendChild(li)
  })
}
