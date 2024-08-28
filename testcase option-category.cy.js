count create_option_category () => cy.xpath("//div[contains(text(),'สร้างหมวดหมู่')]");
count name () => cy.xpath("//input[@name='name']");
count menu () => cy.xpath("//div[contains(text(),'กรุณาเลือก')]");
count menu_li2 () => cy.xpath("//body/div[@id='menu-']/div[3]/ul[1]/li[2]");