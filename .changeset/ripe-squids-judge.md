---
'@cutting/use-get-parent-size': patch
---

Fix useParentSize creating a new ResizeObserver on every resize. The hook now reads the ref in an effect, observes once, and throws a clear error when the ref is not attached to an element.
