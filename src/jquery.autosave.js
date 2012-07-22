jQuery.fn.autosave = function(options){
  var $ = jQuery;
  var defaults = {
    id: this.attr("data-id"),
    event: "blur",
    url: "",
    success: function(){},
    error  : function(){}
  };
  options = $.extend(options,defaults,options.extra);
  var dataAttrs = getDataAttributes(this[0]);
  options = $.extend(options,dataAttrs);

  function getDataAttributes(el){
    var rDataAttr = /data\-(.+)$/;
    var attrs = [];
    $.each(el.attributes,function(index,attr){
      if(rDataAttr.test(attr.nodeName)){
        attrs.push(rDataAttr.exec(attr.nodeName)[1]);
      }
    });
    return attrs;
  }
  
  this.bind(options.event,function(){
    var $this = $(this);
    options.value = $this.val();
    options = $.extend(options,getDataAttributes(this));
    $.ajax({
      url:options.url,
      data:options.data,
      success:options.success,
      error:options.error
    });
  });
};
