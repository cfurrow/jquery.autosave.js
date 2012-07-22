jQuery.fn.autosave = function(options){
  var $ = jQuery;
  var defaults = {
    data:{id:this.attr("data-id"),url:""},
    event: "blur",
    success: function(){},
    error  : function(){}
  };
  options = $.extend(options,defaults,options.extra);
  var dataAttrs = getDataAttributes(this[0]);
  options.data = $.extend(options.data,dataAttrs);

  console.log(options);

  function getDataAttributes(el){
    var rDataAttr = /data\-(.+)$/;
    var attrs = {};
    attrs.value = el.value;
    $.each(el.attributes,function(index,attr){
      if(rDataAttr.test(attr.nodeName)){
        attrs[rDataAttr.exec(attr.nodeName)[1]] = attr.value;
      }
    });
    return attrs;
  }
  
  this.bind(options.event,function(){
    var $this = $(this);
    options.data.value = $this.val();
    options.data = $.extend(options.data,getDataAttributes(this));
    console.log(options);
    $.ajax({
      url:options.url,
      data:options.data,
      success:options.success,
      error:options.error
    });
  });
};
