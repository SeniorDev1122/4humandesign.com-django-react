let baseURL = '/api';

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
export default class API {
  static baseURL = baseURL;
  
  static async request(url, method = 'GET', body = null) {
    //   let access_token = data;
      var csrftoken = getCookie('csrftoken');    
      
      return await fetch(baseURL + url, {
        method: method,
        headers: {
            
            "Referer": "http://4humandesign.com",
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        // //   'Authorization': 'Bearer ' + (access_token ? access_token : null)
        },
        body: body === null ? null : JSON.stringify(body)
      });
  }

  static async createContact(data)
  {
    try{

        console.log(JSON.stringify(data))
        let res = await this.request('contact/', 'POST', data)
        res = res.json()
        return res
    }catch(err)
    {
        return {err:err}
    }
 }

 static async getList()
 {
     try{
        let res = await this.request('blog/', 'GET')
        res =res.json()
        return res
     }
     catch(err)
     {
         return {err:err}
     }
 }

 static async getBlogDetails(id)
 {
     try{
        let res = await this.request('blog/'+id, 'GET')
        res =res.json()
        return res
     }
     catch(err)
     {
         return {err:err}
     }
 }
}   