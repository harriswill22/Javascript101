const cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];
  function Names(NameOfCities){
        return NameOfCities.map(function (the_name){
        return the_name.name
        });     
  }
  Names(cities);
  console.log(Names(cities));