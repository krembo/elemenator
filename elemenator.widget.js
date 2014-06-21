Elemenator.widget = {
    menu:  function(settings){
        var listObj = {attributes: settings.attributes, attach: settings.attach, items: []};
        for(var i =0; i<settings.items.length; i++){
            listObj.items.push({attributes: settings.itemsAttributes, inner: Elemenator.elem({tagName: 'a', attributes: settings.items[i].attributes, inner: settings.items[i].text})});
        }
        return Elemenator.list(listObj);
    }
};
