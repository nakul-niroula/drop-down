import {LitElement, html, css} from 'lit-element';

import './auto-complete';

/**
 * <my-app> Component description here.
 *
 * @customElement
 * @litElement
 * @polymer
 */
class MyApp extends LitElement {
  /**
   * The styles for the component.
   *
   * @returns {Array}
   */
  static get styles() {
    return [
      css`
        .drop-down-wrapper {
          margin: 40px;
          width: 500px;
          height: 600px;
          border: 2px solid black;
          padding: 20px;
        }
      `,
    ];
  }

  /**
   * Static getter properties.
   *
   * @returns { Object }
   */
  static get properties() {
    return {};
  }

  /**
   * Constructor for the component.
   * Binding and props initialization.
   */
  constructor() {
    super();

    this.options = [
      {id: 1, name: 'Nakul1'},
      {id: 2, name: 'Nakul2'},
      {id: 3, name: 'Nakul3'},
      {id: 4, name: 'Nakul4'},
      {id: 5, name: 'Nakul5'},
      {id: 6, name: 'Nakul6'},
      {id: 7, name: 'Nakul7'},
      {id: 8, name: 'Nakul8'},
      {id: 9, name: 'Nakul9'},
      {id: 10, name: 'Nakul10'},
    ];
  }

  /**
   * Renders the component.
   *
   * @returns {HTMLElement}
   */
  render() {
    return html` <div class="drop-down-wrapper">
      <auto-complete
        selectBy="id"
        displayBy="name"
        label="nakul"
        .options="${this.options}"
        .onChange="${this.onchange}"
      >
      </auto-complete>
    </div>`;
  }

  onchange(a) {
    console.log(a);
  }
}

customElements.define('my-app', MyApp);
