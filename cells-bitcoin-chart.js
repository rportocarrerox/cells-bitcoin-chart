{
  const {
    html,
  } = Polymer;
  /**
    `<cells-bitcoin-chart>` Description.

    Example:

    ```html
    <cells-bitcoin-chart></cells-bitcoin-chart>
    ```

    ## Styling
    The following custom properties and mixins are available for styling:

    ### Custom Properties
    | Custom Property     | Selector | CSS Property | Value       |
    | ------------------- | -------- | ------------ | ----------- |
    | --cells-fontDefault | :host    | font-family  |  sans-serif |
    ### @apply
    | Mixins    | Selector | Value |
    | --------- | -------- | ----- |
    | --cells-bitcoin-chart | :host    | {} |

    * @customElement
    * @polymer
    * @extends {Polymer.Element}
    * @demo demo/index.html
  */
  class CellsBitcoinChart extends Polymer.Element {

    static get is() {
      return 'cells-bitcoin-chart';
    }

    static get properties() {
      return {
        categoriesBitcoin: {type: Array, notify: true},
        valuesBitcoin: {type: Array, notify: true}
      };
    }

    drawBitcoinChart(evt){
      let dataBitcoin = evt.detail;
      this.categoriesBitcoin = _formatTextData(dataBitcoin.dates);
      this.valuesBitcoin = _formatTextData(dataBitcoin.values);
    }

    _formatTextData(dataStr){
      let arrayStrs = [];
      dataStr.map(strValue => {
        let formatStr = '&quot;' + strValue + '&quot;';
        arrayStrs.push(formatStr);
      });

      return arrayStrs;
    }

    static get template() {
      return html `
      <vaadin-chart id="mychart" title="Price Bitcoin" subtitle="Per day" categories="[[categoriesBitcoin]]"> 
        <vaadin-chart-series values="[[valuesBitcoin]]"></vaadin-chart-series> 
        </vaadin-chart>
      `;
    }
  }

  customElements.define(CellsBitcoinChart.is, CellsBitcoinChart);
}