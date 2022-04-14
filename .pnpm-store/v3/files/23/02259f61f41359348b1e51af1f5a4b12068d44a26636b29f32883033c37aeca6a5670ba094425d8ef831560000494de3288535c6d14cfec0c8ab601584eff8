"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = exports.StylesSection = exports.View = void 0;
const lit_element_1 = require("lit-element");
const copy = require("copy-to-clipboard");
const Icons_1 = require("../Icons");
const utils_1 = require("./utils");
exports.View = ({ node, onClose }) => {
    if (!node) {
        return null;
    }
    const nodeStyles = new utils_1.NodeStyles(node);
    // In order to disable canvas interactions (e.g. pan, click to
    // deselect), we need to cancel JavaScript event propagation
    // on the root element.
    const stopPropagation = (ev) => ev.stopPropagation();
    return lit_element_1.html `
    <div
      class="inspector-view"
      @click=${stopPropagation}
      @wheel=${stopPropagation}
      @keydown=${stopPropagation}
      @keyup=${stopPropagation}
      @pointermove=${stopPropagation}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${node.name}</h4>
          ${Icons_1.CloseIcon({ onClick: onClose })}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${nodeStyles.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${nodeStyles.height}
            </p>
          </div>
          ${nodeStyles.fontPostScriptName
        ? lit_element_1.html `<p class="inspector-property">
                <span>Font:</span>
                ${nodeStyles.fontPostScriptName}
              </p>`
        : null}
        </div>
      </div>
      ${nodeStyles.hasPadding
        ? lit_element_1.html `<div class="inspector-section">
            <h4>Layout</h4>
            ${nodeStyles.horizontalPadding &&
            lit_element_1.html `<p class="inspector-property">
              ${Icons_1.HorizontalPaddingIcon()} ${nodeStyles.horizontalPadding}
            </p>`}
            ${nodeStyles.verticalPadding &&
            lit_element_1.html `<p class="inspector-property">
              ${Icons_1.VerticalPaddingIcon()} ${nodeStyles.verticalPadding}
            </p>`}
          </div>`
        : null}
      ${node.characters
        ? lit_element_1.html `<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${Icons_1.CopyIcon({ onClick: () => copy(node.characters) })}
            </div>
            <p class="node-content code-section selectable-content">
              ${node.characters}
            </p>
          </div>`
        : null}
      ${exports.StylesSection(nodeStyles)}
    </div>
  `;
};
exports.StylesSection = (nodeStyles) => {
    const onClick = () => copy(nodeStyles.getStyleSheet());
    const styles = nodeStyles.getStyles();
    return lit_element_1.html `<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${Icons_1.CopyIcon({ onClick })}
    </div>
    <div class="code-section selectable-content">
      ${styles.map(CSSProperty)}
    </div>
  </div>`;
};
const CSSProperty = (cssProperty) => {
    const { property, value, color } = cssProperty;
    let coloredSquare = null;
    switch (property) {
        case "background":
        case "fill":
        case "border":
        case "box-shadow":
        case "color":
            coloredSquare = lit_element_1.html `<span
        class="color-preview"
        style="background-color: ${color}"
      ></span>`;
            break;
        case "background-image":
            coloredSquare = lit_element_1.html `<span
        class="color-preview"
        style="background-image: ${value}"
      ></span>`;
            break;
    }
    return lit_element_1.html `<div class="css-property" @click=${() => copy(utils_1.getStyleRule(cssProperty))}>
    <span>${property}:</span>${coloredSquare}<span class="css-value">${value}</span>;</span>
  </div>`;
};
exports.styles = lit_element_1.css `
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`;
