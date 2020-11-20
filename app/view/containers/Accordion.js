Ext.define('ExtComponents.view.containers.Accordion', {
    extend: 'Ext.window.Window',
    

    xtype : 'extcomponents-accordion', 

    
    shadow: true,
    frame: true,
    width: 400,
    title: 'Accordion',
    modal: true,
    autoshow: true,
    closable:true,

    layout: 'accordion',
    items: [
        {
            xtype:'container',
            items: [{
                title: 'User Register',
                html: 'Panel 1 html content'
            }, {
                title: 'Inventory',
                html: 'Panel 2 html content'
            }, {
                title: 'Panel 3',
                html: 'Panel 3 html content'
            }, {
                title: 'Panel 4',
                html: 'Panel 4 html content'
            }, {
                title: 'Panel 5',
                html: 'Panel 5 html content'
            }]
        }
    ]
});