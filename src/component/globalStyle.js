import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
address, caption, cite, code, dfn, em, strong, th, var, b {
  font-weight: normal;
  font-style: normal;
}
abbr, acronym {
  border: 0;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  text-size-adjust: 100%;
  box-sizing: border-box;
}
body {
    line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
q {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption, th {
  text-align: left;
}
textarea {
  resize: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
button {
  padding: 0;
  border: none;
  background: none;
}
`;

export const GlobalStyle = createGlobalStyle`
*:focus {
    outline: none;
  }

  input {
    outline: none;
    border: none;
  }

  html,
  body {
    margin: 0px;
  }

  body {
    font-size:20px;
    font-family: "Noto Sans TC", "微軟正黑體", "新細明體", arial, sans-serif;
    /* background: linear-gradient(
    120deg,
    rgba(242, 141, 162, 0.7) 0%,
    rgba(237, 126, 149, 1) 25%,
    rgba(229, 98, 126, 1) 49%,
    rgba(228, 79, 110, 1) 76%,
    rgba(227, 65, 99, 1) 100%
  );  */
    background: rgb(255,201,163);
    background: linear-gradient(160deg, rgba(255,201,163,1) 0%, rgba(213,106,127,1) 100%); 
    background-repeat: no-repeat; 
    min-height: 100vh
  }

  form {
    margin: 0px;
    padding: 0px;
  }

  a {
    text-decoration: none;
    color: rgb(112, 112, 112);
  }

  input,
  select,
  img {
    vertical-align: middle;
  }

`;
