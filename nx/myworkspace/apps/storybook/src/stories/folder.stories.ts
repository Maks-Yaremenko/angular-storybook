import { storiesOf, moduleMetadata } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';
import { linkTo } from '@storybook/addon-links';

storiesOf('My Header|My Folder/in folder/My Group', module)
    .add('First button', () => ({
        component: Button,
        props: {
            text: 'My Button',
        }
    }))
    .add('with emoji', () => ({
        component: Button,
        props: {
            text: '😀 😎 👍 💯'
        }
    }))
    .add('Go to My Button', () => ({
        template:
            '<button (click)="linkTo()">Link</button>',
        props: {
            linkTo: linkTo('MyButtonComponent', 'My button Angular component')
        }
    }));
