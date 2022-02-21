describe('Get data from Parachains.info Page', () => {

    it('Verify Parachains.info logo is visible', () => {
        cy.visit('https://parachains.info/');
        cy.get('img[class="parachain_logo_img"]').should('be.visible');
    })

    it('Verify Product menu are present', () => {
        cy.get('th[class="project_column sorting"]').scrollIntoView().should('be.visible');
        cy.wait(1000);
    })

    it('Verify menu Links are  present', () => {
        cy.get('[id="parachains_table"]').should('be.exist');   //get table tag
        //cy.get('[id="parachains_table"]').children();  
       // for (let index = 0; index < 161; index++) {
            cy.get('table>tbody>tr>td>div>div>a').then(($links)=> {
                const links = $links.toArray().map((link)=> link.getAttribute('href'))
                console.log(links)
                cy.wait(2000);
            })
            //cy.get('table>tbody>tr').click();
            //cy.get('[data-id="'+index+'"] > .project_column > .dd-flex > .media > .media-body > .d-flex > .mr-2 > .font-weight-bold').click();
            //cy.wait(2000);
            //cy.go(-1) // equivalent to clicking back button
       // }
        //cy.get('table>tbody>tr>td>div>div>a')
        //cy.get('[id="parachains_table"]').get('td').each(elem => {});
        //cy.get("a[title='Live for Teams']").first().should('be.exist');

        //*[@id="parachains_table"]/tbody/tr[@data-id="763"]

        //table>tbody>tr>td>div>div>a
    })

})