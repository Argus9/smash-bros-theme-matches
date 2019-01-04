import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({
  pickedRuleset: null,

  rulesetPicked: computed("pickedRuleset", function() {
    return this.pickedRuleset != null;
  }),

  actions: {
    pickRandomRuleset() {
      this.set("pickedRuleset", this.get("model")[Math.floor(Math.random() * this.get("model.length"))]);
    }
  }
});
