var Elemenator = {
  elem: function(settings){
        if(!settings.tagName)
            return false;
        var newElem = this.createElement(settings.tagName);
        this.addAttributes(newElem, settings.attributes);
        this.addContent(newElem, settings.inner);
        if(settings.attach)
            this.attachTo(newElem, settings.attach, settings.attachTo);
        return newElem;
    },
  list: function(settings){
      settings.tagName = 'ul';
      var arr = settings.items || [];
      var ulElem = this.elem(settings);
      var liElem, liTmp;
      for(var i=0;i<arr.length;i++){
            if(typeof arr[i] === 'string')
                liTmp = {inner: arr[i]};
            else liTmp = arr[i];
            liTmp.tagName = 'li';
            liTmp.attach = 'append';
            liElem = this.elem(liTmp);
            this.addContent(ulElem, liElem);
      }
      return ulElem;
    },
  createElement: function(tagName){
        var newElem = document.createElement(tagName);
        return newElem;
    },
  addAttributes: function(elem, attrs){
        for(var attr in attrs){
            elem.setAttribute(attr, attrs[attr]);
        }
        return elem;
    },
  addContent: function(elem, content){
        if(typeof content === 'string')
            elem.innerText = content;
        if(content && typeof content == 'object' && content.hasOwnProperty('tagName'))
            elem.appendChild(content);
        return elem;
    },
  attachTo: function(elem, action, target){
        action = action || 'append';
        target = target || document.body;
        if(action === 'append'){
            if(typeof target === 'string') 
               document.getElementById(target).appendChild(elem);
            else target.appendChild(elem);
        } else {
            if(typeof target === 'string') 
                target = document.getElementById(target);
            target.insertBefore(elem, target.firstChild);
        }
    }
};
