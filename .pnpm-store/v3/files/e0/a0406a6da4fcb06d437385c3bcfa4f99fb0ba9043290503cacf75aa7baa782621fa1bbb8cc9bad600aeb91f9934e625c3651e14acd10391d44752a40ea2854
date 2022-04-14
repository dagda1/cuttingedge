const extractColorStyle = (color) => {
    if (color.a === 0) {
        return "transparent";
    }
    else if (color.a < 1) {
        return `rgba(${rgbToIntArray(color).join(", ")}, ${color.a.toFixed(2)})`;
    }
    else {
        return rgbToHex(color);
    }
};
const extractGradientColorStyle = (color) => {
    return new Gradient(color).cssColor;
};
export class Gradient {
    constructor(data) {
        this.gradientHandles = {
            start: data.gradientHandlePositions[0],
            end: data.gradientHandlePositions[1],
        };
        this.colors = data.gradientStops;
        this.colorObjects = this.createColorObjects(this.colors);
        this.angle = this.calculateAngle(this.gradientHandles.start, this.gradientHandles.end);
    }
    get cssGradientArray() {
        return this.colorObjects.map((color, index) => {
            const position = this.floatToPercent(this.colors[index].position);
            return color + " " + position;
        });
    }
    get cssColor() {
        const cssGradientArray = this.cssGradientArray;
        cssGradientArray.unshift(this.angle + "deg");
        return `linear-gradient(${cssGradientArray.join(", ")})`;
    }
    createColorObjects(colors) {
        return colors.map(({ color }) => extractColorStyle(color));
    }
    floatToPercent(value) {
        return (value *= 100).toFixed(0) + "%";
    }
    calculateAngle(startHandle, endHandle) {
        const radians = Math.atan(this.calculateGradient(startHandle, endHandle));
        return parseInt(this.radToDeg(radians).toFixed(1));
    }
    calculateGradient(startHandle, endHandle) {
        return ((endHandle.y - startHandle.y) / (endHandle.x - startHandle.x)) * -1;
    }
    radToDeg(radian) {
        return (180 * radian) / Math.PI;
    }
}
export class NodeStyles {
    constructor(node) {
        var _a, _b, _c;
        this.hasPadding = false;
        this.height = `${Math.trunc(node.absoluteBoundingBox.height)}px`;
        this.width = `${Math.trunc(node.absoluteBoundingBox.width)}px`;
        // paddings
        if (node.horizontalPadding || node.verticalPadding) {
            this.hasPadding = true;
            this.horizontalPadding = `${node.horizontalPadding}px`;
            this.verticalPadding = `${node.verticalPadding}px`;
        }
        // font styles
        if (node.style) {
            this.fontFamily = node.style.fontFamily;
            this.fontPostScriptName = (_a = node.style.fontPostScriptName) === null || _a === void 0 ? void 0 : _a.replace("-", " ");
            this.fontWeight = node.style.fontWeight;
            this.fontSize = `${Math.ceil(node.style.fontSize)}px`;
            this.lineHeight = `${Math.trunc(node.style.lineHeightPx)}px`;
        }
        // border radii
        if (node.rectangleCornerRadii) {
            this.borderRadius =
                node.rectangleCornerRadii.filter((radius) => radius === node.cornerRadius).length < 4
                    ? `${node.rectangleCornerRadii.join("px ")}px`
                    : `${node.cornerRadius}px`;
        }
        // colors, background, fill
        if (node.backgroundColor || node.backgroundColor) {
            const color = node.backgroundColor || ((_b = node.background) === null || _b === void 0 ? void 0 : _b[0].color);
            this.background = extractColorStyle(color);
        }
        const fillColor = (_c = node.fills) === null || _c === void 0 ? void 0 : _c[0];
        if (fillColor && fillColor.visible !== false) {
            if (node.type === "TEXT") {
                this.color = extractColorStyle(fillColor.color);
            }
            else if (fillColor.type.includes("GRADIENT")) {
                this.backgroundImage = extractGradientColorStyle(fillColor);
            }
            else if (fillColor.type === "SOLID") {
                this.background = extractColorStyle(fillColor.color);
            }
        }
        // borders
        if (node.strokes && node.strokes.length > 0) {
            this.borderColor = extractColorStyle(node.strokes[0].color);
            this.border = `${node.strokeWeight}px solid ${this.borderColor}`;
        }
        // box-shadow
        if (node.effects && node.effects.length > 0) {
            const { offset, radius, color } = node.effects[0];
            this.boxShadowColor = extractColorStyle(color);
            this.boxShadow = `${(offset === null || offset === void 0 ? void 0 : offset.x) || 0}px ${(offset === null || offset === void 0 ? void 0 : offset.y) || 0}px 0 ${radius} ${this.boxShadowColor}`;
        }
    }
    getStyles() {
        return [
            this.height && { property: "height", value: this.height },
            this.width && { property: "width", value: this.width },
            this.fontFamily && { property: "font-family", value: this.fontFamily },
            this.fontSize && { property: "font-size", value: this.fontSize },
            this.fontWeight && { property: "font-weight", value: this.fontWeight },
            this.lineHeight && { property: "line-height", value: this.lineHeight },
            this.borderRadius && {
                property: "border-radius",
                value: this.borderRadius,
            },
            this.backgroundImage && {
                property: "background-image",
                value: this.backgroundImage,
            },
            this.boxShadow && {
                property: "box-shadow",
                value: this.boxShadow,
                color: this.boxShadowColor,
            },
            this.border && {
                property: "border",
                value: this.border,
                color: this.borderColor,
            },
            this.background && {
                property: "background",
                value: this.background,
                color: this.background,
            },
            this.color && { property: "color", value: this.color, color: this.color },
        ].filter(Boolean);
    }
    getStyleSheet() {
        return this.getStyles().map(getStyleRule).join("\n");
    }
}
const rgbToIntArray = (color) => [
    Math.trunc(255 * color.r),
    Math.trunc(255 * color.g),
    Math.trunc(255 * color.b),
];
const rgbToHex = (color) => {
    const [r, g, b] = rgbToIntArray(color);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
export const getStyleRule = ({ property, value }) => `${property}: ${value};`;
