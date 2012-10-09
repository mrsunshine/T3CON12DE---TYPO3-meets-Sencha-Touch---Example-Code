/*
 * File: app/store/Pages.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent
 * license. License of Sencha Architect does not include license for Sencha
 * Touch 2.0.x. For more details see http://www.sencha.com/license or contact
 * license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('T3.store.Pages', {
	extend: 'Ext.data.Store',

	requires: [
		'T3.model.Page', 'Ext.data.proxy.JsonP'
	],

	config: {
		model: 'T3.model.Page',
		storeId: 'Pages',
		autoLoad: true,
		proxy: {
			type: 'jsonp',
			extraParams: {
				id: 51,
				type: 1001
			},
			url: 'http://typo3.local/typo3senchatouch/',
			reader: {
				type: 'json',
				idProperty: 'uid',
				rootProperty: 'items'
			}
		}
	}
});