import type { FC } from 'react';

export const GATagManager: FC<{ gaId: string }> = ({ gaId }) => {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  gtag('js', new Date());
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${gaId}');

  function insertCallback(parent, funcname, callback, ...args) {
    let oldFunc = parent[funcname] ? parent[funcname] : function () { }
    parent[funcname] = function () {
      oldFunc.apply(this, arguments)
      return callback(...args)
    }
  }

  function notify_analytics(l) {
    let newPage = l.pathname + l.hash
     // replace ${gaId} into your id
     gtag('config', '${gaId}', { 'page_path': newPage }); 
   }

   insertCallback(window.history, "pushState", notify_analytics, location)
   insertCallback(window.history, "replaceState", notify_analytics, location)
      `,
        }}
      />
    </>
  );
};
