async function populateModalHTML(button) {

    let planet_url = button.dataset.planet;
    // let planet_url2 = planet_url.replace('http','https')
    const firstResponse = await fetch(planet_url);
    const firstJson = await firstResponse.json();
                            let output = document.createElement('div');
                            let outputContent = ''
                output.classList.add('modal-pp');
                outputContent = `<button class="close-btn" id="close-btn">
                                      <i class="fa fa-times"></i>
                                      </button>`;
    outputContent += `<h2>Residents of ${firstJson.name}</h2>
                        <table class="table table-hover table-bordered text-center">
                        <thead class="thead-primary">
<!--                                                <table class="">-->
<!--                        <thead class="">-->
                            <tr>
                                <th>Name</th>
                                <th>Height</th>
                                <th>Mass</th>
                                <th>Skin color</th>
                                <th>Hair color</th>
                                <th>Eye color</th>
                                <th>Birth year</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>`;
console.log(firstJson.residents);
        for (let resident of firstJson.residents) {
            let resident_with_https = await resident.replace('http','https');
            console.log(resident_with_https);
            const resident1 = await fetch(resident_with_https);
            alert(resident_with_https);
            const residentJson = await resident_with_https.json();
            outputContent += `<tr>
                                    <td>${residentJson.name}</td>
                                    <td>${residentJson.height}</td>
                                    <td>${residentJson.mass}</td>
                                    <td>${residentJson.skin_color}</td>
                                    <td>${residentJson.hair_color}</td>
                                    <td>${residentJson.eye_color}</td>
                                    <td>${residentJson.birth_year}</td>
                                    <td>${residentJson.gender}</td>
                                </tr>`;
        }

    outputContent += `</tbody>
                        </table>`;

    output.innerHTML = outputContent;
    return output
}


async function init() {
    let inactivePrevButton = document.getElementsByClassName('disabled');
    for (let prevButton of inactivePrevButton){
        prevButton.addEventListener('click', (e)=> {
            e.preventDefault();
            e.stopPropagation();
        })
    }

    let resButtons = document.getElementsByClassName('res-button');
    for (let button of resButtons) {

        button.addEventListener('click', async (e) => {
            // console.log("add button");
            // e.preventDefault();
            // e.stopPropagation();
            // let planet_url = e.target.dataset.planet;
            let modal_container = document.getElementById("modal-container-pp");

            const content =  await populateModalHTML(e.target);
            modal_container.appendChild(content);

            //Make modal visible
            modal_container.classList.add("show-modal");



            //Close modal functionality

            //Closing modal by clicking on button
            let closeButton = document.getElementById('close-btn');
            closeButton.addEventListener('click',(e)=>{
                modal_container.classList.remove('show-modal');
                modal_container.removeChild(modal_container.lastChild)
            });
            //Closing modal by clicking anywhere outside modal
            window.addEventListener('click', (e) => {
                if (e.target == modal_container) {
                    modal_container.classList.remove('show-modal');
                    modal_container.removeChild(modal_container.lastChild)
                }
            })



        })
    }
}


init();