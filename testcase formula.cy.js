const create_formula = () => cy.xpath("//div[contains(text(),'สร้างสูตร')]");
const optionsCategoryId = () => cy.xpath("//div[@id='mui-component-select-optionsCategoryId']");
const optionsCategoryId2 = () => cy.xpath("//body/div[@id='menu-optionsCategoryId']/div[3]/ul[1]/li[15]");
const optionsId = () => cy.xpath("//div[@id='mui-component-select-optionsId']");
const optionsId2 = () => cy.xpath("//body/div[@id='menu-optionsId']/div[3]/ul[1]/li[3]");

const type1 = () => cy.xpath("//div[contains(text(),'(')]");
const type2 = () => cy.xpath("//span[contains(text(),'จำนวน')]");
const type3 = () => cy.xpath("//span[contains(text(),'ราคา')]");
const type4 = () => cy.xpath("//div[contains(text(),')')]");
