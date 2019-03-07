import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Oswald:300,400,600,700');
  @import url('https://fonts.googleapis.com/css?family=Oxygen');


  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: calc(0.6em + 1vw);
    font-family: "Oswald", Impact, "Franklin Gothic Bold", sans-serif;
    line-height: 130%;
    box-sizing: border-box;
    overflow-y: scroll;
    background-color: #e5e5e5;

    @media (max-width: 991px) {
    font-size: calc(0.6em + 1.2vw);
    }
    @media (max-width: 767px) {
    font-size: calc(0.6em + 1.8vw);
    }
    @media (max-width: 479px) {
    font-size: calc(0.6em + 2.2vw);
  }
}




  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0em;
    margin: 0;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    background-color: hsl(0, 0%, 90%);
  }

  section {
    width: 100%;
    margin: 0 auto;
    padding: 0px;
    font-size: 1rem;
    align-items: center;
    text-align: center;

  }

  div {
    font-size: 1rem;
  }

 a {
  text-decoration: none;
  margin: 0;
  padding: 0;

  },
  a:active,
  a:hover {
    outline-width: 0;
  }

  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
    padding: 0;
    border-style: none;
  }

address {
  margin: 0 auto;
  padding: 0;
  text-align: center;
}

hr {
  padding: 0px;
  margin: 0px;
}

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  h1,
  h2,
  p {
    margin: 0px;
    padding: 0px;
    text-rendering: optimizeLegibility;
  }


  h3 {
    margin: 0;
    padding: 0;
    color: #1e2d51;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.7em;
  }
  h4 {
    margin-left: 0;
    margin: 0;
    padding: 0;
    color: #1e2d51;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.7em;
  }
  h5 {
    margin-left: 0;
    margin: 0;
    padding: 0;
    color: #1e2d51;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.6em;
  }
  h6 {
    margin-left: 0;
    margin: 0px;
    padding: 0px;
    text-rendering: optimizeLegibility;
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 100%;
    margin-bottom: -0.4em;
    margin-top: 0.5em;
  }



  ul {
    margin: 0 auto;
    list-style-type: none;
    margin: 0;
    padding: 0;
    list-style-position: outside;
    list-style-image: none;
  }

  ol {
    margin: 0;
    padding: 0;
    list-style-position: outside;
    list-style-image: none;
  }

  li {
    margin-bottom: calc(1.45rem / 2);
  }
  ol li {
    padding-left: 0;
  }
  ul li {
    padding-left: 0;
  }
  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }
  li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  li *:last-child {
    margin-bottom: 0;
  }
  p *:last-child {
    margin-bottom: 0;
  }
  li > p {
    margin-bottom: calc(1.45rem / 2);
  }

input[type=checkbox]
{
/* Double-sized Checkboxes */
-ms-transform: scale(2); /* IE */
-moz-transform: scale(2); /* FF */
-webkit-transform: scale(2); /* Safari and Chrome */
-o-transform: scale(2); /* Opera */
  padding: 10px;
}

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
    line-height: 2em;
  }
  optgroup {
    font-weight: 700;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type="reset"],
  [type="submit"],
  button,
  html [type="button"] {
    -webkit-appearance: button;
  }
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-input-placeholder {
    color: inherit;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }


  form {
   margin: 0;
   padding: 0;
  }
`;
