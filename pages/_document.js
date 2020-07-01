import Document, { Head, Main, NextScript } from 'next/document'

class Inicial extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
                </Head>
                <body >
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default Inicial