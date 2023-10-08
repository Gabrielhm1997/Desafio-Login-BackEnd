const greeting = document.getElementById("greeting")
const user = document.getElementById("user")
const email = document.getElementById("email")
const age = document.getElementById("age")
const logout = document.getElementById("logout")
const productsButton = document.getElementById("productsButton")
 
productsButton.innerHTML = `<a href="http://localhost:8080/static/products"><button> Productos </button></a>`
 
fetch(`http://localhost:8080/api/sessions/current`)
    .then(res => res.json())
    .then(res => {
        console.log(res)

        if (res.status) {

            greeting.innerHTML = `Bienvenido ${res.data.first_name}`
            user.innerHTML = `Usuario: ${res.data.first_name} ${res.data.last_name}`
            email.innerHTML = `Email: ${res.data.email}`
            age.innerHTML = `Edad: ${res.data.age}`

        } else {
            console.log(res.error)
        }
    })
    .catch(error => console.log(error))

logout.addEventListener("click", async () => {

    fetch(`http://localhost:8080/api/sessions/logout`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            window.location.reload()
        })
        .catch(error => console.log(error))
})