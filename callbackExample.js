/* 
getDogs(url, function(dogObject, dogImage))

url - the url for your api get request
dogObject - the returned json converted to an object
dogImage - a string containing the url to the dog image

*/

function getDogs(url, userFunction)
{
    httpRequest = new XMLHttpRequest();
    httpRequest.open("get", url);
    httpRequest.send();
    httpRequest.onreadystatechange = function()
    {
        if (httpRequest.readyState == 4 && httpRequest.status==200)
        {
            var dogObject = JSON.parse(httpRequest.responseText);
            var imgString = dogObject.message;
            // console.log(dogObject);
            // console.log(imgString);
            userFunction(dogObject, imgString);

        }
    }
}

getDogs("https://dog.ceo/api/breeds/image/random", myFunction );

function myFunction(obj, strImgSrc)
{
    console.log(obj);
    document.getElementById('dogImage').src = strImgSrc;

}





