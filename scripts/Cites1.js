const cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];
  function below70(ColdCities){
        return ColdCities.filter(function (city){
        return city.temperature < 70.0
        });     
  }
  below70(cities);
  console.log(below70(cities));
  