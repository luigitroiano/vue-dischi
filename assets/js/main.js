let app = new VTTCue({
  el: "#root",
  data: {

  },
  mounted() {
    var config = {
    method: 'get',
    url: 'https://flynn.boolean.careers/exercises/api/array/music',
    };

    axios(config)
    .then(function (response) {
      
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  
});