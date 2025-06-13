describe('Mobile Login Test Suite', () => {

  it('Test 3 - Login with valid credentials and check home screen', async () => {
    // Espera a que el campo usuario esté visible
    const inputUsername = await $('~input-username'); // accessibilityId
    await inputUsername.waitForDisplayed({ timeout: 5000 });
    await inputUsername.setValue('testuser');

    // Espera y llena campo password
    const inputPassword = await $('~input-password');
    await inputPassword.waitForDisplayed({ timeout: 5000 });
    await inputPassword.setValue('Test@1234');

    // Toca el botón login
    const btnLogin = await $('~button-login');
    await btnLogin.waitForEnabled({ timeout: 5000 });
    await btnLogin.click();

    // Espera que aparezca un elemento en home para confirmar login exitoso
    const homeWelcome = await $('~home-welcome');
    await homeWelcome.waitForDisplayed({ timeout: 10000 });

    // Afirmación simple con expect
    expect(await homeWelcome.isDisplayed()).toBe(true);
  });

});
