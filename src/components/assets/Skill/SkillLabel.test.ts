import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import SkillLabel from "./SkillLabel.vue"

describe("SkillLabel.vue Test", () => {
  it("renders message when component is created", () => {
    const wrapper = mount(SkillLabel, {
      slots: {
        default: "This Skill Label"
      }
    })
    expect(wrapper.html()).toBe(
      `<div class="w-100 fs-5 fw-500"><span>This Skill Label</span></div>`
    )
  })
})
