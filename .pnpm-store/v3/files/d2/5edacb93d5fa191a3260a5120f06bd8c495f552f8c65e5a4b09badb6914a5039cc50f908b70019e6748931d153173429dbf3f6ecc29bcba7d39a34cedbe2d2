"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = exports.styles = void 0;
const lit_element_1 = require("lit-element");
const Icons_1 = require("../Icons");
const utils_1 = require("./utils");
exports.styles = lit_element_1.css `
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`;
exports.Footer = (metadata) => {
    // Do not render in case there is no metadata or a link is not passed
    if (!metadata ||
        !metadata.link ||
        metadata.link === undefined ||
        metadata.link === "undefined") {
        return null;
    }
    const { link, timestamp, fileName } = metadata;
    return lit_element_1.html `<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${link}"
  >
    <span class="figma-footer--icon"> ${Icons_1.FigmaIcon()} </span>
    <span class="figma-footer--title"> ${fileName} </span>
    <span
      title="Last time edited: ${new Date(timestamp).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${utils_1.fromNow(timestamp)}
    </span>
  </a>`;
};
