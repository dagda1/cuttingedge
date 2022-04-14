"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatIssueLocation = exports.compareIssueLocations = void 0;
const issue_position_1 = require("./issue-position");
function compareIssueLocations(locationA, locationB) {
    if (locationA === locationB) {
        return 0;
    }
    if (!locationA) {
        return -1;
    }
    if (!locationB) {
        return 1;
    }
    return ((0, issue_position_1.compareIssuePositions)(locationA.start, locationB.start) ||
        (0, issue_position_1.compareIssuePositions)(locationA.end, locationB.end));
}
exports.compareIssueLocations = compareIssueLocations;
function formatIssueLocation({ start, end }) {
    if (!end.line || start.line === end.line) {
        // the same line
        if (!end.column || start.column === end.column) {
            // the same column
            return `${start.line}:${start.column}`;
        }
        else {
            // different column
            return `${start.line}:${start.column}-${end.column}`;
        }
    }
    else {
        // different lines
        return `${start.line}:${start.column}-${end.line}:${end.column}`;
    }
}
exports.formatIssueLocation = formatIssueLocation;
