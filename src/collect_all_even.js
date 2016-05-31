
function collect_same_elements(collection_a, object_b) 
{

 var arr = [];//先定义一个空的数组
	var same = 0;
	for(var i=0; i<collection_a.length; i++)
	{
	   same = collection_a[i].key;
	   	for(var j=0; j<object_b.value.length; j++)
		{
			if(object_b.value[j] == same)
			{
				arr.push(same);
			 }
		}
	}	
return arr;
}

module.exports = collect_same_elements;
