$(document).ready(function() {
    $.ajax({
        url: "http://127.0.0.1/oracle/test_api_prod/?regate=682170"

    }).then(function(data) {
	var json=new JSONOBJECT(data);
	JSONArray jsonArr= json.getJSONArray("disfe");
	String[] arr=new String[jsonArr.length()];
	for(int i=0;i<jsonArr.length();i++)
	{
	arr[i]=jsonArr.getString(i)
   console.log(arr[i]);
	}
       //$('.greeting-id').append(data.id);
       //$('.greeting-content').append(data.content);
    });
});