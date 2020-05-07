async function populateModalHTML(button) {

    let planet_url = button.dataset.planet;
    const firstResponse = await fetch(planet_url);
    const firstJson = await firstResponse.json();
                            let output = document.createElement('div');
                output.classList.add('modal-pp');
                output.innerHTML = `<button class="close-btn" id="close-btn">
                                      <i class="fa fa-times"></i>
                                      </button>`;
    output.innerHTML += `<h2>${firstJson.name}</h2>`;
    // console.log(output);
    for (let resident of firstJson.residents) {
        const resident1 = await fetch(resident);
           const residentJson = await resident1.json();
           output.innerHTML += `<h4>${residentJson.name}</h4>`;
    }
    return output
}


async function init() {
    let resButtons = document.getElementsByClassName('res-button');
    for (let button of resButtons) {

        button.addEventListener('click', async (e) => {
            // console.log("add button");
            // e.preventDefault();
            // e.stopPropagation();
            // let planet_url = e.target.dataset.planet;
            let modal_container = document.getElementById("modal-container-pp");

            const content =  await populateModalHTML(e.target)
            modal_container.appendChild(content);

            //Make modal visible
            modal_container.classList.add("show-modal");



            //Close modal functionality

            //Closing modal by clicking on button
            let closeButton = document.getElementById('close-btn')
            closeButton.addEventListener('click',(e)=>{
                modal_container.classList.remove('show-modal')
                modal_container.removeChild(modal_container.lastChild)
            });
            //Closing modal by clicking anywhere outside modal
            window.addEventListener('click', (e) => {
                if (e.target == modal_container) {
                    modal_container.classList.remove('show-modal')
                    modal_container.removeChild(modal_container.lastChild)
                }
            })

            // const test1 = await request();
            // console.log( test1);

        })
    }
}
init();