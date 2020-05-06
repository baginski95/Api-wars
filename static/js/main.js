async function getResidents(button){
    let planet_url = button.dataset.planet;
    const result = await fetch(planet_url)
        .then(res => res.json());
    return result;

}

function init(){
    let resButtons = document.getElementsByClassName('res-button');
    for(let button of resButtons){
        button.addEventListener('click', async (e) => {
            let something = await getResidents(e.target);
            let planetName = something.name;
            let residents_url = something.residents;
    console.log(planetName);

            let output= `<div class="modal" id="${planetName}-residents">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Residents of ${planetName}</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div`;
            document.body.innerHTML += output;
        })
    }
}
init();