import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BAlert from "../src/components/BAlert.vue";

describe("BAlert", () => {
  it("renders properly", () => {
    const wrapper = mount(BAlert, {
      slots: { default: "This is an alert message" }
    });
    expect(wrapper.text()).toContain("This is an alert message");
  });

  it("applies info type classes", () => {
    const wrapper = mount(BAlert, {
      props: { type: "info" },
      slots: { default: "Info alert" },
    });

    const alertDiv = wrapper.find("div").find("div");
    expect(alertDiv.classes()).toContain("bg-blue-50");
    expect(alertDiv.classes()).toContain("border-blue-200");
    expect(alertDiv.classes()).toContain("text-blue-800");
  });

  it("applies warning type classes", () => {
    const wrapper = mount(BAlert, {
      props: { type: "warning" },
      slots: { default: "Warning alert" },
    });

    const alertDiv = wrapper.find("div").find("div");
    expect(alertDiv.classes()).toContain("bg-yellow-50");
    expect(alertDiv.classes()).toContain("border-yellow-200");
    expect(alertDiv.classes()).toContain("text-yellow-800");
  });

  it("applies success type classes", () => {
    const wrapper = mount(BAlert, {
      props: { type: "success" },
      slots: { default: "Success alert" },
    });

    const alertDiv = wrapper.find("div").find("div");
    expect(alertDiv.classes()).toContain("bg-green-50");
    expect(alertDiv.classes()).toContain("border-green-200");
    expect(alertDiv.classes()).toContain("text-green-800");
  });

  it("applies error type classes", () => {
    const wrapper = mount(BAlert, {
      props: { type: "error" },
      slots: { default: "Error alert" },
    });

    const alertDiv = wrapper.find("div").find("div");
    expect(alertDiv.classes()).toContain("bg-red-50");
    expect(alertDiv.classes()).toContain("border-red-200");
    expect(alertDiv.classes()).toContain("text-red-800");
  });

  it("renders title slot when provided", () => {
    const wrapper = mount(BAlert, {
      slots: {
        title: "Alert Title",
        default: "Alert content"
      }
    });

    expect(wrapper.text()).toContain("Alert Title");
    expect(wrapper.text()).toContain("Alert content");
  });

  it("renders actions slot when provided", () => {
    const wrapper = mount(BAlert, {
      slots: {
        default: "Alert content",
        actions: "<button>Action</button>"
      }
    });

    expect(wrapper.html()).toContain("Action");
  });

  it("shows dismiss button when dismissible is true", () => {
    const wrapper = mount(BAlert, {
      props: { dismissible: true },
      slots: { default: "Dismissible alert" },
    });

    const dismissButton = wrapper.find("button");
    expect(dismissButton.exists()).toBe(true);
  });

  it("does not show dismiss button when dismissible is false", () => {
    const wrapper = mount(BAlert, {
      props: { dismissible: false },
      slots: { default: "Non-dismissible alert" },
    });

    const dismissButton = wrapper.find("button");
    expect(dismissButton.exists()).toBe(false);
  });

  it("emits input event when dismiss button is clicked", async () => {
    const wrapper = mount(BAlert, {
      props: { dismissible: true },
      slots: { default: "Dismissible alert" },
    });

    const dismissButton = wrapper.find("button");
    await dismissButton.trigger("click");

    expect(wrapper.emitted()).toHaveProperty("input");
  });

  it("applies small size classes when small prop is true", () => {
    const wrapper = mount(BAlert, {
      props: { small: true },
      slots: { default: "Small alert" },
    });

    const alertDiv = wrapper.find("div").find("div");
    expect(alertDiv.classes()).toContain("p-3");
    expect(alertDiv.classes()).toContain("text-xs");
  });

  it("renders correct icon based on type", () => {
    const wrapper = mount(BAlert, {
      props: { type: "success" },
      slots: { default: "Success alert" },
    });

    const iconElement = wrapper.find("i");
    expect(iconElement.classes()).toContain("icon-checked-outlined");
  });

  it("applies correct icon color based on type", () => {
    const wrapper = mount(BAlert, {
      props: { type: "error" },
      slots: { default: "Error alert" },
    });

    const iconContainer = wrapper.find("div.flex-shrink-0");
    expect(iconContainer.classes()).toContain("text-red-600");
  });
});