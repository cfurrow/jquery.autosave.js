# jquery.autosave.js

    $("input").autosave({url:"/save",success:function(){},error:function(){});

That will bind a "change" event handler to all input elements, and post their values to the "/save" url each time the input value has changed. 


## Options
You can pass any of these options to the .autosave() function:
<table class="table table-striped table-lined">
  <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th class="span3">Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>url</td>
      <td>string</td>
      <td>null</td>
      <td>Url use to post ajax data.</td>
    </tr>
    <tr>
      <td>event</td>
      <td>string</td>
      <td>change</td>
      <td>Event that causes the plugin to send data to your url. See <a href="http://api.jquery.com/on/">jQuery.bind</a> for options.</td>
    </tr>
    <tr>
      <td>data</td>
      <td>object</td>
      <td>null</td>
      <td>Object that holds all data that will be posted back to the url when the event is fired. You can set global default values to be sent here. All data-* attribute values end up here, minus "data-" (e.g. "data-id" becomes "id").</td>
    </tr>
    <tr>
      <td>success</td>
      <td>function</td>
      <td>function(data,$jqueryElement){}</td>
      <td>Callback used when data was saved successfully. The data returned from the ajax request, plus the jQuery element are passed to this method.</td>
    </tr>
    <tr>
      <td>error</td>
      <td>function</td>
      <td>function(error,$jqueryElement){}</td>
      <td>Callback used when data was not saved, or there was an error. The jQuery element is passed to this method.</td>
    </tr>
    <tr>
      <td>before</td>
      <td>function</td>
      <td>function($jqueryElement){}</td>
      <td>Callback called just before a request is sent to the server. The jQuery element is passed to this method.</td>
    </tr>
  </tbody>
</table>

