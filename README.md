# wmarks-components

## Início rápido

Instale usando o `npm`:

```bash
npm i wmarks-components
```

Instale as dependências e execute documentação (storybook) para conhecer os components:

```bash
npm i
npm run storybook
```

Exemplo de como usar no seu projeto:

```javascript
import { ActionMenu } from 'wmarks-components'
import {Styles} from 'wmarks-components';

function Page() {
  return (
    <Styles/>
    <ActionMenu
      backgroundColor="colorBlackThird"
      borderColor="colorSecond"
      color="colorBlackFirst"
      lBackgroundColor="colorFirst"
      lShadowColor="colorSecond"
      shadowColor="colorSecond"
      sizeHeight="25"
      sizeWidth="28"
      src="static/media/pageBuilder.674eef96.png"
    >
      Create Page Builder
    </ActionMenu>
  )
}

export default Page
```
