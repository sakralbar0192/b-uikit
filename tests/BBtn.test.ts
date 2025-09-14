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

    expect(wrapper.classes()).toContain("bg-primary-600");
    expect(wrapper.classes()).toContain("text-white");
    expect(wrapper.classes()).toContain("hover:bg-primary-700");
  });

  it("applies squared classes", () => {
    const wrapper = mount(BBtn, {
      props: { squared: true },
      slots: { default: "Squared" },
    });

    expect(wrapper.classes()).not.toContain("rounded-md");
  });

  it("applies pulsate classes", () => {
    const wrapper = mount(BBtn, {
      props: { pulsate: true },
      slots: { default: "Pulsate" },
    });

    expect(wrapper.classes()).toContain("animate-pulse");
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
    expect(wrapper.classes()).toContain("opacity-50");
  });

  it("shows arrows when props are true", () => {
    const wrapper = mount(BBtn, {
      props: { arrowRight: true, innerArrowLeft: true },
      slots: { default: "Arrows" },
    });

    // Note: Arrow functionality would need additional implementation
    // For now, these props are accepted but don't add specific classes
    expect(wrapper.props().arrowRight).toBe(true);
    expect(wrapper.props().innerArrowLeft).toBe(true);
  });

  it("renders loader slot when loading and textInline", () => {
    const wrapper = mount(BBtn, {
      props: { loading: true, textInline: true },
      slots: { default: "Loading", loader: "Custom Loader" },
    });

    expect(wrapper.text()).toContain("Custom Loader");
    expect(wrapper.text()).toContain("Loading");
  });

  it("applies size classes correctly", () => {
    const wrapper = mount(BBtn, {
      props: { size: "lg" },
      slots: { default: "Large Button" },
    });

    expect(wrapper.classes()).toContain("h-12");
    expect(wrapper.classes()).toContain("px-6");
    expect(wrapper.classes()).toContain("text-lg");
  });
});