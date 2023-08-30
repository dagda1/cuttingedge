declare global {
  interface Document {
    webkitRequestFullscreen(): void;
    webkitFullscreenElement: unknown;
    webkitExitFullscreen(): void;
  }

  interface HTMLCanvasElement {
    webkitRequestFullscreen(): void;
  }
}
export function toggleFullScreen(canvas: HTMLCanvasElement): void {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (!document.fullscreenElement && canvas.requestFullscreen) {
    canvas.requestFullscreen();
  }

  // 👇 safari -> doesn't support the standard yet
  else if (document.webkitFullscreenElement) {
    document.webkitExitFullscreen();
  } else if (!document.webkitFullscreenElement && canvas.webkitRequestFullscreen) {
    canvas.webkitRequestFullscreen();
  }
}
