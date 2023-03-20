<template>
  <section class="">
    <div class="modal" id="home-modal">
      <div class="modal-background" id="modal-bg"></div>
      <div class="modal-content">
        <div class="is-flex is-justify-content-flex-end">
          <button
            class="button is-ghost is-flex is-align-self-center"
            aria-label="close"
            id="modal-close"
          >
            <span class="icon has-text-primary">
              <i class="fas fa-times"></i>
            </span>
          </button>
        </div>
        <figure class="">
          <img src="/img/home-page/statue-updated.jpg" />
        </figure>
      </div>
    </div>
  </section>
</template>
<style>
.modal-content::-webkit-scrollbar {
  width: 3px;
}

.modal-content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.modal-content::-webkit-scrollbar-thumb {
  background-color: darkgrey;
}
</style>
<script>
import jquery from "jquery";

export default {
  name: "ModalSection",
  //data() {},
  mounted() {
    const $modal = jquery("#home-modal");
    $modal.addClass("is-active");
    // setTimeout(() => {
    //   $modal.removeClass("is-active");
    // }, 15000);
    jquery("#modal-bg").on("click", function () {
      $modal.removeClass("is-active");
    });
    jquery("#modal-close").on("click", function () {
      $modal.removeClass("is-active");
    });
  },
};
</script>