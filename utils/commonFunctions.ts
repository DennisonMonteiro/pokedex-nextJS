function capitalizeFirstLetter(pokemonName: string) {
    return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
}

function formatPokemonName(pokemonName: string) {
    let formattedPokemonName = ""
    if(pokemonName.includes("-")) {
        const pokemonSplittedName = pokemonName.split("-")
        formattedPokemonName = `${capitalizeFirstLetter(pokemonSplittedName[0])} ${capitalizeFirstLetter(pokemonSplittedName[1])} `
    }
    else {
        formattedPokemonName = capitalizeFirstLetter(pokemonName)
    }
    return formattedPokemonName
}

function formatHeight(height: number ) {
    const stringHeight = height.toString()
    return stringHeight.length === 1 ?
        stringHeight.substring(0, 0) + "0." + stringHeight.substring(0, stringHeight.length)
        :
        stringHeight.substring(0, stringHeight.length -1) + "." + stringHeight.substring(stringHeight.length -1, stringHeight.length)
}

export { capitalizeFirstLetter, formatPokemonName, formatHeight }