const calcularTotalDeMilhas = require('./src/main.js');


test('A função calcularTotalDeMilhas existe', () => {
  expect(calcularTotalDeMilhas).toBeDefined()
  expect(typeof calcularTotalDeMilhas).toBe("function");
});

test('Voando em companhias não parceiras', () => {
  const voos = [
    {
      origem: "Miami",
      destino: "Nova York",
      distancia: 1200,
      tipo: "Nacional",
      operadora: "JetStream"
    },
    {
      origem: "Londres",
      destino: "Nova York",
      distancia: 3500,
      tipo: "Internacional",
      operadora: "Pacific Air"
    }
  ]

  expect(calcularTotalDeMilhas(voos)).toEqual({
    nacionais: 0,
    internacionais: 0,
    invalidos: 2,
    milhas: 0
  })
});

test('Voando somente dentro do país', () => {
  const voos = [
    {
      origem: "Rio de Janeiro",
      destino: "São Paulo",
      distancia: 400,
      tipo: "Nacional",
      operadora: "AeroLink"
    },
    {
      origem: "Belo Horizonte",
      destino: "Rio de Janeiro",
      distancia: 300,
      tipo: "Nacional",
      operadora: "AeroLink"
    },
    {
      origem: "Miami",
      destino: "Nova York",
      distancia: 1200,
      tipo: "Nacional",
      operadora: "JetStream"
    },
    {
      origem: "São Paulo",
      destino: "Belo Horizonte",
      distancia: 500,
      tipo: "Nacional",
      operadora: "StarFly"
    },
  ]

  expect(calcularTotalDeMilhas(voos)).toEqual({
    nacionais: 3,
    internacionais: 0,
    invalidos: 1,
    milhas: 1200
  })
});

test('Voando somente no pro exterior', () => {
  const voos = [
    {
      origem: "São Paulo",
      destino: "Miami",
      distancia: 8000,
      tipo: "Internacional",
      operadora: "SkyWings"
    },
    {
      origem: "São Paulo",
      destino: "Paris",
      distancia: 10000,
      tipo: "Internacional",
      operadora: "Oceanic Airways"
    },
    {
      origem: "Miami",
      destino: "Nova York",
      distancia: 1200,
      tipo: "Nacional",
      operadora: "JetStream"
    },
    {
      origem: "Brasília",
      destino: "Nova York",
      distancia: 5500,
      tipo: "Internacional",
      operadora: "StarFly"
    },
  ]

  expect(calcularTotalDeMilhas(voos)).toEqual({
    nacionais: 0,
    internacionais: 3,
    invalidos: 1,
    milhas: 47000
  })
});

test('Todos os meus voos', () => {
  const voos = [
    {
      origem: "Rio de Janeiro",
      destino: "São Paulo",
      distancia: 400,
      tipo: "Nacional",
      operadora: "AeroLink"
    },
    {
      origem: "São Paulo",
      destino: "Miami",
      distancia: 8000,
      tipo: "Internacional",
      operadora: "SkyWings"
    },
    {
      origem: "São Paulo",
      destino: "Paris",
      distancia: 10000,
      tipo: "Internacional",
      operadora: "Oceanic Airways"
    },
    {
      origem: "Belo Horizonte",
      destino: "Rio de Janeiro",
      distancia: 300,
      tipo: "Nacional",
      operadora: "AeroLink"
    },
    {
      origem: "Miami",
      destino: "Nova York",
      distancia: 1200,
      tipo: "Nacional",
      operadora: "JetStream"
    },
    {
      origem: "São Paulo",
      destino: "Belo Horizonte",
      distancia: 500,
      tipo: "Nacional",
      operadora: "StarFly"
    },
    {
      origem: "Porto Alegre",
      destino: "Rio de Janeiro",
      distancia: 800,
      tipo: "Nacional",
      operadora: "AeroLink"
    },
    {
      origem: "Rio de Janeiro",
      destino: "Fortaleza",
      distancia: 2800,
      tipo: "Nacional",
      operadora: "StarFly"
    },
    {
      origem: "Fortaleza",
      destino: "Lisboa",
      distancia: 6500,
      tipo: "Internacional",
      operadora: "Oceanic Airways"
    },
    {
      origem: "Belo Horizonte",
      destino: "Salvador",
      distancia: 900,
      tipo: "Nacional",
      operadora: "StarFly"
    },
    {
      origem: "Paris",
      destino: "Londres",
      distancia: 300,
      tipo: "Internacional",
      operadora: "AeroLink"
    },
    {
      origem: "Londres",
      destino: "Nova York",
      distancia: 3500,
      tipo: "Internacional",
      operadora: "Pacific Air"
    },
    {
      origem: "São Paulo",
      destino: "Lisboa",
      distancia: 7000,
      tipo: "Internacional",
      operadora: "SkyWings"
    },
    {
      origem: "Belo Horizonte",
      destino: "São Paulo",
      distancia: 500,
      tipo: "Nacional",
      operadora: "AeroLink"
    },
    {
      origem: "Rio de Janeiro",
      destino: "Recife",
      distancia: 2600,
      tipo: "Nacional",
      operadora: "Oceanic Airways"
    },
    {
      origem: "Recife",
      destino: "Madri",
      distancia: 5900,
      tipo: "Internacional",
      operadora: "SkyWings"
    },
    {
      origem: "São Paulo",
      destino: "Rio de Janeiro",
      distancia: 400,
      tipo: "Nacional",
      operadora: "StarFly"
    },
    {
      origem: "Rio de Janeiro",
      destino: "Brasília",
      distancia: 400,
      tipo: "Nacional",
      operadora: "StarFly"
    },
    {
      origem: "Brasília",
      destino: "Nova York",
      distancia: 5500,
      tipo: "Internacional",
      operadora: "StarFly"
    },
    {
      origem: "São Paulo",
      destino: "Brasília",
      distancia: 900,
      tipo: "Nacional",
      operadora: "SkyWings"
    }
  ]
  expect(calcularTotalDeMilhas(voos)).toEqual({
    nacionais: 11,
    internacionais: 7,
    invalidos: 2,
    milhas: 96900
  })
})