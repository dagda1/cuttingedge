import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({});

globalStyle(`${container} iframe`, {
  height: "100%",
});
