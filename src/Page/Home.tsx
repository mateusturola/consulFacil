import { styled } from '../../stitches.config';

export default function Home() {
  const Button = styled('button', {
    backgroundColor: 'gray500',
    borderRadius: '9999px',
    fontSize: '13px',
    border: '0',

    variants: {
      color: {
        violet: {
          backgroundColor: 'blueviolet',
          color: 'white',
          '&:hover': {
            backgroundColor: 'darkviolet',
          },
        },
        gray: {
          backgroundColor: 'gainsboro',
          '&:hover': {
            backgroundColor: 'lightgray',
          },
        },
      },
    },
  });

  return (
    <div>
      <h1>Home</h1>
      <p>Soon...</p>

      <Button
        color={{
          '@bp2': 'violet',
          '@bp1': 'gray'
        }}
      >
        Button
      </Button>
      <Button color="gray">Button</Button>
    </div>
  );
}
