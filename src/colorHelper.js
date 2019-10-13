import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
function generatePalette(starterPalette) {
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    }
    //iterate each level as colors' key and put empty array as value
    for (let level of levels) {
        newPalette.colors[level] = [];
    }
    //iterate color, get 10 scale from white to dark, iterate scale index, push new color obj to matched color level 
    for (let color of starterPalette.colors) {
        let scale = getScale(color.color, 10).reverse();
        for (let i in scale) {
            newPalette.colors[levels[i]].push(
                {
                    name: `${color.name} ${levels[i]}`,
                    //get id value: Bee keeper => beekeeper
                    id: color.name.toLowerCase().replace(/ /g, "-"),
                    hex: scale[i],
                    rgb: chroma(scale[i]).css(),
                    rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0"),
                }
            )
        }
    }
    return newPalette;
}
//get scale color range: dark -> color -> white
function getRange(color) {
    const end = '#fff';
    return [chroma(color)
        .darken(1.4)
        .hex(),
        color,
        end]
}
//get scale color
function getScale(color, numberOfScale) {
    return chroma.scale(getRange(color)).mode('lab').colors(numberOfScale)
}
export { generatePalette };