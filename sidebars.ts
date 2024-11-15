import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

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
    //intro
    {
      type: 'category',
      label: 'Introduction',
      collapsible: true,
      collapsed: true,
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Object-Oriented Programming',
      collapsible: true,
      collapsed: true,
      items: [
        'oop/konsep-dasar-oop',
        'oop/membuat-class-object',
        'oop/contoh-praktek-class-mahasiswa',
      ],
    },
    {
      type: 'category',
      label: 'Atribut dan Method pada Class',
      collapsible: true,
      collapsed: true,
      items: [
        'atribut-method/atribut-dalam-class',
        'atribut-method/method-dalam-class',
        'atribut-method/init-constructor',
      ],
    },
    {
      type: 'category',
      label: 'Encapsulation',
      collapsible: true,
      collapsed: true,
      items: [
        'encapsulation/encapsulation-basics',
        'encapsulation/encapsulation-example',
      ],
    },
    {
      type: 'category',
      label: 'Inheritence',
      collapsible: true,
      collapsed: true,
      items: [
        'inheritence/inheritance-basics',
        'inheritence/inheritance-example',
      ],
    },
    {
      type: 'category',
      label: 'Polymorphism',
      collapsible: true,
      collapsed: true,
      items: [
        'polymorphism/polymorphism-basics',
        'polymorphism/polymorphism-example',
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
