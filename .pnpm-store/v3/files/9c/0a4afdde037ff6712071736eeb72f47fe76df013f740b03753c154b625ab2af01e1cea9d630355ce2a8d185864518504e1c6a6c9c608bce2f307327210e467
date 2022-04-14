"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeSelectableMixin = void 0;
const lit_element_1 = require("lit-element");
exports.NodeSelectableMixin = (superClass) => {
    class NodeSelectable extends superClass {
        constructor(...args) {
            super(...args);
            this.selectedNode = null;
        }
        updated(changedProperties) {
            super.updated(changedProperties);
            if (changedProperties.has("selectedNode")) {
                this.dispatchEvent(new CustomEvent("nodeselect", {
                    detail: {
                        selectedNode: this.selectedNode,
                    },
                }));
            }
        }
    }
    __decorate([
        lit_element_1.property({
            attribute: false,
        })
    ], NodeSelectable.prototype, "selectedNode", void 0);
    return NodeSelectable;
};
