import '@brightspace-ui/core/components/button/button.js';
import 'd2l-tabs/d2l-tabs.js';
import './my-cpd-records';
import './add-cpd-record';
import './pending-records';
import { css, html, LitElement } from 'lit-element/lit-element.js';
import { BaseMixin } from '../mixins/base-mixin.js';

class Cpd extends BaseMixin(LitElement) {

	static get properties() {
		return {
			page: {
				type: String
			}
		};
	}

	static get styles() {
		return css``;
	}

	navigateToAddCpd() {
		this.page = 'add-cpd-record';
	}

	navigateToMyCpd() {
		this.page = 'my-cpd-records';
	}

	render() {
		if (this.page === 'add-cpd-record') {
			return html`
				<d2l-add-cpd-record @d2l-navigate-my-cpd="${this.navigateToMyCpd}"><d2l-add-cpd-record>
			`;
		}
		return html`
			<d2l-tabs>
				<d2l-tab-panel
					text="${this.localize('lblCPDHeader')}"
					?selected=${(!this.page || this.page === 'my-records')}
					>
					<d2l-my-cpd-records @d2l-navigate-add-cpd="${this.navigateToAddCpd}"></d2l-my-cpd-records>
				</d2l-tab-panel>
				<d2l-tab-panel
					text="${this.localize('lblPendingRecords')}"
					?selected=${this.page === 'pending-records'}
					>
					<d2l-pending-records></d2l-pending-records>
				</d2l-tab-panel>
			</d2l-tabs>
		`;
	}
}
customElements.define('d2l-cpd', Cpd);
