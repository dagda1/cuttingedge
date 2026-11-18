---
'@cutting/use-get-parent-size': patch
---

Fix useParentSize creating a new ResizeObserver on every resize. The hook now reads the ref in an effect and keeps one observer for each element. While the ref is not attached to an element, the hook returns `initialValues` and observes the element after the render that attaches it.
