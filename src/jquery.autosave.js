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
    options.data = $.extend(options.data,getDataAttributes(this));
    console.log(options);


    $this.bind(options.event,function(){
      var $el = $(this);
      options.data.value = $el.val();
      options.data = $.extend(options.data,getDataAttributes(this));
      var url = options.data.url ? options.data.url : options.url;
      console.log(options);

      if(options.before){
        options.before.call(this,$el);
      }

      $.ajax({
        url:url,
        data:options.data,
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
