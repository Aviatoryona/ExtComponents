Ext.define('ExtComponents.view.main.LayoutContainers', {
  extend: 'Ext.panel.Panel',

  xtype: 'extcomponents-layoutcontainers',
  requires: ['Ext.MessageBox'],

  items: [
    {
      xtype: 'containerfield',
      name: 'mycontainer',
      scrollable: true,
      padding: 36,
      layout: 'vbox',
      items: [
        {
          xtype: 'button',
          text: 'Vbox',
          shadow: true,
          handler: function () {
            Ext.widget('extcomponents-vbox').show()
          }
        },

        {
          xtype: 'spacer',
          width: 50
        },

        {
          xtype: 'button',
          text: 'Hbox',
          handler: function () {
            Ext.widget('extcomponents-hbox').show()
          }
        },

        {
          xtype: 'spacer',
          width: 50
        },

        {
          xtype: 'button',
          text: 'Column',
          handler: function () {
            Ext.widget('extcomponents-column').show()
          }
        },

        {
          xtype: 'spacer',
          width: 50
        },

        {
          xtype: 'button',
          text: 'Border',
          handler: function () {
            Ext.Msg.alert('See Tab 3 below');
          }
        },

        {
          xtype: 'spacer',
          width: 50
        },

        {
          xtype: 'button',
          text: 'Absolute',
          handler: function () {
            Ext.widget('extcomponents-absolute').show()
          }
        },

        {
          xtype: 'spacer',
          width: 50
        },

        {
          xtype: 'button',
          text: 'Accordion',
          handler: function () {
            Ext.widget('extcomponents-accordion').show()
          }
        },

        {
          xtype: 'spacer',
          width: 50
        },
        
        {
          xtype: 'button',
          text: 'Card',
          handler: function () {}
        },
        {
          xtype: 'spacer',
          width: 50
        },
        {
          xtype: 'button',
          text: 'Box',
          handler: function () {}
        },
        {
          xtype: 'spacer',
          width: 50
        },
        {
          xtype: 'button',
          text: 'Center',
          handler: function () {}
        },
        {
          xtype: 'spacer',
          width: 50
        }
      ]
    }
  ]
})
