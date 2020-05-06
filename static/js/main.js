
function init() {
    let resButtons = document.getElementsByClassName('res-button');
    for (let button of resButtons) {
        document.body.innerHTML +=`<div class="modal" id="${button.dataset.planet_name}-residents">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Residents of ${button.dataset.planet_name}</h4>
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


        button.addEventListener('click', (e) => {
            console.log("add button");
             e.preventDefault();
             e.stopPropagation();
            let planet_url = e.target.dataset.planet;
            fetch(planet_url)
            .then(res=> res.json())
                .then(resJSON => {
                    console.log(resJSON.name);
                })
            //     .then(data=>{
            //         console.log(data)
            //         let planetName = data.name
            //         let output = document.createElement('div')
            //          output.innerHTML= ``;
            // document.body.appendChild(output);
            //     })

            // let planetName = something.name;
            // let residents_url = something.residents;
            // console.log(planet_url);


        });
    }
}
init();