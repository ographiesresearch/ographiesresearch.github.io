import { type StylesModel } from '@ts/Models'

import * as stylesRaw from 'src/sass/_variables.module.scss';
const styles:StylesModel = Object(stylesRaw);

function hexToRGB(hex:string) {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}

function isLight(rgbColor:number[]) {
    const [r,g,b] = rgbColor;
    let hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))
    return hsp > 127.5 ? true : false;
}
const light = isLight(hexToRGB(styles.danger));

export const baseColor = light ? 'has-background-success' : 'has-background-danger';