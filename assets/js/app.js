// alert("hello js");

let cl = console.log;

let moviecards = document.getElementById("moviecards");

let result = '';

movieArray.forEach(function(movie){
    result += `
                <div class="col-md-3">
                <div class="card mb-4">
                    <figure class="moviecontainer">
                    <img  class="img-fluid" src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}" alt="">
                        <figcaption>
                            <div class="heading">
                                <div class="row">
                                    <div class="col-sm-10">
                                        <h3> ${movie.title}</h3>
                                    </div>
                                    <div class="col-sm-2 d-flex align-items-center">
                                        <span class="badge badge-warning">${movie.vote_average}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="overview">
                                <h4><em>overview</em></h4>
                                <p>${movie.overview}</p>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
    
            `;
})

moviecards.innerHTML=result;






