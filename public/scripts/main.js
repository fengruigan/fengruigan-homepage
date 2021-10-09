const registerEmailCopy = () => {
  const bootstrap = window.bootstrap;
  let toastTrigger = document.getElementById("copy-email");
  let successToast = document.getElementById("toast-success");
  let failureToast = document.getElementById("toast-failure");
  // let errorMessage = document.getElementById("error-message");

  if (toastTrigger && successToast && failureToast) {
    toastTrigger.addEventListener("click", async () => {
      let success = new bootstrap.Toast(successToast);
      let fail = new bootstrap.Toast(failureToast);
      try {
        await navigator.clipboard.writeText("fengruigan@gmail.com");
        success.show();
      } catch (err) {
        // errorMessage.innerText = err.message;
        fail.show();
      }
    });
  }
};

registerEmailCopy();
