jQuery.fn.autosave = function(options){
  var $ = jQuery;
  $.each(this,function(){
    var $this = $(this);
    var defaults = {
      data:{id:$this.attr("data-id"),url:""},
      event: "blur",
      success: function(){},
      error  : function(){}
    };
    options = $.extend(options,defaults,options.extra);
    var dataAttrs = getDataAttributes(this);
    options.data = $.extend(options.data,dataAttrs);

    console.log(options);

    $this.bind(options.event,function(){
      var $el = $(this);
      options.data.value = $el.val();
      options.data = $.extend(options.data,getDataAttributes(this));
      console.log(options);
      $.ajax({
        url:options.url,
        data:options.data,
        success:options.success,
        error:options.error
      });
    });
  });

  function getDataAttributes(el){
    var rDataAttr = /data\-(.+)$/;
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
