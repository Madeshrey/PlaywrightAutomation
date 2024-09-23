const {test,expect}=require('@playwright/test')

test('First Playwright Test' ,async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title())
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator("[type='password']").fill('learning')
    await page.locator("#signInBtn").click();
   // console.log("maddy")
   let locate=await page.locator("(//h4[@class='card-title']/a)[1]");
    //console.log(await page.locator("[style*='block']").textContent());

    console.log(await locate.textContent())
});
test('second demo playwright',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator("//a[contains(text(), 'Register here')]").click()
    // await page.locator("//h3[contains(text(), 'Let's Shop')]").click()
    await page.locator('#firstName').fill("Madesh")
    await page.locator('[type="lastName"]').fill("Maddy")
    await page.locator("[formcontrolname='userMobile']").fill("1234567891")
    await page.locator('[type="email"]').fill("abcd234@gmail.com")
    await page.locator('#userPassword').fill("Abc12345")
    await page.locator("#confirmPassword").fill("Abc12345")
    await page.locator("//input[@type='checkbox']").click()
    await page.locator("[value='Register']").click()
});
// test('end to end',async({page})=>{
//     test.setTimeout(60000); 
//     await page.goto("https://rahulshettyacademy.com/client")
//     await page.locator('#userEmail').fill('abcd234@gmail.com')
//     await page.locator('#userPassword').fill('Abc12345')
//     await page.locator('[value="Login"]').click()
//     const board=page.locator("[class='card-body']");
//     const product='ZARA COAT 3';
//     const count= await board.count();
//     for(let i=0;i<count;++i){
//         const productName = await board.nth(i).locator("b").textContent();
//           if(productName===product){
//             await board.nth(i).locater("[class='fa fa-shopping-cart']").click();
//             break;
//           }
//     }
   // await page.pause()
});
// test.only('@Client App login', async ({ page }) => {
//     //js file- Login js, DashboardPage
//     const email = "anshika@gmail.com";
//     const productName = 'zara coat 3';
//     const products = page.locator(".card-body");
//     await page.goto("https://rahulshettyacademy.com/client");
//     await page.locator("#userEmail").fill(email);
//     await page.locator("#userPassword").type("Iamking@000");
//     await page.locator("[value='Login']").click();
//     await page.waitForLoadState('networkidle');
//     const titles = await page.locator(".card-body b").allTextContents();
//     console.log(titles);
//     const count = await products.count();
//     for (let i = 0; i < count; ++i) {
//        if (await products.nth(i).locator("b").textContent() === productName) {
//           //add to cart
//           await products.nth(i).locator("text= Add To Cart").click();
//           break;
//        }
//     }
  
//     await page.locator("[routerlink*='cart']").click();
//     //await page.pause();
  
//     await page.locator("div li").first().waitFor();
//     const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
//     expect(bool).toBeTruthy();
//     await page.locator("text=Checkout").click();
  
//     await page.locator("[placeholder*='Country']").type("ind");
  
//     const dropdown = page.locator(".ta-results");
//     await dropdown.waitFor();
//     const optionsCount = await dropdown.locator("button").count();
//     for (let i = 0; i < optionsCount; ++i) {
//        const text = await dropdown.locator("button").nth(i).textContent();
//        if (text === " India") {
//           await dropdown.locator("button").nth(i).click();
//           break;
//        }
//     }
  
//     await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
//     await page.locator(".action__submit").click();
//     await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
//     const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
//     console.log(orderId);
// })
