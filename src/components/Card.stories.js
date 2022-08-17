// YourComponent.stories.js

import Card from './Card.vue'

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Card',
  component: Card,
  argTypes: {
    title: 'String',
    subHeader: 'String',
    media: 'String',
    supportingText: 'String',
    buttonText: 'String'
  }
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { Card },
  setup() {
    //👇 The args will now be passed down to the template
    return { args }
  },
  template: '<Card v-bind="args"/>'
})

export const Primary = Template.bind({})

Primary.args = {
  /* 👇 The args you need here will depend on your component */
  title: 'Example title',
  subText: 'Example sub text'
}

export const Secondary = Template.bind({})

Secondary.args = {
  /* 👇 The args you need here will depend on your component */
  title: 'Example title',
  subText: 'media text',
  mediaHref: 'favicon.ico'
}

export const Third = Template.bind({})

Third.args = {
  /* 👇 The args you need here will depend on your component */
  title: 'Example title',
  subText: 'media text',
  mediaHref: 'favicon.ico',
  supportingText:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum nemo, quod temporibus incidunt neque explicabo. Nobis eaque quibusdam atque quo aliquam deleniti vitae esse totam tenetur modi, aperiam minima.'
}

export const Fourth = Template.bind({})

Fourth.args = {
  /* 👇 The args you need here will depend on your component */
  title: 'Example title',
  subText: 'media text',
  mediaHref: 'favicon.ico',
  supportingText:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum nemo, quod temporibus incidunt neque explicabo. Nobis eaque quibusdam atque quo aliquam deleniti vitae esse totam tenetur modi, aperiam minima.',
  buttonText: 'go'
}
