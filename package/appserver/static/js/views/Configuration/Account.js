import {configManager} from 'app/util/configManager';
import {generateCollection} from 'app/util/backboneHelpers';

define([
    'jquery',
    'lodash',
    'backbone',
    'app/util/Util',
    'views/shared/tablecaption/Master',
    'app/views/component/Table',
    'app/views/component/EntityDialog',
    'app/collections/ProxyBase.Collection',
    'app/templates/common/ButtonTemplate.html'
], function (
    $,
    _,
    Backbone,
    Util,
    CaptionView,
    Table,
    EntityDialog,
    ProxyBase,
    ButtonTemplate
) {
    return Backbone.View.extend({
        initialize: function (options) {
            this.containerId = options.containerId;
            this.props = options.props;
            this.appData = configManager.getAppData();
            this.addonName = Util.getAddonName();
            //state model
            this.stateModel = new Backbone.Model({
                sortKey: 'name',
                sortDirection: 'asc',
                count: 100,
                offset: 0,
                fetching: true
            });

            //accounts collection
            this.accounts = generateCollection(options.props.name);

            //Change search
            this.listenTo(this.stateModel, 'change:search change:sortDirection change:sortKey', _.debounce(() => {
                this.fetchListCollection(this.accounts, this.stateModel);
            }, 0));
        },

        render: function () {
            const addButtonData = {
                    buttonId: "addAccountBtn",
                    buttonValue: "Add Account"
                },
                {props} = this,
                accountDeferred = this.fetchListCollection(this.accounts, this.stateModel);
            accountDeferred.done(function () {
                //Caption
                this.caption = new CaptionView({
                    countLabel: _('Accounts').t(),
                    model: {
                        state: this.stateModel
                    },
                    collection: this.accounts,
                    noFilterButtons: true,
                    filterKey: _.map(props.entity, e => e.name)
                });
                //Create view
                this.accountList = new Table({
                    stateModel: this.stateModel,
                    collection: this.accounts,
                    refCollection: this.combineCollection(),
                    showActions: true,
                    enableMoreInfo: props.table.moreInfo ? true : false,
                    component: props,
                });

                this.$el.append(this.caption.render().$el);
                this.$el.append(this.accountList.render().$el);
                $(`${this.containerId} .table-caption-inner`).prepend($(_.template(ButtonTemplate)(addButtonData)));

                $('#addAccountBtn').on('click', function () {
                    var dlg = new EntityDialog({
                        el: $(".dialog-placeholder"),
                        collection: this.accounts,
                        component: props,
                        isInput: false
                    }).render();
                    dlg.modal();
                }.bind(this));
            }.bind(this));
            return this;
        },

        fetchListCollection: function (collection, stateModel) {
            var search = '';
            if (stateModel.get('search')) {
                search = stateModel.get('search');
            }

            stateModel.set('fetching', true);
            return collection.fetch({
                data: {
                    sort_dir: stateModel.get('sortDirection'),
                    sort_key: stateModel.get('sortKey').split(','),
                    search: search,
                    count: stateModel.get('count'),
                    offset: stateModel.get('offset')
                },
                success: function (response, options) {
                    stateModel.set('fetching', false);
                }.bind(this)
            });
        },

        //Different from the function in manage_input
        combineCollection: function () {
            var temp_collection = new ProxyBase([], {
                    appData: this.appData.toJSON(),
                    targetApp: this.addonName,
                    targetOwner: "nobody"
                }),
                service;

            for (service in this.services) {
                if (this.services.hasOwnProperty(service)) {
                    temp_collection.add(this[service].models, {silent: true});
                }
            }

            return temp_collection;
        }
    });
});
