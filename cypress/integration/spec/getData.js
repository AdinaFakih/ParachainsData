describe('Get data from Parachains.info Page', () => {

    // it('Verify Parachains.info logo is visible', () => {
    //     cy.visit('https://parachains.info/');
    //     cy.get('img[class="parachain_logo_img"]').should('be.visible');
    // })

    // it('Verify Project list is present', () => {
    //     cy.get('[id="parachains_table"]').should('be.exist');   //get table tag
    //     cy.get('th[class="project_column sorting"]').scrollIntoView().should('be.visible');
    //     cy.wait(1000);
    // })

    it('Crawler', () => {
        cy.visit('/');
        cy.get('img[class="parachain_logo_img"]').should('be.visible');
        //cy.get('#parachains_table').children().debug();
        cy.get('[id="parachains_table"]').should('be.exist');   //get table tag
        cy.get('th[class="project_column sorting"]').scrollIntoView().should('be.visible');
        cy.get('#parachains_table>tbody>tr>td>div>div>a').each(($el) => {
            const herf = $el.attr('href');
            cy.log(herf);
        
            // then I will do your test:
            cy.visit(herf);
            cy.title().should('include', 'Parachains.info');
            cy.get('section').then((section) => {
                if (body.find('[class="fab fa-twitter fa-lg"]').length < 0) {  //section has tag i less than 
                    cy.log("no twitter");
                }
                else {
                    cy.get('[class="fab fa-twitter fa-lg"]').should('not.be.visible')
                }
            //cy.get('[class="fab fa-twitter fa-lg"]').should('not.be.visible')
            })
        
        });
        
        // cy.get('#parachains_table>tbody>tr>td>div>div>a')
        //     .invoke('attr', 'href')
        //     .then(href => {
        //         console.log(href);
        //         cy.visit(href);
        //.children().debug();

        //.each(elem => {});
        //.get('tr').get('td')
        //});
    })


    // it('Iterate through list of all projects', () => {
    //     const visited = new Set();
    //     const toVisit = ['/'];  //https://parachains.info
        
    //     function visitNextUrl(){
    //         if (toVisit.length === 0) {
    //             return
    //         }
    //         //cy.log(`to visit: ${toVisit.join(', ')}`);
    //         const url = toVisit.shift(); //breadth first search 
    //         visited.add(url);
    //         cy.visit(url);
    //         cy.get('img[class="parachain_logo_img"]').should('be.visible');
    //         cy.wait(1000);
    //         cy.get('table>tbody>tr>td>div>div>a')
    //             .should(Cypress._.noop)
    //             .then(($links)=> {
    //                 const links = $links
    //                     .toArray()
    //                     .map((link)=> link.getAttribute('href'))
    //                     .filter((url) => !url.startsWith('http') && !url.startsWith('//'))
    //                     .filter((url) => !visited.has(url))
    //                     .filter((url) => !toVisit.includes(url))
    //                 console.log(links)
    //                 toVisit.push(...links)
    //                 cy.wait(2000);
    //                 // if(cy.get('[class="fab fa-twitter fa-lg"]').should('not.be.visible')){
    //                 //     return
    //                 // }
    //             })
    //             cy.get('[class="fab fa-twitter fa-lg"]').then(visitNextUrl);
    //     }
    //     visitNextUrl();
    // })
})