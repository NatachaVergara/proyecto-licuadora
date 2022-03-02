
/**Le agrego la clase active a navbar para el toggle en modo celular */
let navbar = document.querySelector(".navbar")

let menuButton = document.getElementById("menu")

menuButton.addEventListener('click', () => {

    navbar.classList.toggle('active');

})

/**Navbar Links JSON */
const navbarLink = document.querySelector('.navbar ul')
fetch('navbarLinks.json')
    .then(resp => resp.json())
    .then(data => {
        data.map(link => {
            navbarLink.innerHTML +=
                `           
                    <li>
                    <a href=${link.href} target="_blank" >${link.text} </a>
                    </li>        
                `
        })


    })




/**Links Cards JSON */

const containerSection = document.querySelector('.cards-links')



fetch('cardsLinks.json')
    .then(resp => resp.json())
    .then(data => {
        data.map(card => {
            containerSection.innerHTML += `
        <div class="card">
                        <div class="content">
                            <div class="imgBx">
                                <img src=${card.img}>
                            </div>
                            <div class="contentBx">
                                <h3>${card.h3}  </h3>
                            </div>
                        </div>
                        <ul class="sci">
                            <li>
                                <a href=${card.linkProyecto} target="_blank">Link</a>
                            </li>
                            <li>
                                <a href=${card.linkTutorial} target="_blank" >Tutorial</a>
                            </li>
                            <li>
                                <a href=${card.repositorioGit} target="_blank" >Repositorio</a>
                            </li>
                        </ul>
                    </div>`
        })
    })
