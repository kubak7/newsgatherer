<template>
    <div class='root d-flex'>
        <section class='u-clearfix u-section-1' id='sec-d654'>
            <div class='u-clearfix u-sheet u-sheet-1'>
                <div
                    class='u-border-3 u-border-palette-3-light-3 u-container-style u-expanded-width-xs u-group u-group-1'>
                    <div class='u-container-layout u-container-layout-1'>
                        <h2 class='u-align-center u-text u-text-1'>Register</h2>
                        <div class='u-align-center u-form u-form-1'>
                            <form @submit.prevent='register'
                                  class='u-clearfix u-form-spacing-10 u-form-vertical u-inner-form'
                                  style='padding: 10px' name='form'>
                                <div class='u-form-group u-form-name'>
                                    <label for='name-efba' class='u-form-control-hidden u-label'>Email</label>
                                    <input type='email' placeholder='Email address...' v-model='email' id='name-efba'
                                           name='email'
                                           class='u-border-1 u-border-grey-30 u-input u-input-rectangle u-white'
                                           required=''>
                                </div>
                                <div class='u-form-group u-form-group-3'>
                                    <label for='text-30bd' class='u-form-control-hidden u-label'></label>
                                    <input type='password' placeholder='Password...' v-model='password' id='text-30bd'
                                           name='password'
                                           class='u-border-1 u-border-grey-30 u-input u-input-rectangle u-white'>
                                </div>
                                <div class='u-align-center u-form-group u-form-submit'>
                                    <button
                                        class='u-btn u-btn-submit u-button-style u-hover-palette-1-dark-1 u-palette-3-base u-btn-1'
                                        type='submit'>Register
                                    </button>
                                </div>
                                <router-link to='/login'>Already have an account? Sign in here</router-link>
                                <input type='hidden' value='' name='recaptchaResponse'>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        register() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Successfully registered! Please login.');
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                });
        },
    },
};
</script>
