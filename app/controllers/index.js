import Controller from '@ember/controller';
import { computed } from "@ember/object";
import { run } from "@ember/runloop";

export default Controller.extend({
  pickedRuleset: null,

  rulesetPicked: computed("pickedRuleset", function() {
    return this.pickedRuleset != null;
  }),

  actions: {
    pickRandomRuleset() {
      this.set("pickedRuleset", null);
      this.set("decidingRuleset", true);

      run.later(() => {
        this.set("decidingRuleset", false);
        this.set("pickedRuleset", this.get("model")[Math.floor(Math.random() * this.get("model.length"))]);
      }, 1000);

    }
  }
});
