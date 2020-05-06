async function getResidents(button){
    let planet_url = button.dataset.planet;
    const result = await fetch(planet_url)
        .then(res => res.json());
    console.log(result);
    return result;

}

function init(){
    let resButtons = document.getElementsByClassName('res-button')
    for(let button of resButtons){
        button.addEventListener('click', (e) => {
            let something = getResidents(e.target);
            let output= `<div class="modal" id="planets-residents">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Planet residents</h4>
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
</div`
        })
    }
}
init();