Ext.define('App.view.tablet.group.Browse', {
    extend: 'App.view.group.Browse',
    // xtype: 'organizationbrowse', -- set by profile

    requires: [
        'Ext.plugin.ListPaging'
    ],

    controller: 'tablet-groupbrowse',

    tbar: {
        xtype: 'groupbrowsetoolbar'
    },

    items: [{
        xtype: 'grid',
        emptyText: 'No group was found to match your search',
        bind: '{organizations}',
        ui: 'listing',

        selectable: {
            disabled: true
        },

        plugins: [{
            type: 'listpaging',
            autoPaging: true
        }],

        columns: [{
            text: 'Check',
            dataIndex: 'name',
            //  flex: 2,
            cell: {
                encodeHtml: false
            },
            tpl: '<p>check</p>'
        }, {
            text: 'Name',
            dataIndex: 'name',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: '<a class="item-title" href="#{url}/edit">{name}</a>'
        }, {
            text: 'Active',
            dataIndex: 'manager.lastname',
            // flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<tpl for="manager">',
                '<i class="far fa-check-circle"></i>',
                '</tpl>'
            ]
        }, {
            text: 'Comment',
            dataIndex: 'headcount',
            flex: 1,
            cell: {
                encodeHtml: false
            },
            tpl: [
                '<a href="#people/group/{id}">',
                //'{headcount:plural("employee")}',
                '</a>'
            ]
        }, {

            text: 'Action',
            align: 'center',
            flex: 0.5,        
            hideable: false,
            cls: 'common-action',
            columns: [{
                align: 'right',
                editGroup: true,
                flex: 0.5,
                cell: {
                    encodeHtml: false
                },
                renderer: function (params) {
                    return '<i class="far fa-edit"></i>';
                }

            },
            {
                align: 'center',
                activeGroup: true,
                dataIndex: 'active',
                flex: 0.5,
                cell: {
                    encodeHtml: false
                },
                renderer: function (params) {
                    return '<i class="far fa-check-circle"></i>';
                }
            }, {
                align: 'left',
                deleteGroup: true,
                flex: 0.5,
                cell: {
                    encodeHtml: false
                },
                renderer: function (params) {
                    return '<i class="fas fa-trash-alt"></i>';
                }
            },
            ],
        },
        ],

        listeners: {
            childdoubletap: 'onChildActivate'
        }
    }]
});
