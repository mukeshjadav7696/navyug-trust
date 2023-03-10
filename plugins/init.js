import jquery from "jquery";

export function initTab() {
    jquery("li.tab").on("click", function () {
        const $this = jquery(this);
        //reset
        jquery("li.tab").removeClass("is-active");
        jquery("div.tab-content").addClass("is-hidden");

        //show selected
        $this.addClass("is-active");
        const content = $this.data("content");
        jquery("#" + content).removeClass("is-hidden");
    });
}