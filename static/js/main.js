// async function getResidents(button){
//     let planet_url = button.dataset.planet;
//     const result = await fetch(planet_url)
//         .then(res => res.json());
//     console.log(result);
//     return result;
//
// }

async function init(){
    let resButtons = document.getElementsByClassName('res-button');
    for(let button of resButtons){
        button.addEventListener('click', (e) => {
                console.log("add button");
            // e.preventDefault();
            // e.stopPropagation();
            let planet_url = e.target.dataset.planet;
            // let something =  getResidents(e.target);
            fetch(planet_url)
                .then(res=> res.json())
                .then(data=>{
                    console.log(data)
                    let planetName = data.name
                    let output = document.createElement('div')
                     output.innerHTML= `<div class="modal" id="${planetName}-residents">
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
</div>`;
            document.body.appendChild(output);
                })



                ;
            // let planetName = something.name;
            // let residents_url = something.residents;
    // console.log(planet_url);


        })
    }
}
init();