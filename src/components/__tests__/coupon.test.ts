import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Coupon from "../coupon.vue";

describe("coupon test", () => {
  test("rendering test", () => {
    const wrapper = mount(Coupon);
    expect(wrapper.text()).toContain("Couponコード：1234");
  });
});
