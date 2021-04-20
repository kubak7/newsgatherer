<template>
  <div class="root d-flex">
    <section class="u-clearfix u-section-1" id="sec-d654">
      <div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-border-3 u-border-palette-3-light-3 u-container-style u-expanded-width-xs u-group u-group-1">
          <div class="u-container-layout u-container-layout-1">
            <h2 class="u-align-center u-text u-text-1">Zarejestruj się</h2>
            <div class="u-align-center u-form u-form-1">
              <form action="#" method="POST" class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" style="padding: 10px"  name="form">
                <div class="u-form-group u-form-name">
                  <label for="name-efba" class="u-form-control-hidden u-label">Nazwa</label>
                  <input type="text" placeholder="Login" id="name-efba" name="name" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="">
                </div>
                <div class="u-form-email u-form-group">
                  <label for="email-efba" class="u-form-control-hidden u-label">E-mail</label>
                  <input type="email" placeholder="E-mail" id="email-efba" name="email" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="">
                </div>
                <div class="u-form-group u-form-group-3">
                  <label for="text-30bd" class="u-form-control-hidden u-label"></label>
                  <input type="text" placeholder="Hasło" id="text-30bd" name="text" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white">
                </div>
                <div class="u-form-group u-form-group-4">
                  <label for="text-8ba0" class="u-form-control-hidden u-label"></label>
                  <input type="text" placeholder="Powtórz hasło" id="text-8ba0" name="text-1" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white">
                </div>
                <div class="u-align-center u-form-group u-form-submit">
                  <a href="#" class="u-btn u-btn-submit u-button-style u-hover-palette-1-dark-1 u-palette-3-base u-btn-1">Prześlij</a>
                  <input type="submit" value="submit" class="u-form-control-hidden">
                </div>
                <router-link to="/login">Masz już konto? Zaloguj się</router-link>
                <div class="u-form-send-message u-form-send-success"> Dziękujemy! Twoja wiadomość została wysłana. </div>
                <div class="u-form-send-error u-form-send-message"> Nie można wysłać wiadomości. Proszę poprawić błędy i spróbować ponownie. </div>
                <input type="hidden" value="" name="recaptchaResponse">
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import '../assets/css/rejestracja.css'
export default {
  name: "Register"
}
</script>

<style scoped >

</style>
