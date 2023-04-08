document.write(`
<style>
  .mdl-dialog {
    border: none;
    box-shadow: 0 9px 46px 8px rgba(0, 0, 0, 0.14), 0 11px 15px -7px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.2);
    width: responsive; }
  .mdl-dialog__title {
    padding: 24px 24px 0;
    margin: 0;
    font-size: 2.5rem; }
  .mdl-dialog__actions {
    padding: 8px 8px 8px 24px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap; 
</style>

<!-- Style Buttons -->
<style>
    .btn-blogger button {
        margin: 20px 0px;
        width: 100%;
        height: 45px;
        border: none;
        outline: none;
        font-size: 16px;
        background: #242424;
        color: #f5f5f5;
        border-radius: 10px;
        font-weight: 600;
        cursor: pointer
    }
</style>
<!-- End Style Buttons -->

<script>
  (function() {
    'use strict';
    var dialog = document.querySelector('#modal-example');
    var closeButton = dialog.querySelector('button');
    var showButton = document.querySelector('#show-modal-eswhik');
    
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    var closeClickHandler = function(event) {
      dialog.close();
    };
    var showClickHandler = function(event) {
      dialog.showModal();
    };
    showButton.addEventListener('click', showClickHandler);
    closeButton.addEventListener('click', closeClickHandler);
    }()); 
</script>
`)
