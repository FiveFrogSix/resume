import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import LoadingSpinner from "./LoadingSpinner.vue"

const config = {
  global: {
    components: {
      FontAwesomeIcon
    }
  },
  props: {
    loading: true
  },
  slots: {
    default: "Submit"
  }
}

describe("LoadingFull.vue Test", () => {
  it("when props loading true", () => {
    config.props.loading = true
    const wrapper = mount(LoadingSpinner, config)
    const icon = wrapper.findComponent(FontAwesomeIcon)
    expect(icon.exists()).toBe(true)
    expect(icon.props("icon")).toEqual("fa-solid fa-spinner")
    expect(icon.classes("fa-spin")).toBe(true)
    expect(wrapper.text()).not.toContain("Submit")
  })

  it("when props loading false", () => {
    config.props.loading = false
    const wrapper = mount(LoadingSpinner, config)
    const icon = wrapper.findComponent(FontAwesomeIcon)
    expect(icon.exists()).toBe(false)
    expect(wrapper.text()).toContain("Submit")
  })
})
