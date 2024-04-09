export function getAddToCart() {
  return cy.get("a[onclick*='addToCart']")
}

export function getPlaceOrder() {
  return cy.get("#orderModal")
}

export function getName() {
  return cy.get("#name")
}

export function getCountry() {
  return cy.get("#country")
}

export function getCity() {
  return cy.get("#city")
}

export function getCard() {
  return cy.get("#card")
}

export function getMonth() {
  return cy.get("#month")
}

export function getYear() {
  return cy.get("#year")
}

export function getPurchase() {
  return cy.get("*[onclick*='purchaseOrder']")
}

export function getThanks() {
  return cy.get("sweet-alert.showSweetAlert.visible")
}

export function getUsername() {
  return cy.get("#loginusername")
}

export function getPassword() {
  return cy.get("#loginpassword")
}

export function getLoginIn() {
  return cy.get("*[onclick*='logIn()']")
}

export function getProduct1() {
  return cy.get("*[href='prod.html?idp_=1']")
}

export function getProduct2() {
  return cy.get("*[href='prod.html?idp_=2']")
}


export function getGoHome() {
  return cy.get("*[href*='index']")
}

export function getGoLogin() {
  return cy.get("#login2")
}

export function getGoCart() {
  return cy.get("#cartur")
}