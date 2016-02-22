import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';

class Html extends Component {
    render() {
        const {assets, component, store} = this.props;
        console.log(assets)
        const content = component ? ReactDOM.renderToString(component) : '';
        const head = Helmet.rewind();
        console.log(content)
        return (
            <html lang="en-us">
                <head>
                    {head.base.toComponent()}
                    {head.title.toComponent()}
                    {head.meta.toComponent()}
                    {head.link.toComponent()}
                    {head.script.toComponent()}

                    <link rel="shortcut icon" href="/favicon.ico" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </head>
                <body>
                    <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
                    <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} charSet="UTF-8"/>
                    <script src={assets.javascript.main} charSet="UTF-8"/>
                </body>
            </html>
        );
    }
}

Html.propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object
};

export default Html;

