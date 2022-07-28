import Head from 'next/head'

export default ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Free bootstrap template Atlas" />
                <link rel="icon" href="img/favicon.png" sizes="32x32" type="image/png" />
                <link rel="stylesheet" href="/css/custom.css" />
                <link rel="stylesheet" href="/css/common.css" />
                <link rel="stylesheet" href="/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/font-awesome-4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="/css/aos.css" />
                <link rel="stylesheet" href="/b-icon/font/bootstrap-icons.css" />
                <link href = '/img/logo.png' rel = 'shortcut icon' />
                <title>Bootstrap Template Atlas</title>
            </Head>
            <Component className = "po-rel" style = {{zIndex: 0}} {...pageProps} />
            <div id = '__popup'></div>
        </>
    )
}
