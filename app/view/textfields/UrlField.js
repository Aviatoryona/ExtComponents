Ext.define('ExtComponents.view.textfields.UrlField', {
    extend: 'Ext.window.Window',
    
    xtype : 'extcomponents-urlfield', 
     
    shadow: true,
    frame: true,
    width: 400,
    title: 'URL Field',
    modal: true,
    autoshow: true,
    closable:true,
  

    items: [
        {
            xtype: 'fieldset',
            title: 'URL Field',
            items: [
                {
                    xtype: 'urlfield',
                    label: 'URL Field',
                    allowBlank: false,
                    name: 'fieldName',
                    placeholder: 'Enter URL here...',
                    required: true,
                    errorMessage: 'Please URL a value'
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