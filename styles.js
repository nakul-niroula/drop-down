import {css} from 'lit-element';
import {scrollerCSS} from './constants/cssMixins';

export default [
  scrollerCSS,
  css`
    :host {
      width: 100%;
      --color-activeBlue: #6071ed;
    }

    mwc-list {
      overflow: auto;
      max-height: 200px;
      background: white;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.12);
    }

    mwc-list-item {
      --mdc-theme-primary: blue;
    }

    iron-dropdown {
      height: 200px;
    }

    mwc-icon.chevron {
      color: grey;
    }

    :host([isInputOnFocus]) mwc-icon.chevron {
      color: blue;
    }

    .input-group {
      padding-top: 16px;
      margin-top: 8px;
      margin-bottom: 8px;
    }

    .editable-input-container {
      width: 100%;
      display: flex;
      position: relative;
      align-items: center;
      flex-wrap: wrap;
      flex-basis: 100%;
    }

    input {
      font-family: inherit;
      background: transparent;
      padding: 5px 0px 5px 0px;
      display: block;
      border: none;
      font-size: 1rem;
      width: 0;
      flex: 1 1;
      -webkit-box-flex: 1;
      -ms-flex: 1 1;
    }

    input:focus {
      outline: none;
    }

    input:required {
      box-shadow: none;
    }

    /* HELPER CLASSES ======================================= */
    .display-none {
      display: none;
    }

    .overflow-hidden {
      overflow: hidden;
    }

    .cursor-pointer {
      cursor: pointer;
    }

    .relative {
      position: relative;
    }

    .flex {
      display: flex;
      display: -webkit-flex;
    }

    .align-items-center {
      align-items: center;
    }

    /* LABEL ======================================= */
    label {
      position: absolute;
      left: 0px;
      color: blue;
      font-size: 1rem;
      font-weight: normal;
      pointer-events: none;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
      white-space: nowrap;
    }

    .flat-label {
      top: 5px;
    }

    .raised-label {
      top: -15px;
      font-size: 0.75rem;
    }

    .active-text {
      color: blue;
    }

    .active-bg {
      background: blue;
    }

    .error-text {
      color: red;
    }

    .error-bg {
      background: red;
    }

    .default-bg {
      background: grey;
    }

    div.selection-wrapper {
      font-weight: normal;
      white-space: nowrap;
      overflow: hidden;
      max-width: 90%;
      font-size: 1rem;
      padding: 5px 0px 5px 0px;
      margin-right: 5px;
    }

    /* BOTTOM BARS ================================= */
    .bar {
      content: '';
      width: 100%;
      height: 1px;
      display: block;
      position: relative;
    }

    .readonly-bar {
      border-bottom: 1px dashed grey;
    }

    .readonly-bar-solid {
      border-bottom: 1px solid grey;
    }

    .default-bar-hidden {
      width: 0;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    .bar-before,
    .bar-after {
      content: '';
      height: 2px;
      display: block;
      position: absolute;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    .bar-before {
      left: 50%;
    }

    .bar-after {
      right: 50%;
    }

    .bar-focusin {
      width: 50%;
    }

    .bar-focusout {
      width: 0;
    }

    /* PROGRESS BARS ================================= */
    .progress-line,
    .progress-line:before {
      height: 2px;
      width: 100%;
      margin: 0;
    }

    .progress-line {
      position: relative;
      background-color: blue;
      display: -webkit-flex;
      display: flex;
    }

    .progress-line:before {
      background-color: black;
      content: '';
      -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1)
        infinite;
      animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }

    @-webkit-keyframes running-progress {
      0% {
        margin-left: 0px;
        margin-right: 100%;
      }
      50% {
        margin-left: 25%;
        margin-right: 0%;
      }
      100% {
        margin-left: 100%;
        margin-right: 0;
      }
    }

    @keyframes running-progress {
      0% {
        margin-left: 0px;
        margin-right: 100%;
      }
      50% {
        margin-left: 25%;
        margin-right: 0%;
      }
      100% {
        margin-left: 100%;
        margin-right: 0;
      }
    }
  `,
];
