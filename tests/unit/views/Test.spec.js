import { mount } from '@vue/test-utils';
import Test from '@/views/Test.vue';
import { describe, expect, it } from 'vitest';
import vuetify from '@/plugins/vuetify';

describe('Test', () => {

    const wrapper = mount(Test, {
        global: {
            plugins: [vuetify]
        }
    });

    it('renders the initial count', () => {
        expect(wrapper.text()).toContain('Counter: 0');
    });

    it('increments the count when the button is clicked', async () => {
        const button = wrapper.find('#btnup');
        await button.trigger('click');
        expect(wrapper.text()).toContain('Counter: 1');
    });

    it('decreased the count when the button is clicked', async () => {
        const button = wrapper.find('#btndown');
        await button.trigger('click');
        expect(wrapper.text()).toContain('Counter: 0');
    });
});