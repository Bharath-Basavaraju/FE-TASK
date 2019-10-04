export const fetchData = async () => {
    const url = "http://s3.ap-south-1.amazonaws.com/ypui-resources/InterviewQns/Products.json";
    
    const headers = {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
      };
    
    try {
      let response = await fetch(url, headers);
      let data = await response.json();
      return data;
    } catch (e) {
        return e
    }
  };