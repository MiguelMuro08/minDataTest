import * as Test from '../pattern/Test'

beforeEach(() => {
  cy.visit('https://demoblaze.com/')
})
describe('Casos', () => {
  it('Caso de prueba 1', () => { 
    Test.getProduct1().click()
    Test.getAddToCart().click()
    Test.getGoHome().click()
    Test.getProduct2().click()
    Test.getAddToCart().click()
    Test.getGoCart().click()
    Test.getPlaceOrder().click()
    Test.getName().type("Miguel")
    Test.getCountry().type("Cordoba")
    Test.getCity().type("Buenos Aires")
    Test.getCard().type("000000000000")
    Test.getMonth().type("22")
    Test.getYear().type("3232")
    Test.getPurchase().click()
  })
  it('Caso de prueba 2', () => {

    Test.getGoLogin().click()
    Test.getUsername().type("standard_user")
    Test.getPassword().type("secret_sauce") 
    Test.getLoginIn().click()  
    Test.getGoCart().click()
    Test.getPlaceOrder().click()
    Test.getName().type("Miguel")
    Test.getCountry().type("Argentina")
    Test.getCity().type("Cordoba")
    Test.getCard().type("000000000000")
    Test.getMonth().type("22")
    Test.getYear().type("3232")
    Test.getPurchase().click()
  })
})