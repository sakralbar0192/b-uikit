import { describe, it} from "vitest";
import { mount } from "@vue/test-utils";
import BBtn from "../src/components/BBtn.vue";

describe("BBtn", () => {
  it("renders properly", () => {
    const wrapper = mount(BBtn, { slots: { default: "Click me" } });
    expect(wrapper.text()).toContain("Click me");
  });

  it("applies primary color classes", () => {
    const wrapper = mount(BBtn, {
      props: { color: "primary" },
      slots: { default: "Primary" },
    });
    
    expect(wrapper.classes().some(cls => cls.includes("bg-primary-600"))).toBe(true);
  });

  it("applies squared classes", () => {
    const wrapper = mount(BBtn, {
      props: { squared: true },
      slots: { default: "Squared" },
    });
    
    expect(wrapper.classes()).toContain("b-btn--squared");
  });

  it("applies pulsate classes", () => {
    const wrapper = mount(BBtn, {
      props: { pulsate: true },
      slots: { default: "Pulsate" },
    });
    
    expect(wrapper.classes()).toContain("b-btn--pulsating");
  });

  it("is disabled when disabled prop is true", () => {
    const wrapper = mount(BBtn, {
      props: { disabled: true },
      slots: { default: "Disabled" },
    });
    
    expect(wrapper.attributes("disabled")).toBeDefined();
  });

  it("shows loading state", () => {
    const wrapper = mount(BBtn, {
      props: { loading: true },
      slots: { default: "Loading" },
    });
    
    expect(wrapper.classes()).toContain("cursor-not-allowed");
  });

  it("shows arrows when props are true", () => {
    const wrapper = mount(BBtn, {
      props: { arrowRight: true, innerArrowLeft: true },
      slots: { default: "Arrows" },
    });
    
    expect(wrapper.classes()).toContain("b-btn--arrow-right");
    
    expect(wrapper.classes()).toContain("b-btn--inner-arrow-left");
  });

  it("renders loader slot when loading and textInline", () => {
    const wrapper = mount(BBtn, {
      props: { loading: true, textInline: true },
      slots: { default: "Loading", loader: "Custom Loader" },
    });
    
    expect(wrapper.text()).toContain("Custom Loader");
    
    expect(wrapper.text()).toContain("Loading");
  });
});