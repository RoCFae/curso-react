import React, { useState } from "react";
import "./Mega.css"


export default (props) => {

    function gerarNumerosNaoContido(max, min, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min

        return array.includes(aleatorio) ?
            gerarNumerosNaoContido(min, max, array) :
            aleatorio;
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde).fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumerosNaoContido(1, 60, nums)

                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div class="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label htmlFor="">Qtde de numeros</label>
                <input 
                    min="6"
                    max="15"
                    type="number" 
                    value={qtde}
                    onChange={(e) => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(qtde))
                    }}
                />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Numeros</button>
        </div>
    )
}


