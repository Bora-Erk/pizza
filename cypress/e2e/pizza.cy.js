describe('Sipariş Formu Testleri', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/siparis');
    });
  
    it('Sipariş notu inputuna metin girilebilmeli', () => {
      const testNotu = 'Ekstra acı olsun';
      cy.get('textarea[name="SiparisNotu"]')
        .type(testNotu)
        .should('have.value', testNotu);
    });
  
    it('Birden fazla malzeme seçilebilmeli', () => {
      const toppings = ['Pepperoni', 'Domates', 'Biber'];
      toppings.forEach(item => {
        cy.get(`input[type="checkbox"][value="${item}"]`)
          .check()
          .should('be.checked');
      });
    });
  
    it('Formu doldurup gönderiyor ve yönlendiriyor', () => {
     
      cy.get('input[type="radio"][value="Orta"]').check();
  
      cy.get('select#dough').select('Kalın');
  
      const toppings = ['Pepperoni', 'Domates', 'Biber'];
      toppings.forEach(item => {
        cy.get(`input[type="checkbox"][value="${item}"]`).check();
      });
  
      cy.get('textarea[name="SiparisNotu"]').clear().type('Bol malzemeli lütfen');
  
      cy.get('button[type="submit"]').click();
  
      
    });
  
  }); 
  