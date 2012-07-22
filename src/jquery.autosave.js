jQuery.fn.autosave = function(options){
  var $ = jQuery;
  $.each(this,function(){
    var $this = $(this);
    var defaults = {
      data:{},
      event: "change",
      success: function(){},
      error  : function(){},
      before : function(){}
    };
    options = $.extend(defaults,options);
    var data = getDataAttributes(this);

    var event = data.event || options.event;
    $this.on(event,function(){
      var $el = $(this);
      data.value = $el.val();
      data = $.extend(data,getDataAttributes(this));
      var url = data.url ? data.url : options.url;

      if(options.before){
        options.before.call(this,$el);
      }

      $.ajax({
        url:url,
        data:data,
        success:function(data){
          options.success(data,$el);
        },
        error:function(error){
          options.error(error,$el);
        }
      });
    });
  });

  function getDataAttributes(el){
    var rDataAttr = /^data\-(\w+)$/;
    var attrs = {};
    attrs.value = el.value;
    attrs.name  = el.name;

    $.each(el.attributes,function(index,attr){
      if(rDataAttr.test(attr.nodeName)){
        attrs[rDataAttr.exec(attr.nodeName)[1]] = attr.value;
      }
    });
    return attrs;
  }
  
};
