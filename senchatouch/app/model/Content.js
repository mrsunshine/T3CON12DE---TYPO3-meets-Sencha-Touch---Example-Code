/*
 * File: app/model/Content.js
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

Ext.define('T3.model.Content', {
	extend: 'Ext.data.Model',

	config: {
		fields: [
			{
				name: 'uid',
				type: 'int'
			}, {
				name: 'pid',
				type: 'int'
			}, {
				name: 'header',
				type: 'string'
			}, {
				name: 'bodytext',
				type: 'string'
			}, {
				name: 'ctype',
				mapping: 'CType',
				type: 'string'
			}, {
				name: 'images',
				mapping: 'image',
				convert: function(valueString, record) {
					var images = [];

					if (!Ext.isEmpty(valueString)) {
						images = valueString.split(',');
						images = Ext.Array.filter(
							images,
							function(value){
								return (value !== '');
							}
						);
					}
					return images;
				}
			}
		]
	}
});