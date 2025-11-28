import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Physical AI and Humanoid Robotics Course',
      link: {
        type: 'generated-index',
        title: 'Physical AI and Humanoid Robotics Course',
        description: 'Learn about Physical AI and Humanoid Robotics',
        slug: '/physical-ai-robotics',
      },
      items: [
        {
          type: 'category',
          label: 'Introduction to Physical AI and Robotics',
          items: [
            'physical-ai-robotics/introduction/what-is-physical-ai',
            'physical-ai-robotics/introduction/history',
            'physical-ai-robotics/introduction/key-concepts',
          ],
        },
        {
          type: 'category',
          label: 'Humanoid Robot Anatomy and Mechanics',
          items: [
            'physical-ai-robotics/anatomy/structural-components',
            'physical-ai-robotics/anatomy/sensors',
            'physical-ai-robotics/anatomy/kinematics-dynamics',
          ],
        },
        {
          type: 'category',
          label: 'Perception for Humanoid Robots',
          items: [
            'physical-ai-robotics/perception/computer-vision',
            'physical-ai-robotics/perception/auditory-speech',
            'physical-ai-robotics/perception/tactile-force',
          ],
        },
        {
          type: 'category',
          label: 'Control Systems for Humanoid Robots',
          items: [
            'physical-ai-robotics/control-systems/balance-locomotion',
            'physical-ai-robotics/control-systems/manipulation-grasping',
            'physical-ai-robotics/control-systems/whole-body-control',
          ],
        },
        {
          type: 'category',
          label: 'Machine Learning in Physical AI',
          items: [
            'physical-ai-robotics/machine-learning/reinforcement-learning',
            'physical-ai-robotics/machine-learning/imitation-learning',
            'physical-ai-robotics/machine-learning/deep-learning',
          ],
        },
        {
          type: 'category',
          label: 'Human-Robot Interaction',
          items: [
            'physical-ai-robotics/human-robot-interaction/safe-interaction',
            'physical-ai-robotics/human-robot-interaction/social-communication',
            'physical-ai-robotics/human-robot-interaction/ethical-considerations',
          ],
        },
        {
          type: 'category',
          label: 'Applications and Future Trends',
          items: [
            'physical-ai-robotics/applications/real-world-applications',
            'physical-ai-robotics/applications/emerging-technologies',
            'physical-ai-robotics/applications/future-of-humanoid-ai',
          ],
        },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
