export const render = (html: string): ExecFileOptionsWithStringEncoding => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Cutting-Edge Solutions (Scotland)</title>
        </head>
        <body>
            <div id="root">${html}
            </div>
            <script src="/assets/client.js"></script>
        </body>
    </html>
`;
