Ext.define('ExtComponents.view.textfields.RadioGroup', {
    extend: 'Ext.window.Window',
    
    xtype : 'extcomponents-radiogroup', 
   
    shadow: true,
    frame: true,
    width: 400,
    title: 'CheckBox Group',
    modal: true,
    autoshow: true,
    closable:true,
  

    items: [
        {
            xtype: 'fieldset',
            title: 'CheckBox Group',
            items: [
                {
                    xtype:'radiogroup',
                    height:100,
                    vertical:true,
                    items:[
                        {
                            label: 'Option A',
                            checked: true,
                            name: 'fieldName',
                            value: 'Option A'
                        },
                        {
                            label: 'Option B',
                            checked: false,
                            value: 'Option B'
                        },
                        {
                            label: 'Option C',
                            checked: true,
                            value: 'Option C'
                        }
                    ]
                }
            ],
            buttons: [
                {
                    text: 'close',
                    handler: function () {
                        this.getView().destroy()
                    }
                }
            ]
        }
    ]
});