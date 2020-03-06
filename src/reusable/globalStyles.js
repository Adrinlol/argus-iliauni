import { createGlobalStyle } from "styled-components";

import antd from "antd/dist/antd.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Styles = createGlobalStyle`
    @import ${antd};

    body, html {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
    }

    h1 { 
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`;

export default Styles;
