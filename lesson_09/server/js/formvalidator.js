'use strict'
age.onblur = function () {

    if (isNaN(this.value) || (this.value < 1) || (this.value > 100)) {

        age.value = 'Should be from 1 to 100';
        age.focus();

    } else {

        this.classList.remove('error');
        this.classList.add('accepted');
        address.focus();

    }
}

Age.onblur = function () {

    if (isNaN(this.value) || (this.value < 1) || (this.value > 100)) {

        Age.value = 'Should be from 1 to 100';
        Age.focus();

    } else {

        this.classList.remove('error');
        this.classList.add('accepted');
        Address.focus();

    }
}