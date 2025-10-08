import { filmes } from "../data/filmes.js"

function Home () {
    console.log(filmes)

    const primeiroFilme = filmes[5]
    const estiloImagem = {
            width: "300px"
    };

    return <>  
        <h1>Filmes</h1>

        <ul>
            <li>
                <p>Nome do filme:</p>

                <p>{ primeiroFilme.titulo }</p>
                <p>{ primeiroFilme.ano }</p>
                <p>{ primeiroFilme.genero }</p>
                <p>{ primeiroFilme.nota }</p>

                <img style={estiloImagem} src={primeiroFilme.poster}/>
            </li>
        </ul>

        </>
}

export default Home;